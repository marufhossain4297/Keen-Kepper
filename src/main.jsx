import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './index.css'
import router from './Routes/Routes'
import { ToastContainer } from 'react-toastify'
import FriendProvider from './Components/Context/UseContex'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
      <ToastContainer className='mt-5' hideProgressBar autoClose={1000} position='top-center' />
      <Toaster position='top-center' reverseOrder={false} />
    </FriendProvider>
  </StrictMode>,
)