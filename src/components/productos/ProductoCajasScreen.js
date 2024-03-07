import { Button, Col, Comment, Empty, Form, Image, List, Rate, Row, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router'
import { crearReviews, editarPortada, productoPorId, subirFotos } from '../../actions/productos';
import TextArea from 'antd/lib/input/TextArea';
import { CheckCircleOutlined,UserOutlined,PictureOutlined,PlusSquareOutlined } from '@ant-design/icons';

export const ProductoCajasScreen = () => {

  const navigate=useNavigate();

  const dispatch=useDispatch();
  const {id}=useParams();
  const {id:id_usuario,rol} = useSelector(state => state.auth);
  const {producto}=useSelector(state=>state.productos.productoCaja)

  const [img, setImg] = useState(null);
  const [file, setFile] = useState();
  const [message, setMessage] = useState('');


  const [productoStatus, setProductoStatus] = useState({
    ok:false,
});

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(productoPorId(id,setProductoStatus))
  }, [id,dispatch])

  const handleGallery=(arr_imgs,id_producto)=>{
    navigate(`/producto/galeria/${id_producto}`,{
      state:{img:arr_imgs}
    })

  }

  const handleCargarImagen = () => {
    document.getElementById('img_input').click();
}

const handleEditarPortada = (e,idproducto) => {
    const file = e.target.files[0];
    dispatch(editarPortada(idproducto,file));
}

  const handleArchivo=(e)=>{
    if (e.target.files && e.target.files[0]) {
        const imagen = e.target.files[0];
        const image=URL.createObjectURL(imagen);
        setFile(image);
        setImg(imagen);
      }
  }

  const handleMessageChange = event => {
    // 👇️ access textarea value
    setMessage(event.target.value);
  };

  const handlePhoto=()=>{
   dispatch(subirFotos(id,img,message))
   setImg(null)
   setMessage('')
}

  const handleSubmit=(data)=>{
    dispatch(crearReviews(data,id))
  }

  return (
    <div style={{padding: '3vh 6vw 3vh 6vw',backgroundColor:'white',flexDirection:'column'}}>
      {
        (productoStatus.ok===true) ? (
          <>

          <Row gutter={[16,16]} className='up-margin' >
              <Col style={{height: '400px'}} xs={24} sm={24} md={12} lg={10} className="gutter-row" >

                  <div className='image-container'>
                    {

                      (id && rol==='ADMIN_ROLE') ? (
                          <div className='image-container'>
                              <input id='img_input' type="file" style={{display: 'none'}}  onChange={(e)=>handleEditarPortada(e,producto._id)} />
                              <Image preview={false} width={'100%'} height={'100%'} style={{borderRadius:'20px'}} src={producto.img===null ? 'https://res.cloudinary.com/dwvfkyc6l/image/upload/v1655089319/byFeliz_uqdpis.jpg' : `${producto.img}`} fallback='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1655089319/byFeliz_uqdpis.jpg' />
                          <div className='after'>
                              <PlusSquareOutlined style={{fontSize: '30px', color: '#fff'}} onClick={handleCargarImagen} />
                          </div></div>

                        ) : (
                          <Image preview={false} width={'100%'} height={'100%'} style={{borderRadius:'20px'}} src={producto.img===null ? 'https://res.cloudinary.com/dwvfkyc6l/image/upload/v1655089319/byFeliz_uqdpis.jpg' : `${producto.img}`} fallback='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1655089319/byFeliz_uqdpis.jpg' />

                      )
                    }
                 
                  </div>
                  
              </Col>

              <Col  xs={24} sm={24} md={12} lg={14} className="gutter-row">
                  <Row gutter={[18,18]}>
                      <Col span={24}>

                          <div style={{display: 'inline-block', position: 'relative', width: '100%'}}>
                              <TextArea style={{display: 'block',color:'black',textAlign:'center'}} id="nombre"  autoSize={true}  value={producto.nombre} className="input-titulo" />
                          </div>

                      </Col>

                      <Col  xs={24} md={24} sm={12} lg={12}>
                          <div style={{width: '100%', textAlign: 'center'}}>
                              <h1 style={{color: 'black',fontSize:'25px',textAlign:'initial'}}><i>-Descripción del producto</i></h1>
                          </div>
                      </Col>
                      <Col span={24} >
                          <div style={{display: 'inline-block', width: '100%'}}>
                              <TextArea readOnly style={{display: 'block',fontSize:'17px', color:'black',height:'15px',cursor:'initial'}} value={producto.descripcion} className="input-desc-usuario" bordered={false}  autoSize={false} />
                          </div>
                      </Col>
                  </Row>
                  <Row>
                  <Col span={24}>
                          <div style={{display: 'inline-block', width: '100%',clear:'both'}}>
                            <h1 style={{color: 'black',fontSize:'25px',textAlign:'initial'}}><i>-Valoración del producto</i></h1>
                            <span style={{fontSize:'17px'}}><Rate disabled allowHalf value={producto.rating} style={{marginRight:'10px',height:20}}/>{`${producto.rating} estrellas`}<UserOutlined style={{marginLeft:10}} />{`${producto.numReviews} reviews`}</span>
                          </div>
                      </Col>
                  </Row>
              </Col>
          </Row>


          <Row style={{marginTop:30}}>
            <Col  xs={24} sm={24} md={12} lg={12} className="gutter-row">
              <Row gutter={[18,18]}>
                <Col span={24}>
                  <div style={{width: '100%', textAlign: 'center',marginBottom:10}}>
                    <h1 style={{color: 'black',fontSize:'25px',textAlign:'initial'}}><i>-Medidas del producto</i></h1>
                  </div>
                    <div style={{display: 'inline-block', width: '100%',marginBottom:10}}>
                    <span  style={{display: 'block',fontSize:'17px', color:'black'}} >{producto.medidas }</span>
                  </div>

                </Col>
                <Col span={24}>
                  <div style={{width: '100%', textAlign: 'center',marginBottom:10}}>
                  <h1 style={{color: 'black',fontSize:'25px',textAlign:'initial'}}><i>-Características adicionales del producto</i></h1>
                  </div>

                  <div style={{display: 'inline-block', width: '100%',marginBottom:10}}>
                      <span  style={{display: 'block',fontSize:'17px', color:'black'}} >{producto.adicional }</span>
                  </div>

                </Col>

                <Col span={24}>
                  <div style={{display: 'inline-block', width: '100%'}}>
                      <h2 style={{fontSize:'25px', color:'black'}}><i>Comunicate con nosotros a whatsapp escaneando el codigo QR a continuacion, para cualquier pedido,
                      duda o aclaracion con gusto estamos a tus ordenes</i></h2>
                  </div>

                </Col>

                <Col span={24}>
                  <div style={{textAlign:'center',marginBottom:30}}>

                    <Button type="primary" block style={{width:'100%',backgroundColor:'#5EC0A7',border:'none',borderRadius:30,fontSize:20,height:40,fontFamily:'-moz-initial'}} onClick={()=>handleGallery(producto.images,id)}><span style={{textAlign:'center'}}>Mostrar mas imágenes o modelos</span></Button>

                  </div>
                
                </Col>
              </Row>
            </Col>

            <Col  xs={24} sm={24} md={12} lg={12} className="gutter-row">
              <Row gutter={[18,18]}>
                <Col span={24} >

                    <div style={{display: 'inline-block', position: 'relative', width: '100%'}}>
                        <h1 style={{display: 'block',color:'grey',border:'none',textAlign:'center',fontSize:25}} >
                            {
                                (producto.disponible===true) ?
                                <h1 style={{color: 'black',fontSize:'25px'}}><CheckCircleOutlined style={{color:'green'}}/><i> El producto está disponible</i></h1>  : <h1 style={{color: 'black',fontSize:'25px'}}><CheckCircleOutlined style={{color:'red'}}/><i> El producto ya no está disponible</i></h1> 
                            }
                        </h1>
                    </div>

                </Col>

                <Col span={24} className='gutter-row'>
                    <div style={{width: '100%', textAlign: 'center',clear:'both',justifyContent:'center'}}>
                        <h1 style={{color: 'black',fontSize:'25px'}}><i>Acceso a Whatsapp</i></h1>
                        <Image
                              width={'60%'}
                              src="https://res.cloudinary.com/dwvfkyc6l/image/upload/v1653432131/codigo_favyc7.jpg"
                          />
                    </div>
                </Col>
                      
              </Row>
            </Col>
          </Row>

         
          
          <Row gutter={[18,18]} style={{marginTop:30}}>

            {
              (id_usuario && rol==='ADMIN_ROLE') && (
                <Col span={24}>
                  <div className="img-holder">
                      {
                          (img===null) ? <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width={200} height={200} alt="hola" preview={false} ></Image>
                          :  <Image src={file} width={200} height={200} alt="hola" preview={false} ></Image>

                      }
                  </div>
                  <h1 style={{textAlign:'center', fontFamily:'Arial,Helvetica,sans-serif',fontWeight:'bold'}}>Añade imagenes del mismo producto</h1>
                  
                  <input type="file" name="img" id="input" accept="image/*" onChange={handleArchivo}/>

                  <div className="label">
                    <label htmlFor="input" className="image-upload">
                    <PictureOutlined style={{marginRight:10,padding:'auto'}}/>
                     Elige la imagen
                    </label>
                    
                  </div>
                  <div className='div-textarea' >
                    <TextArea rows={4}
                      autoSize={false} 
                      style={{resize:'none',width:'100%',marginTop:15}}
                      value={message}
                      onChange={handleMessageChange}
                      placeholder='Añadir comentarios'
                    />

                  </div>
                  <div className='div-button' >
                    <Button type='primary' block style={{marginTop:15,width:'100%',borderRadius:30,backgroundColor:'#DE0000',border:'none',fontFamily:'-moz-initial'}} onClick={handlePhoto} >Añadir imagen y comentario</Button>

                  </div>
                </Col>
              )
            }
 
            <Col span={24}>

              <h1 style={{color: 'black',fontSize:'25px',textAlign:'center',marginTop:10}}>Valoraciones del producto</h1>

              {
                (producto.numReviews>0) ? (

                  <List
                  dataSource={producto.reviews}
                  header={`${producto.reviews.length} ${producto.reviews.length > 1 ? 'respuestas' : 'respuesta'}`}
                  itemLayout="horizontal"
                  renderItem={(item) => (
                    <li>
                      <Comment
                        author={item.name}
                        avatar='https://joeschmoe.io/api/v1/random'
                        content={item.comment}
                      />
                      <Rate allowHalf disabled value={item.rating}/>
                    </li>
                  )}
                  />

                ) : (
                  <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{
                      height: 80,
                    }}
                    description={
                      <span style={{fontFamily:'-moz-initial',fontSize:20}}>
                        Aun no se han hecho valoraciones del producto
                      </span>
                    }
                  >
                    
                  </Empty>
                )
              }

              <h1 style={{color: 'black',fontSize:'25px',textAlign:'center',marginTop:30}}>Califica nuestros productos</h1>

              {
                (id_usuario) ? (
                  <>
                    <Form onFinish={handleSubmit}>
                      <Form.Item name='comment'>
                        <TextArea rows={4} placeholder='Dejanos tu opinion acerca del producto' autoSize={false} style={{resize:'none'}}/>
                      </Form.Item>
            
                      <Form.Item name='rating' label="Calificanos (1 a 5 estrellas) ">
                        <Rate allowHalf />
                      </Form.Item>
                  

                      <Form.Item>
                        <Button  htmlType="submit" type="primary" style={{backgroundColor:'red',border:'none',borderRadius:30}} >
                          Añadir comentario y calificación
                        </Button>
                      </Form.Item>
                    </Form>
                  </>
                )
                : (
                  <span style={{display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'-moz-initial',fontSize:20}}>Regístrate e inicia sesión para dejar una valoración de nuestros productos</span>
                )
              }
              
            </Col>

          </Row>
         

        </>

        ) : (
          <Skeleton paragraph={{rows: 8}} active />
        )
      }
    </div>
  )
}

