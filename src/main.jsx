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
const router = createBrowserRouter([
  {path: '/', Component: Root,
    children: [
      {index: true, Component: Home},
      {path: 'stats', Component: Stats},
      {path: 'timeline', Component: Timeline}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
