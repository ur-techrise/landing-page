import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Schedule from './pages/Schedule.tsx'
import Team from './pages/Team.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  }
  ,{
    path: 'schedule',
    element: <Schedule />
  },
  {
    path: 'team',
    element: <Team />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
