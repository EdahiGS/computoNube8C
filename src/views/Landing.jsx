import React from "react";
import { useState } from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import BotDesign from "components/Bot";
export default function Landing() {
	const [show, setShow] = useState(false);
	return (
		<>
			<Navbar transparent />

			<main>
				<div
					className="relative pt-16 pb-32 flex content-center items-center justify-center"
					style={{
						minHeight: "75vh",
					}}
				>
					<div
						className="absolute top-0 w-full h-full bg-center bg-cover"
						style={{
							backgroundImage:
								"url('https://encuentratubeca.mx/wp-content/uploads/2016/05/sep-color.jpg')",
						}}
					>
						<span
							id="blackOverlay"	
							className="w-full h-full absolute opacity-75 bg-black"
						></span>
					</div>
					<div className="container relative mx-auto">
						<div className="items-center flex flex-wrap">
							<div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
								<div className="pr-12">
									<h1 className="text-white font-semibold text-5xl">
										SEP
									</h1>
									<p className="mt-4 text-lg text-gray-300">
									Dependencia del gobierno federal que se encarga de crear las condiciones 
									que permitan asegurar el acceso de la población mexicana a una educación 
									de calidad, en el nivel y modalidad que la requiera y en la localidad 
									donde la demande.
									</p>
									
								</div>
							</div>
						</div>
					</div>
					<div
						className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
						style={{ height: "70px" }}
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
								className="text-red-800 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
				</div>

				<section className="pb-20 bg-gray-300 -mt-24">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap">
							<div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-500">
											<i className="fas fa-pen"></i>
										</div>
										<a href="https://educacionbasica.sep.gob.mx/">
										<h6 className="text-xl font-semibold">Educación Básica</h6></a>
										<p className="mt-2 mb-4 text-gray-600">
										Garantiza el derecho a la educación pública y gratuita, estipulado en el artículo tercero constitucional, 
										a todas las niñas, niños, adolescentes y jóvenes asegurando la igualdad de oportunidades para acceder 
										a una educación básica de calidad, donde adquieran los conocimientos y habilidades necesarios que les 
										permitan lograr una trayectoria escolar exitosa y una formación humana integral.
										</p>
									</div>
								</div>
							</div>

							<div className="w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
											<i className="fas fa-award"></i>
										</div>
										<a href="http://educacionmediasuperior.sep.gob.mx/">
										<h6 className="text-xl font-semibold">Educación Media Superior</h6></a>
										<p className="mt-2 mb-4 text-gray-600">
										El nivel medio superior está dividido en bachillerato general, bachillerato tecnológico y profesional técnico. 
										Los primeros dos son de carácter propedéutico, es decir, preparan a los alumnos para ingresar a la universidad. 
										Mientras que en el último se preparan a los alumnos para que puedan ingresar directamente al campo laboral. 
										</p>
									</div>
								</div>
							</div>

							<div className="pt-6 w-full md:w-4/12 px-4 text-center">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
									<div className="px-4 py-5 flex-auto">
										<div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-500">
											<i class="fas fa-graduation-cap"></i>
										</div>
										<a href="https://www.educacionsuperior.sep.gob.mx/">
										<h6 className="text-xl font-semibold">Educacion Superior</h6></a>
										<p className="mt-2 mb-4 text-gray-600">
										Secretaría de Educación Pública encargada de impulsar una educación de calidad que permita
										 la formación de profesionistas competitivos y comprometidos con el desarrollo regional y nacional,
										 para contribuir a la edificación de una sociedad más justa.
										</p>
									</div>
								</div>
							</div>
						</div>
						<hr className="my-6 border-red-600" />
						<div className="flex flex-wrap items-center mt-30">
							<div className="w-full md:w-9/12 px-4 mr-auto ml-auto">
								<div className="w-full md:w-2/12 px-4 mr-auto ml-auto">
									<h2 className="w-full text-4xl mb-4 p-5 font-semibold align-middle text-red-800">
										Cultura
									</h2>
								</div>
							</div>
							<div className="w-full md:w-6/12 px-4 mr-auto ml-auto rounded-lg bg-gray-300">
								<a href="https://tripulantes.sep.gob.mx/">
									<img
											alt="..."
											src="https://www.gob.mx/cms/uploads/image/file/703332/block1.jpg"
											className="w-full align-middle rounded-lg mb-4"
									/>
								</a>							
							</div>
							
							<div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-4 shadow-lg rounded-lg bg-orange-600">
									<a href="https://murales.sep.gob.mx/">
									<img
										alt="..."
										src="https://www.gob.mx/cms/uploads/image/file/703330/block2.jpg"
										className="w-full align-middle rounded-lg"
									/>
									</a>
									<blockquote className="relative p-8 mb-4">
									<a href="https://murales.sep.gob.mx/">
										<svg
											preserveAspectRatio="none"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 583 95"
											className="absolute left-0 w-full block"
											style={{
												height: "95px",
												top: "-94px",
											}}
										>
											
											<polygon
												points="-30,95 583,95 583,65"
												className="text-orange-600 fill-current"
											></polygon>
										</svg>
										</a>
										<p className="text-md font-light mt-2 text-white">
										La intención de este portal es ofrecer información básica para 
										conocer el vínculo entre el recinto histórico de la Secretaría de 
										Educación Pública (SEP), en el centro histórico de la ciudad de México, 
										y el muralismo, la tendencia pictórica más importante de la cultura 
										mexicana moderna.
										</p>
									</blockquote>
								</div>
							</div>
							<div className="w-full md:w-9/12 px-2 mr-auto ml-auto">
								<div className="w-full text-2xl p-2 font-semibold align-middle">
									<a href="https://sep.gob.mx/lagrandezademexico/">
										<img
											alt="..."
											className="max-w-full  shadow-lg w-full align-middle rounded-lg"
											src="https://www.gob.mx/cms/uploads/image/file/703331/block3.jpg"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="relative py-20 ">
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
								className="text-red-800 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
					<div className="flex flex-wrap justify-center text-center mb-24">
						<div className="w-full lg:w-6/12 px-4">
							<h2 className="text-4xl font-semibold text-red-800">Directorio</h2>
							<p className="text-lg leading-relaxed m-4 text-gray-600">
							En esta sección encontrarás el listado de servidores 
							públicos que conforman esta dependencia.
							</p>
						</div>
					</div>
					<div className="flex flex-wrap">
						<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
							<div className="px-6">
								<img
									alt="..."
									src="https://www.gob.mx/cms/uploads/image/file/714976/Secretaria-de-educacion-Delfina-Gomez.jpg"
									className="shadow-lg rounded-full max-w-full mx-auto"
									style={{ maxWidth: "120px" }}
								/>
								<div className="pt-6 text-center">
									<a href="https://www.gob.mx/sep/estructuras/delfina-gomez-alvarez">
										<h5 className="text-xl font-bold">Delfina Gomez Álvarez</h5>
									</a>
									<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
										Secretaria de Educación Pública
									</p>
									<div className="mt-6">
									<a href="https://twitter.com/delfinagomeza?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
										<button
											className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
											type="button"
										>
											<i className="fab fa-twitter"></i>
										</button>
										</a>
										<a href="https://www.facebook.com/DelfinaGomezAlvarez">
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
						<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
							<div className="px-6">
								<img
									alt="..."
									src="https://www.gob.mx/cms/uploads/image/file/636171/SUBSECRETARIA08__2_.jpg"
									className="shadow-lg rounded-full max-w-full mx-auto"
									style={{ maxWidth: "120px" }}
								/>
								<div className="pt-6 text-center">
									<a href="https://www.gob.mx/sep/estructuras/4902">
									<h5 className="text-xl font-bold">Martha Velda Hernández Moreno</h5>
									</a>
									<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
									Subsecretaria de Educación Básica
									</p>
									
								</div>
							</div>
						</div>
						<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
							<div className="px-6">
								<img
									alt="..."
									src="https://www.gob.mx/cms/uploads/structure/main_image/4211/thumb_ArroyoOrtiz.jpg"
									className="shadow-lg rounded-full max-w-full mx-auto"
									style={{ maxWidth: "120px" }}
								/>
								<div className="pt-6 text-center">
									<a href="https://www.gob.mx/sep/estructuras/juan-pablo-arroyo-ortiz">
										<h5 className="text-xl font-bold">Juan Pablo Arroyo Ortiz</h5>
										</a>
									<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
									Subsecretario de Educación Media Superior
									</p>										
								</div>
							</div>
						</div>
						<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
							<div className="px-6">
								<img
									alt="..."
									src="https://www.gob.mx/cms/uploads/structure/main_image/4212/thumb_CocheiroBojorquez.jpg"
									className="shadow-lg rounded-full max-w-full mx-auto"
									style={{ maxWidth: "120px" }}
								/>
								<div className="pt-6 text-center">
									<a href="https://www.gob.mx/sep/estructuras/luciano-concheiro-borquez">
										<h5 className="text-xl font-bold">Luciano Concheiro Bórquez</h5>
										</a>
									<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
									Subsecretario de Educación Superior
									</p>
									<div className="mt-6">
									<a href="https://twitter.com/lucianoconchier">
										<button
											className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
											type="button"
										>
											<i className="fab fa-twitter"></i>
										</button>
										</a>
										<a href="https://www.facebook.com/LucianoConcheiro/">
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
						<div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
							<div className="px-6">
								<img
									alt="..."
									src="https://www.gob.mx/cms/uploads/image/file/598073/WhatsApp_Image_2020-08-15_at_8.30.19_PM.jpeg"
									className="shadow-lg rounded-full max-w-full mx-auto"
									style={{ maxWidth: "120px" }}
								/>
								<div className="pt-6 text-center">
									<a href="https://www.gob.mx/sep/estructuras/luis-humberto-fernandez-fuentes-250340?state=published">
									<h5 className="text-xl font-bold">Luis Humberto Fernández Fuentes</h5>
									</a>
									<p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
									Títular de la AEFCM
									</p>
									<div className="mt-6">
									<a href="https://twitter.com/luis__humberto?lang=es">
									<button
										className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
										type="button"
									>
										<i className="fab fa-twitter"></i>
									</button>
									</a>
									<a href="https://m.facebook.com/LuisHFernandez/posts">
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
				</section>
				
				<section className="pb-20 relative block bg-gray-900">
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
								className="text-red-800 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>
					<div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
						<div className="flex flex-wrap text-center justify-center">
							<div className="w-full lg:w-6/12 px-4">
								<h2 className="text-4xl font-semibold text-white">
									Contacto
								</h2>
								<p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
								Horario de Atención de 8:00 a 20:00 horas.	
								</p>
							</div>
						</div>
						<div className="flex flex-wrap mt-12 justify-center">
							<div className="w-full lg:w-3/12 px-4 text-center">
								<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
								<i class="fas fa-map"></i> 
								</div>
								<h6 className="text-xl mt-5 font-semibold text-white">
									Ubicación
								</h6>
								<p className="mt-2 mb-4 text-gray-500">
									República de Argentina #28,
									Centro Histórico, Ciudad de México. C.P. 06020
								</p>
							</div>
							<div className="w-full lg:w-3/12 px-4 text-center">
								<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
									<i class="fas fa-phone"></i>
								</div>
								<h5 className="text-xl mt-5 font-semibold text-white">
								Teléfono 
								</h5>
								<p className="mt-2 mb-4 text-gray-500">
								(55) 36017599
								</p>
							</div>
							<div className="w-full lg:w-3/12 px-4 text-center">
								<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
								<i class="fas fa-headphones"></i>
								</div>
								<h5 className="text-xl mt-5 font-semibold text-white">
								Atención a la ciudadanía
								</h5>
								<p className="mt-2 mb-4 text-gray-500">
									(01800) 288 6688
								</p>
							</div>
						</div>
					</div>
				</section>
				
				<section className="relative block py-24 lg:pt-0 bg-gray-900">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">		
							<iframe title="Mapa SEP" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.435794454718!2d-99.13389265002431!3d19.436768886817614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae686e194958346e!2zMTnCsDI2JzEyLjQiTiA5OcKwMDcnNTQuMSJX!5e0!3m2!1ses-419!2smx!4v1655190511653!5m2!1ses-419!2smx" width="500" height="400" className="rounded-lg justify-center" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</section>
				<form action="" className="">
					<div className="fixed bottom-0 right-0 z-10">
						<button
							onClick={(e) => {
								e.preventDefault();
								if (show === false) {
									setShow(<BotDesign />);
								}
								if (show) {
									setShow(false);
								}
                
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="icon icon-tabler icon-tabler-message-circle-2"
								width="44"
								height="44"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="#7bc62d"
								fill="none"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
								<line x1="12" y1="12" x2="12" y2="12.01" />
								<line x1="8" y1="12" x2="8" y2="12.01" />
								<line x1="16" y1="12" x2="16" y2="12.01" />
							</svg>
						</button>
						{show}
					</div>
				</form>
			</main>
			<Footer />
		</>
	);
}
