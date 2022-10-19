import { Button, Col, Pagination, Rate, Row, Skeleton } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  eliminarMdf, productosMDFLoading } from '../../actions/productos'
import { Card } from 'antd';
import { Button as FloatingButton,Container } from 'react-floating-action-button';
import { PlusOutlined,CheckCircleOutlined,EditOutlined,UserOutlined,DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { ModalMdfScreen } from '../modals/ModalMdfScreen';


export const DiseñosMdf = () => {
    const {id,rol}=useSelector(state=>state.auth)
    const navigate=useNavigate();

    const dispatch=useDispatch()

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [mdfInfo, setMdfInfo] = useState({
        ok:false,
        total:8
    });

    const [currentPage, setCurrentPage] = useState(1);

    const initValues = {
        '_id': '',
        'nombre': '',
        'precio': '',
        'categoria':'624cb6af3565e7cb1dc666c1',
        'descripcion': '',
        'medidas':'',
        'adicional':''
    }

    const [mdfValues, setMdfValues] = useState(initValues);

    const {productos}=useSelector(state=>state.productos.productosMDF)

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(productosMDFLoading(1,setMdfInfo));
    }, [dispatch])


    const handleNavigate=(idProd)=>{
        navigate(`/producto/${idProd}`)
    }

    const showModal = () => {
        setMdfValues(initValues); 
        setIsModalVisible(true);
    };
  
    const handleEliminar=(idElim)=>{
        Swal.fire({
            title: '¿Desea eliminar el producto?',
            text: 'Se dará de baja temporalmente de la aplicacion',
            showDenyButton: true,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#88b923',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                dispatch(eliminarMdf(idElim,currentPage));
            }
          })

    }

    const handleEditar = (id_mdf,nombre,precio,categoria,descripcion,medidas,adicional) => {
        setMdfValues({
            '_id': id_mdf,
            'nombre': nombre,
            'precio': precio,
            'categoria':categoria,
            'descripcion': descripcion,
            'medidas': medidas,
            'adicional': adicional

        })
        setIsModalVisible(true); 
    };

    const handleCambioPagina = (pag) => {
        window.scrollTo(0,0)
        setMdfInfo(false)
        setCurrentPage(pag);
        dispatch(productosMDFLoading(pag, setMdfInfo));
    }

    
    return (
        <div style={{padding: '3vh 6vw 3vh 6vw'}}>
           
            <h1 className='animate__animated animate__bounce titulo-categorias'><i>Diseños en MDF personalizados</i></h1>

            <Row gutter={[12, 12]}>
                {
                    (mdfInfo.ok === true)
                        ?
                            productos.map ((mdf) => {
                                return (

                                    <Col key={mdf._id} className="gutter-row" xs={24} sm={12} md={12} lg={6} >
                                        
                                        <Card
                                        
                                        cover={
                                            
                                                <img className='foto-principal' alt='cover' src={mdf.img===null ? 'https://res.cloudinary.com/dwvfkyc6l/image/upload/v1655089319/byFeliz_uqdpis.jpg' : `${mdf.img}`}  />

                                        
                                        
                                        }
                                        >  
                                            <Card.Grid hoverable={false} style={{width: '100%', height:'60px', boxShadow: 'none'}}>
                                                <div className="card-titulo bold"><i>{mdf.nombre}</i></div>
                                            </Card.Grid>
                                        

                                            <Card.Grid hoverable={false} style={{width: '100%', boxShadow: 'none',marginBottom:1}}>
                                                <div style={{display: 'block',alignItems:'center',justifyContent:'center'}}>

                                                    <div  style={{display: 'flex',alignItems:'center',justifyContent:'center',marginTop:10}}>
                                                    
                                                        <span style={{marginRight:'7px',fontSize: '20px'}}><CheckCircleOutlined style={{color:'green'}}/> {(mdf.disponible===true) ? 'Producto disponible' : ' Producto agotado'}</span>
                                                    
                                                    </div>

                                                    <div  style={{display: 'flex',alignItems:'center',justifyContent:'center'}}>
                                                    
                                                    <span><Rate disabled value={mdf.rating} allowHalf style={{marginRight:'10px'}}  /><UserOutlined />{mdf.numReviews}</span>
                                                
                                                    </div>

                                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'10px'}}>
                                        
                                                        <span style={{fontSize: '20px'}}>Desde: </span> 
                                                        <span style={{fontSize: '20px'}}>{` $${mdf.precio} pesos`}</span>
                                                    </div>
                                                    
                                                </div>
                                                

                                            </Card.Grid>

                                            <Card.Grid  hoverable={false} style={{width: '100%', boxShadow: 'none'}}>
                                                <div>
                                                    <Button type="primary" block style={{backgroundColor:'#F58634',border:'none',borderRadius:30,marginBottom:'15px'}} onClick={()=>handleNavigate(mdf._id)}>
                                                        <span style={{fontSize:15,fontWeight:'bold'}}>Ver detalles</span>
                                                    </Button>
                                                    {
                                                        (id && rol==='ADMIN_ROLE') && (
                                                            <Button type="primary" block style={{backgroundColor:'#F58634',border:'none',borderRadius:30}} onClick={()=>handleEditar(mdf._id,mdf.nombre,mdf.precio,mdf.categoria._id,mdf.descripcion,mdf.medidas,mdf.adicional)}>
                                                                <EditOutlined style={{fontSize:20}} /> <span style={{fontSize:15,fontWeight:'bold'}}>Editar producto</span>
                                                            </Button>


                                                        )
                                                    }

                                                    {
                                                        (id && rol==='ADMIN_ROLE') && (
                                                            <Button type="primary" block style={{backgroundColor:'red',border:'none',borderRadius:30,marginTop:'15px'}} onClick={()=>handleEliminar(mdf._id)}>
                                                                <DeleteOutlined style={{fontSize:20}} /> <span style={{fontSize:15,fontWeight:'bold'}}>Eliminar producto</span>
                                                            </Button>


                                                        )

                                                    }
                                                    
                                                </div>
                                            
                                            </Card.Grid>

                                            
                                        </Card>
                                    </Col>
                                    
                                )
                            })
                        :
                        ([0,1,2,3,4,5,6,7]).map(n => (
                            <Col key={n} className="gutter-row" xs={24} sm={12} md={12} lg={6} >
                                <Skeleton paragraph={{rows: 8}} active />
                            </Col>
                        ))
                }
                
            </Row>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'10px'}}>
                <Pagination defaultCurrent={currentPage} onChange={handleCambioPagina} pageSize={8} total={mdfInfo.total} responsive={true} />
            </div>
    
            {
                (id && rol==='ADMIN_ROLE') && (
                    <>
                        <Container >
                            <FloatingButton onClick={showModal} styles={{backgroundColor: '#F58634', color: 'white'}}><PlusOutlined style={{fontSize: '20px',cursor:'pointer'}} /></FloatingButton>
                        </Container>


                        <ModalMdfScreen
                        currentPage={currentPage}
                        mdfValues={mdfValues}
                        setMdfValues={setMdfValues}
                        initValues={initValues}
                        setIsModalVisible={setIsModalVisible} 
                        isModalVisible={isModalVisible}
                        
                        />
                    
                    </>

                )
            }
                              
        </div>  
    )
}