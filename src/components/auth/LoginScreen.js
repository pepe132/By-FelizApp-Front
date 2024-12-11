import { Button, Col, Form, Input, Row, } from 'antd'
import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { defaultValidateMessages } from '../../helpers/validateMessages';
import { startLogin, startLoginGoogle } from '../../actions/auth';
import { useNavigate } from "react-router-dom";
import GoogleLogin from 'react-google-login';

export const LoginScreen = ({changeAuth, closeDrawer}) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleNavigate=()=>{
      navigate('/olvidar-contrasena')
    }

    const cambioAuth = () => {
      changeAuth();
    }
    const handleLogin = (datos) => {
      dispatch( startLogin(datos, closeDrawer));
    }
    const responseSuccessGoogle = (response) => {
      const id_token=response.tokenObj.id_token
       dispatch(startLoginGoogle(id_token,closeDrawer))
    }

    const responseFailedGoogle=()=>{
      console.log('fallo');
    }
    
    return (
        <div>
         <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginBottom:20}}>

          <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1702241848/logo_navidad_ckp6q6.jpg' alt='byfeliz' width={170}/>
        </div>
        <Form
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={handleLogin}
          validateMessages={defaultValidateMessages}
        >
          <Form.Item
            name="correo"
            rules={[
              {
                required: true,
                type: 'email'
              },
            ]}
          >
            <Input 
              prefix={<UserOutlined style={{color: '#BE1A25'}} className="site-form-item-icon" />} 
              placeholder="Correo" 
              autoComplete="off"
            />

          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              prefix={<LockOutlined style={{color: '#BE1A25'}} className="site-form-item-icon" />}
              type="password"
              placeholder="Contraseña"
              autoComplete="off"
            />
          </Form.Item>
  
          <Form.Item>

            <Row>
              <Col span={24}>
                <Button type="primary" block htmlType="submit" className="login-form-button btn-login">
                Acceder
              </Button>
              </Col>
            </Row>

            <Row style={{marginTop:15}}>
              <Col span={24}>
                <div style={{alignItems:'center',justifyContent:'center'}}>
                  <GoogleLogin
                      clientId="289271740838-pffimudcno4hbie3b72nhm411aih9a5j.apps.googleusercontent.com"
                      buttonText="Acceder con Google e inicia sesion"
                      onSuccess={responseSuccessGoogle}
                      onFailure={responseFailedGoogle}
                      cookiePolicy={'single_host_origin'}
                    />

                </div>
              </Col>
            </Row>

          </Form.Item>
        </Form>
            <div style={{display:'flex'}}>

          <div style={{width:'50%'}}>

              <Button  type='link' onClick={()=>{cambioAuth()}} style={{paddingLeft:0, color:'#BE1A25'}}>
              Ó regístrate
              </Button>
          </div>
          
            <div style={{width:'50%'}}>
              <Button   type='link' onClick={handleNavigate} style={{paddingLeft:0,color:'#BE1A25'}}>
              ¿Olvidaste tu contraseña?
              </Button>

            </div>
            </div>
         
          
        
      </div>
    )
}
