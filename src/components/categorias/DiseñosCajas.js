import { Button, Card, Col, Pagination, Row, Skeleton,Rate } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { eliminarCajas, productosCajasLoading } from '../../actions/productos';
import { Button as FloatingButton,Container } from 'react-floating-action-button';
import { PlusOutlined,CheckCircleOutlined,EditOutlined,UserOutlined,DeleteOutlined } from '@ant-design/icons';
import { ModalCajasScreen } from '../modals/ModalCajasScreen';
import Swal from 'sweetalert2';

export const DiseñosCajas = () => {

    const {id,rol}=useSelector(state=>state.auth)
    const navigate=useNavigate();

    const dispatch=useDispatch()

    const [isModalVisible, setIsModalVisible] = useState(false);

    //state para paginacionn

    const [cajasInfo, setCajasInfo] = useState({
        ok:false,
        total:8
    });

    const [currentPage, setCurrentPage] = useState(1);


    const initValues = {
        '_id': '',
        'nombre': '',
        'precio': '',
        'categoria':'6269be907b846abc305c18a2',
        'descripcion': '',
        'medidas':'',
        'adicional':''
    }

    const [cajasValues, setCajaValues] = useState(initValues);

    const {productos}=useSelector(state=>state.productos.productosCajas)

    useEffect(() => {
        window.scrollTo(0,0)
        dispatch(productosCajasLoading(1,setCajasInfo));
    }, [dispatch])

    const handleCajas=(idcaja)=>{
        navigate(`/producto/${idcaja}`)

    }

   
    const showModal = () => {
        setCajaValues(initValues); 
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
                dispatch(eliminarCajas(idElim,currentPage));
            }
          })

    }

    const handleEditar = (id_caja,nombre,precio,categoria,descripcion,medidas,adicional) => {
        setCajaValues({
            '_id': id_caja,
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
        setCajasInfo(false)
        setCurrentPage(pag);
        dispatch(productosCajasLoading(pag, setCajasInfo));
    }

    
    return (
        <div style={{padding: '3vh 6vw 3vh 6vw'}}>
           
            <h1 className='animate__animated animate__bounce titulo-categorias' ><i>Diseños de cajas personalizadas y otros productos</i></h1>

            <Row gutter={[12, 12]}>
                {
                    (cajasInfo.ok === true)
                        ?
                            productos.map ((cajas) => {
                                return (

                                    <Col key={cajas._id} className="gutter-row" xs={24} sm={12} md={12} lg={6} >
                                        
                                        <Card
                                        
                                        
                                        cover={
                                            <img className='foto-principal' alt='cover' src={cajas.img===null ? 'https://res.cloudinary.com/dwvfkyc6l/image/upload/v1655089319/byFeliz_uqdpis.jpg' : `${cajas.img}`}  />
                                                
                                        
                                        }
                                        >  
                                            <Card.Grid hoverable={false} style={{width: '100%', height:'60px', boxShadow: 'none'}}>
                                                <div className="card-titulo bold"><i>{cajas.nombre}</i></div>
                                            </Card.Grid>
                                        

                                            <Card.Grid hoverable={false} style={{width: '100%', boxShadow: 'none',marginBottom:1}}>
                                                <div style={{display: 'block',alignItems:'center',justifyContent:'center'}}>

                                                    <div  style={{display: 'flex',alignItems:'center',justifyContent:'center',marginTop:10}}>
                                                    
                                                        <span style={{marginRight:'7px',fontSize: '20px'}}><CheckCircleOutlined style={{color:'green'}}/> {(cajas.disponible===true) ? 'Producto disponible' : ' Producto agotado'}</span>
                                                      
                                                    </div>

                                                    <div  style={{display: 'flex',alignItems:'center',justifyContent:'center'}}>
                                                    
                                                    <span><Rate disabled value={cajas.rating} allowHalf style={{marginRight:'10px'}}  /><UserOutlined />{cajas.numReviews}</span>
                                                  
                                                    </div>

                                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'10px'}}>
                                        
                                                        <span style={{fontSize: '20px'}}>Desde: </span>
                                                        <span style={{fontSize: '20px'}}> {` $${cajas.precio} pesos`}</span>
                                                    </div>
                                                       
                                                </div>
                                                

                                            </Card.Grid>

                                            <Card.Grid  hoverable={false} style={{width: '100%', boxShadow: 'none'}}>
                                                <div>
                                                    <Button type="primary" block style={{backgroundColor:'#114B9C',border:'none',borderRadius:30,marginBottom:'15px'}} onClick={()=>handleCajas(cajas._id)}>
                                                        <span style={{fontSize:15,fontWeight:'bold'}}>Ver detalles</span>
                                                    </Button>
                                                    {
                                                        (id && rol==='ADMIN_ROLE') && (
                                                            <Button type="primary" block style={{backgroundColor:'#114B9C',border:'none',borderRadius:30}} onClick={()=>handleEditar(cajas._id,cajas.nombre,cajas.precio,cajas.categoria._id,cajas.descripcion,cajas.medidas,cajas.adicional)}>
                                                                <EditOutlined style={{fontSize:20}} /> <span style={{fontSize:15,fontWeight:'bold'}}>Editar producto</span>
                                                            </Button>


                                                        )
                                                    }

                                                    {
                                                        (id && rol==='ADMIN_ROLE') && (
                                                            <Button type="primary" block style={{backgroundColor:'red',border:'none',borderRadius:30,marginTop:'15px'}} onClick={()=>handleEliminar(cajas._id)}>
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
                <Pagination defaultCurrent={currentPage} onChange={handleCambioPagina} pageSize={8} total={cajasInfo.total} responsive={true} />
            </div>
       
            {
                (id && rol==='ADMIN_ROLE') && (
                    <>
                        <Container>
                            <FloatingButton onClick={showModal} styles={{backgroundColor: '#114B9C', color: 'white'}}><PlusOutlined style={{fontSize: '20px',cursor:'pointer'}} /></FloatingButton>
                        </Container>

                        <ModalCajasScreen
                        currentPage={currentPage}
                        cajasValues={cajasValues}
                        setCajaValues={setCajaValues}
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
