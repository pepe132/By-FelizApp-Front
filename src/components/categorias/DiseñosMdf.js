import { Col, Row } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productosMDFLoading } from '../../actions/productos'
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import foto1 from '../../assets/foto1.jpg';
import { useNavigate } from 'react-router';


export const DiseñosMdf = () => {
    const { Meta } = Card;
    const navigate=useNavigate();

    const dispatch=useDispatch()

    const {productoMDF,ok}=useSelector(state=>state.productos.productosMDF)

    useEffect(() => {
      dispatch(productosMDFLoading());
    }, [dispatch])

    const handleNavigate=(idProd)=>{
        navigate(`/productos-mdf/${idProd}`)
    }
    
    return (
        <div style={{padding:'2% 3%'}}>
            <Row>
                <Col span={24}>
                    <h1 className='animate__animated animate__bounce' style={{textAlign:'center',fontWeight:'bold',fontSize:'30px'}}>Diseños en MDF</h1>

                    {
                        (ok===true && productoMDF.length>0) ? (
                            productoMDF.map(el=>{
                                return(
                                    <Card
                                        key={el._id}
                                        style={{ width: 320 }}
                                        cover={
                                        <img
                                            alt="example"
                                            src={foto1}
                                            className='foto-catalogo'
                                        />
                                        }
                                        actions={[
                                        `$ ${el.precio}`,
                                        <p>{(el.disponible===true) ? 'existencia' : 'agiotado'}</p>,
                                        <p onClick={()=>handleNavigate(el._id)}> + info </p>,
                                        ]}
                                        >
                                            <Meta
                                            title={el.nombre}
                                            description={el.descripcion}
                                            />
                                    </Card>
                                ) 

                            })

                        ) :(
                            <h1>No hay productos</h1>
                        )
                    }
                    
                </Col>
            </Row>
        </div>
    )
}
