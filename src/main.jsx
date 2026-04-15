import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import Root from './Component/Root/Root.jsx'
import Home from './Component/Home/Home.jsx'
import Stats from './Component/Stats/Stats.jsx'
import Timeline from './Component/Timeline/Timeline.jsx'
import { RouterProvider } from 'react-router/dom'
import ContectDitels from './Component/ContectDitels/ContectDitels.jsx'
import Context from './Component/Context/Context.jsx'
import ContextProvider from './Component/Context/Context.jsx'
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx'
const router = createBrowserRouter([
  {path: '/', Component: Root,
    children: [
      {index: true, loader:()=> fetch('/data.json')  ,Component: Home},
      {path: 'stats', Component: Stats},
      {path: 'timeline', Component: Timeline},
      {path: 'ditels/:id',loader:()=> fetch('/data.json'),Component: ContectDitels}
    ],
    
   errorElement: <ErrorPage />
  }
])
createRoot(document.getElementById('root')).render(
 <ContextProvider>
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
 </ContextProvider>
)
