import { createContext, useState, useEffect } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // Product Detail · Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Product Detail · Show product
  const [productToShow, setProductToShow] = useState({
    Placa: "",
    Interno: "",
    Soat: "",
    Modelo:"",
    Image:""
  })

  //get vehicles
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  //get vehicle by plate
  const [searchByTitle, setSearchByTitle] = useState(null)

  useEffect(() => {
    fetch('https://appespetours.fly.dev/api/v1/vehicles/')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.Placa.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle]) 

  return (
    <ShoppingCartContext.Provider value={{
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      productToShow,
      setProductToShow,
      items,
      setItems,
      filteredItems,
      setFilteredItems,
      searchByTitle,
      setSearchByTitle

    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
