import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Login";
import Browser from "./Browser";
const Body = () => {
  const appRoute= createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browser',
      element: <Browser/>
    }
  ])
  return <>
  <RouterProvider router={appRoute}/>
    </>
}

export default Body
