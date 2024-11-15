import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Form, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layoute from './Layoute/Layoute.jsx'
import Home from './Header/Home/Home.jsx'
import About from './Header/About/About.jsx'
import Contactus from './Header/Contactus/Contactus.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layoute/>,
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contactus",
        element : <Contactus/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
   </StrictMode>,
)
