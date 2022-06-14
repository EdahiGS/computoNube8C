import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-emerald-900 pt-8 pb-6">
      
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-emerald-800 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <img
              alt=""
              src="https://jocotitlan.gob.mx/wp-content/uploads/2020/03/Gobierno-Federal.png"
              className=""
            />
            
            
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-black text-sm font-semibold mb-2">
                 Enlaces
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="https://datos.gob.mx">Datos
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="https://www.gob.mx/publicaciones">Publicaciones
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="http://sep.gob.mx/es/sep1/transparencia_rendicion">Portal de Obligaciones de Transparencia
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="https://www.infomex.org.mx/gobiernofederal/home.action">PNT
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="http://www.inai.org.mx/">INAI
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="http://alertadores.funcionpublica.gob.mx/">Alerta
                    </a>
                  </li>                 
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-black text-sm font-semibold mb-4">
                gob.mx
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="https://www.gob.mx/accesibilidad">Declaración de Accesibilidad
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="https://www.gob.mx/privacidadintegral">Aviso de privacidad
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="https://www.gob.mx/privacidadsimplificado">Aviso de privacidad simplificado
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="https://www.gob.mx/terminos">Términos y Condiciones
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="https://www.gob.mx/terminos#medidas-seguridad-informacion">Política de seguridad
                    </a>
                  </li>
                  <li>
                    <a className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                        href="https://www.gob.mx/sitemap">Mapa de sitio
                    </a>
                  </li>
                </ul>

              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-black text-sm font-semibold mb-2">
                  Contacto
                </span>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-black hover:text-blueGray-500 font-semibold block pb-2 text-sm"
                    MIT License>Siguenos en
                  </p>
                  </li>
                  
                </ul>
                <div className="mt-6">
              <a href="https://twitter.com/GobiernoMX">
              <button
                className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              </a>
              <a href="https://www.facebook.com/gobmexico">
              <button
                className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                type="button"
              >
                <i className="fab fa-facebook-f"></i>
              </button>
              </a>
            </div>
              </div>
              
            </div>
          </div>
        </div>
        <hr className="my-6 border-emerald-500" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
