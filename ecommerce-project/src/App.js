import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Cmp/Home"
import Images from "./Cmp/Images"

const router = createBrowserRouter([
  {
    path : '/',
    element: <Home />
  },
  {
    path: '/images',
    element: <Images />
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

