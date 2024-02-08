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
  const [errorMsg, setErrorMsg] = useState(null);

  //get vehicle by plate
  const [searchByTitle, setSearchByTitle] = useState(null)

  useEffect(() => {
    fetch('https://appespetours.fly.dev/api/v1/vehicles/')
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => {
            throw new Error(err.message);
          });
        }
        return response.json();
      })
      .then(data => setItems(data))
      .catch(error => {
        console.error('Error:', error);
        setErrorMsg(error.message);
      });
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.Placa.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  }, [items, searchByTitle]) 

  //get prevents programmed
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    fetch("https://appespetours.fly.dev/api/v1/prevents/")
      .then((response) => response.json())
      .then((data) => {
        // Almacenamos todos los vehículos en el estado vehicleData
        setVehicleData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

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
      setSearchByTitle,
      vehicleData,
      setVehicleData,
      errorMsg
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
