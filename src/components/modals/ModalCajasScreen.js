import React from 'react'
import { defaultValidateMessages } from '../../helpers/validateMessages';
import {DollarCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import { crearCajas, editarCaja } from '../../actions/productos';

export const ModalCajasScreen = ({cajasValues,setCajaValues,initValues,isModalVisible,setIsModalVisible,currentPage}) => {

    const dispatch=useDispatch()

    const {TextArea}=Input;

    const handleCancelar = () => {
        setCajaValues(initValues);
        setIsModalVisible(false)
    }

    const handleAceptar=(data)=>{
        if (cajasValues._id==='') {
            dispatch(crearCajas(data,currentPage))
            setIsModalVisible(false);
            
        }else{
            dispatch(editarCaja(cajasValues._id,data,currentPage))
            setIsModalVisible(false);

        }
    }
  return (
    <div>
        <Modal destroyOnClose={true} closable={false} visible={isModalVisible} footer={null}>

            {
                (cajasValues._id==='') 
                ? (<h1 style={{textAlign:'center',fontSize:20}}>Subir producto</h1>)
                : (<h1 style={{textAlign:'center',fontSize:20}}>Editar producto</h1>)
            }
            
            <Form 
            onFinish={handleAceptar}
            style={{paddingTop:'15px'}}
            validateMessages={defaultValidateMessages}
            initialValues={cajasValues}
            >
                <h4>Nombre</h4>
                <Form.Item
                    name="nombre"
                
                >
                    <Input placeholder='Nombre del producto'  />
                </Form.Item>

                <h4>Precio</h4>
                <Form.Item
                    name="precio"
                
                >
                    <InputNumber addonBefore={<DollarCircleOutlined />} min={1}/>
                </Form.Item>

                <h4>Categoria</h4>
                <Form.Item
                    name="categoria"
                    
                
                >
                    <Input placeholder='Categoria' disabled={true}/>
                </Form.Item>
                <h4>Descripcion</h4>
                <Form.Item
                    name="descripcion"
                    
                >
                    <TextArea rows={4} placeholder="Descripcion del producto" style={{resize:'none'}} />
                </Form.Item>

                <h4>Medidas del producto</h4>
                <Form.Item
                    name="medidas"
                    
                >
                    <Input placeholder='Nombre del producto' />
                </Form.Item>

                <h4>Caracteristicas adicionales</h4>
                <Form.Item
                    name="adicional"
                    
                >
                    <TextArea rows={4} placeholder="Caracteristicas adicionales del producto" style={{resize:'none'}} />
                </Form.Item>

                <div style={{display:'flex' ,width:'100%', justifyContent:'flex-end'}}>
                <Form.Item>
                    <Button  onClick={handleCancelar} >Cancelar</Button>
                </Form.Item>
                <Form.Item>
                        <Button htmlType="submit" style={{backgroundColor: '#ECB368', color: 'white' , marginLeft: '5px'}}>Aceptar</Button>
                </Form.Item>
                </div>

            </Form>
        </Modal>
    </div>
  )
}
