
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from "../../components/layout"
import { ShoppingCartContext } from '../../context'
import OrdersCard from '../../components/ordersCard'

function MyOrders() {

  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1>My Orders</h1>
      </div>
      {
        context.order.map((order, index) => (
          <Link key={index} to={`/myorders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>
        ))
      }
    </Layout>


  )
}

export default MyOrders