import React from 'react'
import { PhoneOutlined, MailOutlined, FacebookFilled, InstagramFilled, YoutubeFilled,FacebookOutlined } from '@ant-design/icons';
import byFeliz from '../../assets/byFeliz.jpeg';

export const Footer = () => {
  return (
	<footer className="footer">
		<div className="container">
			<div className="row">
				<div className='footer-col-image'>
					<img src={byFeliz} alt='bifeliz' width={180}/>
					<div className='footer-col'>
					<ul>
						<li><a href="#">Politicas de privacidad</a></li>
						<li><a href="#">Terminos y condicones</a></li>
					</ul>

					</div>
					
				</div>
				

				<div className="footer-col">
					<h4 style={{textAlign:'center'}}>Mision</h4>
					<p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu erat finibus,
					pulvinar purus sit amet, rutrum tellus. Sed dictum risus id ullamcorper tincidunt. 
					Pellentesque a finibus turpis. Maecenas vel hendrerit sapien. Nam pulvinar turpis vel 
					dolor auctor, et commodo metus pharetra.</p>
					
					
				</div>
				<div className="footer-col">
					<h4 style={{textAlign:'center'}}>Vision</h4>
					<p style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu erat finibus,
					pulvinar purus sit amet, rutrum tellus. Sed dictum risus id ullamcorper tincidunt. 
					Pellentesque a finibus turpis. Maecenas vel hendrerit sapien. Nam pulvinar turpis vel 
					dolor auctor, et commodo metus pharetra.</p>
				
				</div>

				<div className="footer-col">
					<h4 style={{textAlign:'center',color:'white'}}>Contacto</h4>
				<div style={{textAlign:'center',color:'white'}}><MailOutlined /> hola@iivvo.com</div>
				<div style={{textAlign:'center',color:'white'}}><PhoneOutlined /> +52 (81) 84210022 +52 (1) 8112125982</div>
				<div style={{textAlign:'center',color:'white'}}>Torre Cibeles. Calle arquitecto Lisandro</div>
				<div style={{textAlign:'center',color:'white'}}>Peña, C.P. 64909 Monterrey, México</div>	   
				</div>
			</div>
		</div>
	</footer>
  )
}
