import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, Route ,RouterProvider} from 'react-router-dom'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'

import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'

console.log(Layout);  
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path = ''element={<Home/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='user/' element={<User/>}>
      <Route path=':userid' element={<User/>}/>
    </Route>
    <Route path='github' loader={githubInfoLoader} element={<Github/>}/>
    <Route path='*' element={<h1>404</h1>}/>
  </Route>
));

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
