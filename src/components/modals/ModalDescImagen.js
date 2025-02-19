import { Button, Form, Input, Modal } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import { editarDescFoto } from '../../actions/productos';
import { defaultValidateMessages } from '../../helpers/validateMessages'

export const ModalDescImagen = ({id,imagesValues,setImagesValues,initValues,setIsModalVisible,isModalVisible}) => {
    const dispatch=useDispatch()

    const {TextArea}=Input;

    const handleCancelar = () => {
      setImagesValues(initValues);
      setIsModalVisible(false)
  }

  const handleAceptar=(data)=>{
    dispatch(editarDescFoto(imagesValues._id,id,data))
    setIsModalVisible(false);
  }
  return (
    <div>
    <Modal destroyOnClose={true} closable={false} visible={isModalVisible} footer={null}>

    <h1 style={{textAlign:'center',fontSize:20}}><i>Añade una descripcion al producto</i></h1>
        
        <Form 
        onFinish={handleAceptar}
        style={{paddingTop:'15px'}}
        validateMessages={defaultValidateMessages}
        initialValues={imagesValues}
        >
            <h4>Descripcion a editar</h4>
            <Form.Item
                name="alt"
            
            >
                 <TextArea rows={4} placeholder="Añade caracteristicas individuales del producto" style={{resize:'none'}} />
            </Form.Item>

            <div style={{display:'flex' ,width:'100%', justifyContent:'flex-end'}}>
            <Form.Item>
                <Button  onClick={handleCancelar} >Cancelar</Button>
            </Form.Item>
            <Form.Item>
                    <Button htmlType="submit" style={{backgroundColor: '#4BA4D1', color: 'white' , marginLeft: '5px'}}>Añadir</Button>
            </Form.Item>
            </div>

        </Form>
    </Modal>
    </div>
  )
}
