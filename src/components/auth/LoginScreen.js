import { Button, Form, Input, } from 'antd'
import React from 'react';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { defaultValidateMessages } from '../../helpers/validateMessages';
import { startLogin, startLoginGoogle } from '../../actions/auth';
import GoogleLogin from 'react-google-login';

export const LoginScreen = ({changeAuth, closeDrawer}) => {

    const dispatch = useDispatch();

    const cambioAuth = () => {
      changeAuth();
    }

    const handleLogin = (datos) => {
      dispatch( startLogin(datos, closeDrawer));
      console.log(datos);
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
              prefix={<UserOutlined style={{color: '#88b923'}} className="site-form-item-icon" />} 
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
              prefix={<LockOutlined style={{color: '#88b923'}} className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              autoComplete="off"
            />
          </Form.Item>

          <GoogleLogin
            clientId="289271740838-pffimudcno4hbie3b72nhm411aih9a5j.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseSuccessGoogle}
            onFailure={responseFailedGoogle}
            cookiePolicy={'single_host_origin'}
          />

          

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button btn-login">
              Acceder
            </Button>
            <Button style={{color: '#88b923' }} type="link" onClick={()=>{cambioAuth()}}>
              Ó regístrate
            </Button>
          </Form.Item>
        </Form>
        
      </div>
    )
}
