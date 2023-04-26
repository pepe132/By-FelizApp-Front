import React from 'react'
import {Form, Input, Button} from 'antd';
import {UserOutlined, MailOutlined ,LockOutlined} from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { defaultValidateMessages } from '../../helpers/validateMessages';
import { startSignup } from '../../actions/auth';
import Swal from 'sweetalert2';

export const RegisterScreen = ({changeAuth, closeDrawer}) => {
    const dispatch = useDispatch();
    const cambioAuth=()=>{
        changeAuth();
    }
    const handleSignup = (datos) => {
        let rol=''
        if (datos.nombre.includes('admin')){
            rol='ADMIN_ROLE'
        }else{
            rol='USER_ROLE'
        }
        (datos.password === datos.passConf) 
            ? 
                dispatch(startSignup(datos,rol, closeDrawer)) 
            : 
                Swal.fire({
                    title: 'Error',
                    text: 'Las contraseñas no coinciden',
                    icon: 'error',
                    confirmButtonColor: 'red',
                    confirmButtonText: 'Aceptar'
                })
       
    }
  return (
    <div>
            <Form 
                initialValues={{
                    remember: true,
                }}
                onFinish={handleSignup}
                validateMessages={defaultValidateMessages}
            >

                <Form.Item
                    name="nombre"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                    <Input 
                        prefix={<UserOutlined style={{color: '#114B9C'}} 
                        className="site-form-item-icon" />} 
                        placeholder="Nombre" 
                        autoComplete="off"
                    />
                </Form.Item>
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
                        prefix={<MailOutlined style={{color: '#114B9C'}} 
                        className="site-form-item-icon" />} 
                        placeholder="Correo" 
                        autoComplete="off"
                    />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                        {
                        required: true,
                        min: 6
                        },
                    ]}
                    >
                    <Input.Password 
                        prefix={<LockOutlined style={{color: '#114B9C'}} 
                        className="site-form-item-icon" />} 
                        placeholder="Contraseña"
                        autoComplete="off"
                    />
                </Form.Item>

                <Form.Item
                    name="passConf"
                    rules={[
                        {
                        required: true,
                        min: 6
                        },
                    ]}
                    >
                    <Input.Password 
                        prefix={<LockOutlined 
                        style={{color: '#114B9C'}} 
                        className="site-form-item-icon" />} 
                        placeholder="Validar Contraseña" 
                        autoComplete="off"
                    />
                </Form.Item>
        
                <Form.Item>
                    <Button type="primary" block htmlType="submit" className="login-form-button btn-login">
                        Registrarse
                    </Button>
                    <Button style={{color: '#114B9C'}}  type="link" onClick={()=>{cambioAuth()}}>
                        ¿Ya tienes una cuenta? Inicia sesión
                    </Button>
                </Form.Item>
            </Form>
        </div>
  )
}
