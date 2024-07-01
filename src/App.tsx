import Cart from './views/Cart'
import Details from './views/Details'
import Home from './views/Home'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import NotFound from './views/NotFound'
import OnSale from './views/OnSale'
import store from './store'
import { Provider } from 'react-redux'

function App() {

  const browserRouter = createBrowserRouter([
    {path: "/", element: <Home/>},
    {path: "/details/:productId", element: <Details/>},
    {path: "/cart", element: <Cart/>},
    {path: "/onsale", element: <OnSale/>},
    {path: "/*", element: <NotFound/>}
  ])

  return (
    <Provider store={store}>
      <RouterProvider router={browserRouter}></RouterProvider>
    </Provider>
  )
}

export default App
