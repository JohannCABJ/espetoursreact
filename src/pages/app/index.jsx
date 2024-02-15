import { useRoutes, BrowserRouter } from 'react-router-dom'
import {ShoppingCartProvider} from '../../context'
import Home from '../home'
import Navbar from '../../components/navbar'
import Vehicle from '../vehicle'
import Ct from '../ct'
import Prevents from '../prevents'
import PreventsMonth from '../preventsMonth'
import Vehicleupd from '../vehicleupd'
//import MyOrder from '../myorder'
//import MyOrders from '../myorders'
//import Signin from '../signin'
import NotFound from '../notfound'


import './App.css'


const Approutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/vehicle/:id', element: <Vehicle /> },
    { path: '/ct/', element: <Ct /> },
    { path: '/prevents/', element: <Prevents /> },
    { path: '/prevents/:month', element: <PreventsMonth /> },
    { path: '/vehicleupd/:id', element: <Vehicleupd /> },
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
