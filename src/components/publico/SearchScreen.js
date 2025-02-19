import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams,useNavigate } from 'react-router'
import { busquedaCargada } from '../../actions/productos';
import { Button, Card, Col, Pagination, Row, Skeleton,Rate } from 'antd'
import { CheckCircleOutlined,UserOutlined} from '@ant-design/icons';

export const SearchScreen = () => {

  const {parametro}=useParams();

  const navigate=useNavigate()

  const dispatch=useDispatch()

  const [currentPage, setCurrentPage] = useState(1);

  const [variable, setVariable] = useState(false)

  const [searchInfo, setSearchInfo] = useState({
    ok: false,
    results: [],
    total: 8
});

const handleCajas=(idcaja)=>{
  navigate(`/producto/${idcaja}`)

}

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(busquedaCargada(1,parametro,setSearchInfo,setVariable))
    
  }, [dispatch,parametro])

  const handleCambioPagina = (pagina) => {
    window.scrollTo(0,0)
      setSearchInfo(false)
      setCurrentPage(pagina)
        setSearchInfo({
            ...searchInfo,
            status: false
        });

    dispatch(busquedaCargada(pagina,parametro,setSearchInfo,setVariable))
    
}
  
  return (
    <div style={{padding:'3vh 6vw 3vh 6vw'}}>
           
      <h1 className='animate__animated animate__bounce titulo-categorias' style={{textAlign:'center',fontWeight:'bold',fontSize:'30px'}}><i>Coincidencias de tu búsqueda</i></h1>

      <Row gutter={[12, 12]}>
          {
              (variable === true)
                  ?
                      searchInfo.results.map ((res) => {
                          return (

                              <Col key={res._id} className="gutter-row" xs={24} sm={12} md={12} lg={6} >
                                  
                                  <Card
                                  
                                  cover={
                                      
                                    <img  className='foto-principal' alt='cover' src={res.img===null ? 'https://res.cloudinary.com/dwvfkyc6l/image/upload/v1655089319/byFeliz_uqdpis.jpg' : `${res.img}`}  />

                                  }
                                  >  
                                      <Card.Grid hoverable={false} style={{width: '100%', height:'60px', boxShadow: 'none'}}>
                                          <div className="card-titulo bold"><i>{res.nombre}</i></div>
                                      </Card.Grid>
                                  

                                      <Card.Grid hoverable={false} style={{width: '100%', boxShadow: 'none',marginBottom:1}}>
                                          <div style={{display: 'block',alignItems:'center',justifyContent:'center'}}>

                                            <div  style={{display: 'flex',alignItems:'center',justifyContent:'center',marginTop:10}}>
                                            
                                                <span style={{marginRight:'7px',fontSize: '20px'}}><CheckCircleOutlined style={{color:'green'}}/> {(res.disponible===true) ? 'Producto disponible' : ' Producto agotado'}</span>
                                            
                                            </div>

                                            <div  style={{display: 'flex',alignItems:'center',justifyContent:'center'}}>
                                            
                                            <span><Rate disabled value={res.rating} allowHalf style={{marginRight:'10px'}}  /><UserOutlined />{res.numReviews}</span>
                                        
                                            </div>

                                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'10px'}}>
                                    
                                                <span style={{fontSize: '20px'}}>Precio: </span>  
                                                <span style={{fontSize: '20px'}}>{` $${res.precio} pesos`}</span>
                                            </div>

                                                
                                          </div>
                                          

                                      </Card.Grid>

                                      <Card.Grid  hoverable={false} style={{width: '100%', boxShadow: 'none'}}>
                                          <div>
                                              <Button type="primary" block style={{backgroundColor:'#4BA4D1',border:'none',borderRadius:30}} onClick={()=>handleCajas(res._id)}>
                                                  <span style={{fontSize:15,fontWeight:'bold'}}>Ver detalles</span>
                                              </Button>
          
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
          <Pagination defaultCurrent={currentPage} onChange={handleCambioPagina} pageSize={8} total={searchInfo.total} responsive={true} />
      </div>
                      
    </div>

  )
}
