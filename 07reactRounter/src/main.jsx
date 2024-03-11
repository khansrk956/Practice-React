import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx' 
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// ******First way*****
/* 
const router = createBrowserRouter([
  {
    path:'/',  // main element and we are doing nexting inside home -> about, contact and other things.
    element: <Layout />,
    children: [
    {path: "", element: <Home />},
    {path:"about", element:<About />},
    {path:"contact",element:<Contact />},
  ]
  }
])
*/

// ******** Second way ******
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route 
      loader={githubInfoLoader} // api call through this component.
      path='github'
      element={<Github />}/> 
      {/* it also provide loader property. fetch api directly and api call direclty. load provide fast_optimizing.*/}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
