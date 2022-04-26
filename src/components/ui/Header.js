import { Button, Col, Drawer, Input, Row } from 'antd';
import React, { useState } from 'react'

import {MenuOutlined, SearchOutlined} from '@ant-design/icons';
import { LoginScreen } from '../auth/LoginScreen';
import { startLogout } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterScreen } from '../auth/RegisterScreen';
import { GoogleLogout } from 'react-google-login';

export const Header = () => {
    const dispatch=useDispatch()
    const {id, correo, nombre} = useSelector(state => state.auth);
    

    const handleLogout = () => {
        dispatch(startLogout());
    }

    const [coll, setColl] = useState(false);
    const [auth, setAuth] = useState('login');
    const openDrawer = () => {
        setColl(true);
    }

    const closeDrawer = () => {
        setColl(false);
    }
    /*const handleSearch = () => {
        const search = document.getElementById('inputSearch').value;
        history.push(`/courses/search/${search}`);
    }*/
    const changeAuth = () => {
        auth === 'login' ? setAuth('registro') : setAuth('login');
    }
  return (
    <>
    <div className="header-principal">
       
        {
            (id) && <h1 style={{fontSize:'20px'}}>Bienvenido {nombre}</h1>
        }

        
        
        <div style={{width: '70%', textAlign: 'center'}}>
            
            <Input type='text' id='inputSearch' style={{borderRadius: '20px', width: '85%'}} prefix={<SearchOutlined />} placeholder="Buscar" size="large"  />
        </div>
        <div>
            <MenuOutlined onClick={openDrawer}/>
        </div> 
    </div>
    <div>
        <Drawer visible={coll} onClose={closeDrawer} closable={false} width={window.innerWidth > 767 ? '405px' : '95%'}>
        
        <div>
            {
                (id)
                    ?
                        <div>
                            <div>
                                <Row gutter={{xs: 2, sm: 4, md: 8, lg: 16}} style={{padding: '25px'}}>
                                    <Col className="gutter-row" span={16}>
                                        <p style={{fontSize:'18px', margin: '3px 0px 0px 0px'}}>{nombre}</p>
                                        <p style={{color: 'gray'}}>{correo}</p>
                                    </Col>
                                    
                                    <h1>hola</h1>
                                </Row>

                                <hr style={{margin: '0', opacity: '50%'}} />
                            </div>
                            <Row>
                               
                                <Col span={12}>
                                    <Button style={{color: '#88b923' }} type="link" onClick={handleLogout}>
                                        Logout
                                    </Button>
                                </Col>
                                <Col span={12}>
                                <GoogleLogout
                                    clientId="289271740838-pffimudcno4hbie3b72nhm411aih9a5j.apps.googleusercontent.com"
                                    
                                    buttonText="Logout"
                                    
                                    >
                                </GoogleLogout>
                                </Col>
                            </Row>

                        </div>
                    :
                        auth === 'login' 
                        ?
                            <div style={{padding: '25px'}}>
                                <h1 style={{color: '#88b923',textAlign:'center'}}>Iniciar sesion</h1>
                                <LoginScreen changeAuth={changeAuth} closeDrawer={closeDrawer}/>
                            </div>
                        : auth === 'registro' &&
                            
                            <div style={{padding: '25px'}}>
                                <h1 style={{color: '#88b923',textAlign:'center'}}>Registro</h1>
                                <RegisterScreen changeAuth={changeAuth} closeDrawer={closeDrawer}/>
                            </div>
            }
        </div>

        </Drawer>
    </div>
</>
    
  )
}
