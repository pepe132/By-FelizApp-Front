import React from 'react'
import { FacebookFilled, InstagramFilled,PhoneFilled,GoogleCircleFilled,ShopFilled } from '@ant-design/icons';

export const Footer = () => {

  return (
	<>
	<footer className='pie-pagina'>
		<div className='grupo-1'>
			<div className='box'>
				<figure>
				
					<img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1665208720/oto%C3%B1o2_xaqkeo.jpg' alt='logo-byfeliz'/>
					
				</figure>
			</div>
			<div className='box'>
				<h2>Contáctanos</h2>
				<p><span><ShopFilled /> Av. Héroe de Nacozari norte #1117</span> Col. Gremial, Aguascalientes,Ags, México</p>
				<p><PhoneFilled /> (+52) 449 399 16 99</p>
				<p><GoogleCircleFilled /> byfeliz.asociacion@gmail.com</p>
				
			</div>
			<div className='box'>
				<h2>Sobre nosotros</h2>
				<p>Elaboramos nuestros productos de acuerdo a sus necesidades con la mas alta calidad posible y siempre procurando la satisfacción del cliente!</p>
				<h2>Síguenos</h2>
				<div className='red-social'>
					<a href='https://www.instagram.com/by__feliz/'><InstagramFilled /></a>
					<a href='https://www.facebook.com/profile.php?id=100075856428388'><FacebookFilled /></a>

				</div>
			</div>
		</div>
		<div className='grupo-2'>
			<small>&copy; 2022 <b>ByFeliz</b> - Todos los derechos reservados</small>

		</div>
	</footer>

	</>
  )
}
