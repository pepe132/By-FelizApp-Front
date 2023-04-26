import React from 'react'
import { Button ,Form, Input,} from 'antd';
import { useDispatch } from 'react-redux';
import { olvidarContraseña } from '../../actions/auth';

export const ForgotPassword = () => {

    const dispatch=useDispatch()

    const handleSubmit=(data)=>{        
        dispatch(olvidarContraseña(data))

    }

  return (
    <div style={{padding: '3vh 6vw 3vh 6vw',backgroundColor:'white'}}>

      
            <div className='reestablecer'>

                <h1 style={{textAlign:'center'}}>Recuperar contraseña</h1>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

                    
                    <Form
                        className='form-recu'
                        onFinish={handleSubmit}
                        autoComplete="off"
                        >
                        <Form.Item
                            name="correo"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            ]}
                        >
                            <Input type='email' placeholder='Digite su email de verificacion' />
                        </Form.Item>

                        
                        <Form.Item
                        
                        >
                            
                            <Button block type="primary" style={{borderRadius:30,backgroundColor:'#114B9C',border:'none'}} htmlType="submit">
                                Enviar correo
                            </Button>

                            
                        </Form.Item>
                        </Form>
                    </div>
            </div>
         
    </div>
  )
}
