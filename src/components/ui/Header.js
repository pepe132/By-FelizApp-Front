import { Button, Col, Drawer, Input, Row } from 'antd';
import React, { useState } from 'react'
import { SearchOutlined,LogoutOutlined } from '@ant-design/icons';
import { LoginScreen } from '../auth/LoginScreen';
import { startLogout } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterScreen } from '../auth/RegisterScreen';
import { GoogleLogout } from 'react-google-login';
import {  useNavigate } from 'react-router';

export const Header = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const {id, nombre,google} = useSelector(state => state.auth);

    const [coll, setColl] = useState(false);
    const [auth, setAuth] = useState('login');
    const [visible, setVisible] = useState(false);
    
    const handleLogout = () => {
        dispatch(startLogout());
        setColl(false)
    }
    const showDrawer = () => {
        setVisible(true);
      };
    
      const onClose = () => {
        setVisible(false);
      };

    const logoutGoogle=()=>{
        dispatch(startLogout());
        setColl(false)

    }

    const openDrawer = () => {
        setColl(true);
        setAuth('login')

    }

    const handleSearch = () => {
        const search = document.getElementById('inputSearch').value;
        navigate(`/search/${search}`);
    }
    
    const openDrawerRegister = () => {
        setColl(true);
        setAuth('registro')
    }

    const closeDrawer = () => {
        setColl(false);
    }
    const changeAuth = () => {
        auth === 'login' ? setAuth('registro') : setAuth('login');
    }

    const handleMdf=()=>{
        navigate('/categorias/disenos-mdf')
    }

    const handleVinil=()=>{
        navigate('/categorias/disenos-vinilo')
        
    }

    const handleCajas=()=>{
        navigate('/categorias/disenos-cajas')
        
    }

    const handleHome=()=>{
        navigate('/')
    }

    const handleCategoria=(valor)=>{

       switch (valor) {
           case 'Llaveros':
               navigate('/search/categoria/llaveros')
               setVisible(false)
               
               break;
            case 'Libro de firmas':

                navigate('/search/categoria/Libro de firmas')
                setVisible(false)
                break;
            case 'Portarretratos':
                navigate('/search/categoria/Portarretratos')
                setVisible(false)
                break;
            case 'Alcancias':
                navigate('/search/categoria/Alcancias')
                setVisible(false)
                break;
            case 'Termos de acrilico':
                navigate('/search/categoria/Termos de acrilico')
                setVisible(false)
                break;
            case 'Termos de metal':
                navigate('/search/categoria/Termos de metal')
                setVisible(false)
                break;

            default:

                break;
       }

    }

  return (
    <div className="header-principal">
    <Row >
            
            <Col className='gutter-row' lg={4} sm={24} xs={24} md={4} >
                <div style={{width:'100%',textAlign:'center',marginBottom:'10px'}}>
                    <img  src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1674078956/logo14febrero_c4qsju.jpg' alt='byfeliz' width={150} style={{cursor:'pointer'}} onClick={handleHome} />

                </div>
                

            </Col>

            <Col className='gutter-row' lg={14} sm={24} xs={24} md={14}>
            <div style={{width: '100%', textAlign: 'center'}}>

                <Input type='text'  
                style={{borderRadius: '20px', width: '80%'}}  
                placeholder="Busca los productos de tu preferencia"
                id='inputSearch'
                size="middle" 
                prefix={<SearchOutlined />}
                onChange={handleSearch}

                />              
                
                <ul style={{width: '80%',display:'inline-flex',marginTop:'10px',alignItems:'center',justifyContent:'center'}}>

                    <li style={{color:'#DE0000',fontSize:15,cursor:'pointer',fontWeight:'bold'}} onClick={handleMdf}>Diseños MDF</li>
                    <li style={{marginLeft:'10px',color:'#DE0000',fontSize:15,cursor:'pointer',fontWeight:'bold'}} onClick={handleVinil}>Diseños en Vinil</li>
                    <li style={{marginLeft:'10px',color:'#DE0000',fontSize:15,cursor:'pointer',fontWeight:'bold'}} onClick={handleCajas}>Cajas personalizadas y Otros productos</li>
                    
                </ul>

                {
                    (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) ? (
                        <>
                        <Button type='primary' style={{width:'50%',borderRadius:30,backgroundColor:'white',border:'none',fontFamily:'-moz-initial',marginBottom:'5px'}} onClick={showDrawer} ><span style={{color:'#DE0000'}}>Categorias</span></Button>
                        <Drawer 
                        bodyStyle={{backgroundImage:'url("https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-pink-paper-cut-wind-love-valentines-day-background-design-image_267179.jpg")'}}
                        placement='left'
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                       
                                                
                        >
                             <Button onClick={onClose}  style={{backgroundColor:'#DE0000',border:'none',borderRadius:20,color:'white'}} ><LogoutOutlined />Cerrar panel</Button>
                            <h1 style={{color:'#DE0000',fontWeight:'bold'}}><i>Categorias de nuestra tienda</i></h1>
                            <ul style={{width: '100%',display:'list-item',alignItems:'center',justifyContent:'center'}}>

                                <li style={{color:'#DE0000',fontSize:20,cursor:'pointer', fontWeight:'bold'}}  onClick={(e)=>handleCategoria(e.target.innerText)}>Llaveros</li>
                                <li style={{color:'#DE0000',fontSize:20,cursor:'pointer', fontWeight:'bold'}}  onClick={(e)=>handleCategoria(e.target.innerText)}>Libro de firmas</li>
                                <li style={{color:'#DE0000',fontSize:20,cursor:'pointer', fontWeight:'bold'}}  onClick={(e)=>handleCategoria(e.target.innerText)}>Portarretratos</li>
                                <li style={{color:'#DE0000',fontSize:20,cursor:'pointer', fontWeight:'bold'}}  onClick={(e)=>handleCategoria(e.target.innerText)}>Alcancias</li>
                                <li style={{color:'#DE0000',fontSize:20,cursor:'pointer', fontWeight:'bold'}}   onClick={(e)=>handleCategoria(e.target.innerText)}>Termos de acrilico</li>
                                <li style={{color:'#DE0000',fontSize:20,cursor:'pointer', fontWeight:'bold'}}   onClick={(e)=>handleCategoria(e.target.innerText)}>Termos de metal</li>


                            </ul>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:25}}>

                            <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1674078956/logo14febrero_c4qsju.jpg' alt='byfeliz' width={170}/>
                            </div>

                                <div style={{textAlign:'center',marginTop:25}}>
                                <p style={{color:'#DE0000'}}><i>&copy; 2022 Copyright : ByFeliz</i> </p>
                            </div>
                        </Drawer>
                        </>
                    ) : (

                        <ul style={{width: '100%',display:'inline-flex',alignItems:'center',justifyContent:'center'}}>

                            <li style={{color:'#DE0000',fontSize:15,cursor:'pointer',fontWeight:'bold'}}  onClick={(e)=>handleCategoria(e.target.innerText)}>Llaveros</li>
                            <li style={{marginLeft:'10px',color:'#DE0000',fontSize:15,cursor:'pointer',fontWeight:'bold'}}  onClick={(e)=>handleCategoria(e.target.innerText)}>Libro de firmas</li>
                            <li style={{marginLeft:'10px',color:'#DE0000',fontSize:15,cursor:'pointer',fontWeight:'bold'}}  onClick={(e)=>handleCategoria(e.target.innerText)}>Portarretratos</li>
                            <li style={{marginLeft:'10px',color:'#DE0000',fontSize:15,cursor:'pointer',fontWeight:'bold'}}  onClick={(e)=>handleCategoria(e.target.innerText)}>Alcancias</li>
                            <li style={{marginLeft:'10px',color:'#DE0000',fontSize:15,cursor:'pointer',fontWeight:'bold'}}   onClick={(e)=>handleCategoria(e.target.innerText)}>Termos de acrilico</li>
                            <li style={{marginLeft:'10px',color:'#DE0000',fontSize:15,cursor:'pointer',fontWeight:'bold'}}   onClick={(e)=>handleCategoria(e.target.innerText)}>Termos de metal</li>


                            
                        </ul>
                    )
                }


                
            </div>

            </Col>

            <Col className='gutter-row' lg={6} sm={24} xs={24} md={6}>
                <div style={{textAlign:'center',width:'100%'}}>
                    {
                        (id) ? 
                        <h1 style={{fontSize:'20px',color:'#DE0000'}}>Bienvenido {nombre}</h1>
                        :
                        <h3 style={{color:'#DE0000',fontWeight:'bold'}}>Ven y descubre nuestros productos</h3>
                    }
                    <ul style={{display:'inline-flex',marginTop:'12px'}}>
                        <li style={{color:'#DE0000',fontSize:15,marginLeft:'10px',cursor:'pointer',fontWeight:'bold'}} onClick={openDrawer}>
                            {
                            (!id) ? 'Iniciar Sesión' : 'Cerrar Sesión'
                            }
                        </li>
                        {
                            (!id) && (
                                <li style={{color:'#DE0000',fontSize:15,marginLeft:'10px',cursor:'pointer',fontWeight:'bold'}}  onClick={openDrawerRegister}>Crear Cuenta</li>
                            )
                        }
                        
                    </ul>
                </div>


            </Col>
        
    </Row> 

    <div>
        <Drawer 
        visible={coll} 
        onClose={closeDrawer} 
        closable={false} 
        width={window.innerWidth > 767 ? '405px' : '95%'} 
        bodyStyle={{backgroundImage:'url("https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-pink-paper-cut-wind-love-valentines-day-background-design-image_267179.jpg")'}}>
        
        <div>
            <div style={{width:'100%'}}>
            <Button type="primary" style={{backgroundColor:'#DE0000',border:'none',borderRadius:20}} onClick={closeDrawer}>
            <LogoutOutlined />Cerrar panel
            </Button>
            </div>
            {
                (id)
                ?
                <div>
                    <div>
                        <Row gutter={{xs: 2, sm: 4, md: 8, lg: 16}} style={{padding: '25px'}}>
                            <Col className="gutter-row" span={24}>
                            <p style={{fontSize:'20px', margin: '3px 0px 0px 0px',textAlign:'center', color:'#DE0000', fontStyle:'italic', fontWeight:'bold'}}>Buen dia: {nombre}</p>
                            </Col>
                            
                        </Row>

                        <hr style={{marginBottom:10, opacity: '50%'}} />
                    </div>
                    
                    <Row >
                        {
                            (google===false) ? (
                                <Col className='gutter-row' span={24}>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                                        <Button style={{borderRadius:30,backgroundColor:'#DE0000',border:'none',marginBottom:10,width:'50%'}} block type='primary'  onClick={handleLogout}>
                                            Cerrar sesion
                                        </Button>

                                    </div>
                                </Col>
                            ) :(
                                <Col className='gutter-row' span={24}>
                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

                                        <GoogleLogout
                                            clientId="289271740838-pffimudcno4hbie3b72nhm411aih9a5j.apps.googleusercontent.com"
                                            
                                            buttonText="Cerrar sesion con Google"
                                            onLogoutSuccess={logoutGoogle}
                                            
                                            >
                                        </GoogleLogout>
                                    </div>
                                </Col>

                            )
                        }
                          
                    </Row>

                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:60}}>

                        <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1674078956/logo14febrero_c4qsju.jpg' alt='byfeliz' width={170}/>
                    </div>

                    <div style={{textAlign:'center',marginTop:50}}>
                        <p style={{color:'#DE0000', fontWeight:'bold'}}><i>&copy; 2022 Copyright : ByFeliz</i> </p>
                    </div>


                </div>
                :
                auth === 'login' 
                ?

                <div style={{padding: '25px'}}>
                    <h1 style={{color: '#DE0000',textAlign:'center'}}><i>Iniciar sesion</i></h1>
                    <LoginScreen changeAuth={changeAuth} closeDrawer={closeDrawer}/>
                </div>

                : auth === 'registro' &&
                    
                <div style={{padding: '25px'}}>
                    <h1 style={{color: '#DE0000',textAlign:'center'}}><i>Registrate</i></h1>
                    <RegisterScreen changeAuth={changeAuth} closeDrawer={closeDrawer}/>
                </div>
            }
        </div>

        </Drawer>
    </div>
</div>
    
  )
}
