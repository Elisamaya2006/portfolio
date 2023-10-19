import React from 'react'
import './main.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'
import Formulario from './componentes/formulario/Formulario'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>,
  },
  {
    path: "/membro's",
    element: 
    <>
      <Header/>
      <div className='content-main'>Página Membro's!</div>
      <Footer/>
    </>,
  },
  {
    path: "/conteudo",
    element:
    <>
      <Header/>
      <div className='content-main'>Página de Conteúdo!</div>
      <Footer/>
    </>,
  },
  {
    path: "/design",
    element: 
      <>
        <Header/>
        <div className='content-main'>Página de Design!</div>
        <Footer/>
      </>,
  },
  {
    path: "/contato",
    element: 
      <>
        <Header/>
        <Formulario/>
        <Footer/>
      </>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)