import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path : '/',
    element: <h1>Home Page</h1>
  },
  {
    path: '/images',
    element: <h1>Images</h1>
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

