import { Button, Card, Col, Pagination, Rate, Row, Skeleton } from 'antd';
import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { eliminarVinil, productosVinilLoading } from '../../actions/productos';
import { useNavigate } from 'react-router';

import { Button as FloatingButton,Container } from 'react-floating-action-button';
import { PlusOutlined,CheckCircleOutlined,EditOutlined,UserOutlined,DeleteOutlined } from '@ant-design/icons';
import { ModalVinilScreen } from '../modals/ModalVinilScreen';
import Swal from 'sweetalert2';

export const DiseñosVinilo = () => {
    const {id,rol}=useSelector(state=>state.auth)

    const dispatch=useDispatch()

    const navigate=useNavigate();

    const initValues = {
        '_id': '',
        'nombre': '',
        'precio': '',
        'categoria':'62674c5af1a930bd5b71b847',
        'descripcion': '',
        'medidas':'',
        'adicional':''
    }


    const {productos}=useSelector(state=>state.productos.productosVinil)

    const [isModalVisible, setIsModalVisible] = useState(false);

    //state para paginacionn

    const [vinilInfo, setVinilInfo] = useState({
        ok:false,
        total:8
    });

    const [currentPage, setCurrentPage] = useState(1);

    const [vinilValues, setVinilValues] = useState(initValues);

    useEffect(() => {

        window.scrollTo(0,0)
        dispatch(productosVinilLoading(1,setVinilInfo));
    }, [dispatch])

    const handleVinil=(idvinil)=>{
        navigate(`/producto/${idvinil}`)

    }

    const showModal = () => {
        setVinilValues(initValues); 
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
                dispatch(eliminarVinil(idElim,currentPage));
            }
          })

    }

    const handleEditar = (id_vinil,nombre,precio,categoria,descripcion,medidas,adicional) => {
        setVinilValues({
            '_id': id_vinil,
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
        setVinilInfo(false)
        setCurrentPage(pag);
        dispatch(productosVinilLoading(pag, setVinilInfo));
    }
  
    return (
        <div style={{padding: '3vh 6vw 3vh 6vw'}}>
           
            <h1 className='animate__animated animate__bounce titulo-categorias'><i>Diseños en vinil</i></h1>

            <Row gutter={[12, 12]}>
                {
                    (vinilInfo.ok === true)
                        ?
                            productos.map ((vinil) => {
                                return (

                                    <Col key={vinil._id} className="gutter-row" xs={24} sm={12} md={12} lg={6} >
                                        
                                        <Card
                                        
                                        cover={
                                            
                                            <img className='foto-principal' alt='cover' src={vinil.img===null ? 'https://res.cloudinary.com/dwvfkyc6l/image/upload/v1655089319/byFeliz_uqdpis.jpg' : `${vinil.img}`}  />
                                               
                                        }
                                        >  
                                            <Card.Grid hoverable={false} style={{width: '100%', height:'60px', boxShadow: 'none'}}>
                                                <div className="card-titulo bold"><i>{vinil.nombre}</i></div>
                                            </Card.Grid>
                                        

                                            <Card.Grid hoverable={false} style={{width: '100%', boxShadow: 'none',marginBottom:1}}>
                                                <div style={{display: 'block',alignItems:'center',justifyContent:'center'}}>

                                                    <div  style={{display: 'flex',alignItems:'center',justifyContent:'center',marginTop:10}}>
                                                    
                                                        <span style={{marginRight:'7px',fontSize: '20px'}}><CheckCircleOutlined style={{color:'green'}}/> {(vinil.disponible===true) ? 'Producto disponible' : ' Producto agotado'}</span>
                                                      
                                                    </div>

                                                    <div  style={{display: 'flex',alignItems:'center',justifyContent:'center'}}>
                                                    
                                                    <span><Rate disabled value={vinil.rating} allowHalf style={{marginRight:'10px'}}  /><UserOutlined />{vinil.numReviews}</span>
                                                  
                                                    </div>

                                                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'10px'}}>
                                        
                                                        <span style={{fontSize: '20px'}}>Desde: </span> 
                                                        <span style={{fontSize: '20px'}}>{` $${vinil.precio} pesos`}</span>
                                                    </div>
                                                       
                                                </div>
                                                
                                            </Card.Grid>

                                            <Card.Grid  hoverable={false} style={{width: '100%', boxShadow: 'none'}}>
                                                <div>
                                                    <Button type="primary" block style={{backgroundColor:'#DE0000',border:'none',borderRadius:30,marginBottom:'15px'}} onClick={()=>handleVinil(vinil._id)}>
                                                      <span style={{fontSize:15,fontWeight:'bold'}}>Ver detalles</span>
                                                    </Button>
                                                    {
                                                        (id && rol==='ADMIN_ROLE') && (
                                                            <Button type="primary" block style={{backgroundColor:'#DE0000',border:'none',borderRadius:30}} onClick={()=>handleEditar(vinil._id,vinil.nombre,vinil.precio,vinil.categoria._id,vinil.descripcion,vinil.medidas,vinil.adicional)}>
                                                                <EditOutlined style={{fontSize:20}} /> <span style={{fontSize:15,fontWeight:'bold'}}>Editar producto</span>
                                                            </Button>


                                                        )
                                                    }

                                                    {
                                                        (id && rol==='ADMIN_ROLE') && (
                                                            <Button type="primary" block style={{backgroundColor:'red',border:'none',borderRadius:30,marginTop:'15px'}} onClick={()=>handleEliminar(vinil._id)}>
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
                <Pagination defaultCurrent={currentPage} onChange={handleCambioPagina} pageSize={8} total={vinilInfo.total} responsive={true} />
            </div>
       
            {
                (id && rol==='ADMIN_ROLE') && (
                    <>
                        <Container>
                            <FloatingButton onClick={showModal} styles={{backgroundColor: '#DE0000', color: 'white'}}><PlusOutlined style={{fontSize: '20px',cursor:'pointer'}} /></FloatingButton>
                        </Container>

                        <ModalVinilScreen
                        currentPage={currentPage}
                        vinilValues={vinilValues}
                        setCajaValues={setVinilValues}
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
