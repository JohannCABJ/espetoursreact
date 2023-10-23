import { useRoutes, BrowserRouter } from 'react-router-dom'
import {ShoppingCartProvider} from '../../context'
import Home from '../home'
//import MyAccount from '../myaccount'
//import MyOrder from '../myorder'
//import MyOrders from '../myorders'
//import Signin from '../signin'
import NotFound from '../notfound'
import Navbar from '../../components/navbar'
import Vehicle from '../vehicle'
import Ct from '../ct'

import './App.css'


const Approutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/vehicle/:id', element: <Vehicle /> },
    { path: '/ct/', element: <Ct /> },
    { path: '/*', element: <NotFound /> },
    //{ path: '/myaccount', element: <MyAccount /> },
    //{ path: '/myorder', element: <MyOrder /> },
    //{ path: '/myorders', element: <MyOrders /> },
    //{ path: '/my-orders/last', element: <MyOrder /> },
    //{ path: '/myorders/:id', element: <MyOrder /> },
    //{ path: '/signin', element: <Signin /> },
    //{ path: '/drivers', element: <Signin /> },
  ])
  return routes
}

const App = () => {
  return (
    <ShoppingCartProvider>
    < BrowserRouter >
      <Approutes />
      <Navbar />

    </BrowserRouter>
    </ShoppingCartProvider>



  )
}

export default App
