import React from 'react'
import { Button, Col, Form, Input, Row } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import {LockOutlined} from '@ant-design/icons';
import { establecerContraseña } from '../../actions/auth';
import Swal from 'sweetalert2';

export const NewPassword = () => {

    const {id,tokenresetpassword}=useParams()

    const navigate=useNavigate();

    const dispatch=useDispatch()

    const handleSubmit=(data)=>{ 
        if (data.password===data.passwordSame) {
            dispatch(establecerContraseña(data,id,tokenresetpassword))
            navigate('/')

            
        }else{
            Swal.fire({
                showConfirmButton:true,
                icon:'error',
                text:'Sus contraseñas no coinciden'
            })

        }
    }


  return (
    <div style={{padding: '3vh 6vw 3vh 6vw',backgroundColor:'white'}}>

        <Row>
            <Col span={24}> 
            <div className='reestablecer'>

                <h1 style={{textAlign:'center'}}>Nueva contraseña</h1>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

                    
                    <Form
                        style={{display:'block',textAlign:'center',width:'50%'}}
                        onFinish={handleSubmit}
                        autoComplete="off"
                        >
                        <Form.Item
                            name="password"
                           
                        >
                            <Input.Password type='password' placeholder='Digita tu contraseña'  prefix={<LockOutlined style={{color: '#5cc3ab'}} className="site-form-item-icon" />}  />
                        </Form.Item>

                        <Form.Item
                            name="passwordSame"
                           
                        >
                            <Input.Password placeholder='Confirma tu contraseña'  prefix={<LockOutlined style={{color: '#5cc3ab'}} className="site-form-item-icon" />}  />
                        </Form.Item>

                        
                        <Form.Item
                        
                        >
                            <Button block type="primary" style={{borderRadius:30,backgroundColor:'#114B9C',border:'none',width:'50%'}} htmlType="submit">
                            Cambiar
                            </Button>
                        </Form.Item>
                        </Form>
                    </div>
            </div>
            </Col>
        </Row>
    </div>
  )
}
