import React, { useEffect, useState } from 'react';
import { Button, Carousel, Col, Row } from 'antd'

import { useNavigate } from 'react-router';

export const TiendaScreen = () => {


    const navigate=useNavigate();
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        window.scrollTo(0,0)
        
        setShowModal(false)
    }, [showModal])

   

    

    const handleMDF=()=>{
        navigate('/categorias/disenos-mdf')

    }
    const handleVinilo=()=>{
        navigate('/categorias/disenos-vinilo')

    }
    const handleCajas=()=>{
        navigate('/categorias/disenos-cajas')

    }
    return (
        <div style={{background: '#fff' , padding: '3% 6vw 3% 6vw'}}>

            <Row >
                <Col span={24} className='gutter-row'>
                    <Carousel dots={false} autoplay effect='fade' autoplaySpeed={2000} >
                        <div className='carousel-jpg'>
                            <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1657820240/alcancia_portada1_tkyec0.jpg' alt='corona' className='contentStyle'/>
                        </div>

                        <div className='carousel-jpg'>
                            <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1666312954/WhatsApp_Image_2022-10-20_at_5.33.38_PM_dplgoo.jpg' alt='corona' className='contentStyle'/>
                        </div>
                       
                        <div className='carousel-jpg'>
                            <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1657820240/portarretrato3_cvodyw.jpg' alt='corona' className='contentStyle'/>
                        </div>
                        <div className='carousel-jpg'>
                            <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1657820245/esferas2_bnrkcy.jpg' alt='corona' className='contentStyle'/>
                        </div>
                        <div className='carousel-jpg'>
                            <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1657820240/colibri_q7yx9j.jpg' alt='corona' className='contentStyle'/>
                        </div>
                    </Carousel>

                </Col>
            </Row>




            <Row gutter={[16,16]} style={{marginBottom:30,marginTop:25}}>
                <Col xs={24} sm={24} lg={8} style={{borderRight:'1px dashed  #4BA4D1'}}>
                    <h1 style={{textAlign:'center',}}><i>Diseños MDF</i></h1>
                    <div style={{textAlign:'center'}}>

                    <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1657820244/llavero_fmu4um.jpg' alt='esfera' width={260} height={270} className='img-tres' />
                    <div style={{height:70}}>
                    <p style={{marginTop:'10px',fontSize:'15px'}}>Contamos con una gran variedad de diseños en MDF</p>

                    </div>
                    <Button type="primary" size='large' block style={{width:'60%',backgroundColor:'#4BA4D1',border:'1px solid  #4BA4D1',borderRadius:'30px'}} onClick={handleMDF}>
                        <span style={{fontSize:15,fontWeight:'bold'}}>Ver productos</span>
                    </Button>

                    </div>
                </Col>

                <Col xs={24} sm={24} lg={8} style={{borderRight:'1px dashed  #4BA4D1'}}>
                    <h1 style={{textAlign:'center'}}><i>Diseños en vinilo</i></h1>
                        <div style={{textAlign:'center'}}>

                        <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1657820243/termo4_p7msuo.jpg' alt='termo' width={240} height={270} className='img-tres' />

                        <div style={{height:70}}>

                        <p  style={{marginTop:'10px',fontSize:'15px'}}>Contamos con una gran variedad de diseños en vinil</p>
                    </div>

                    <Button size='large' type="primary" block style={{width:'60%',backgroundColor:'#4BA4D1',border:'1px solid #4BA4D1',borderRadius:'30px'}} onClick={handleVinilo}>
                        <span style={{fontSize:15,fontWeight:'bold'}}>Ver productos</span>
                    </Button>
                    </div>
                </Col>

                <Col xs={24} sm={24} lg={8}>
                    <h1 style={{textAlign:'center'}}><i>Otros productos</i></h1>
                    <div style={{textAlign:'center'}}>

                    <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1657820242/cactus_yqsw0u.jpg' alt='caja' width={240} height={270} className='img-tres' />
                    <div style={{width:'100%',height:70}}>
                    <p style={{marginTop:'10px',fontSize:'15px'}}>Contamos con gran variedad de cajas personalizadas para toda ocasión</p>
                    </div>
                    <Button size='large' type="primary" block style={{width:'60%',backgroundColor:'#4BA4D1',border:'1px solid #4BA4D1',borderRadius:'30px'}} onClick={handleCajas}>
                        <span style={{fontSize:15,fontWeight:'bold'}}>Ver productos</span>
                    </Button>
                    </div>
                </Col>
            </Row>
            <Row gutter={24}>
                <Col  xs={24} md={24} sm={24} lg={24} >
                <h1 className='animate__animated animate__bounce new-title' ><i>Encuentra nuestra nueva exhibicion</i></h1>
                    <div className='container-video'>
                       
                        <video
                        className='video'
                        autoPlay
                        muted
                        loop={true}
                            
                            >
                            <source src='https://res.cloudinary.com/dwvfkyc6l/video/upload/v1657819701/video1_pu2t41.mp4' type="video/mp4"></source>    
                        </video>
                    </div>
                </Col>
            </Row>

           
            <div className='div-img'>
                <div className='fondo-img new-banner1'>

                    <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1669073362/dinamica_pv2xyp.jpg' alt='fondo' className='fondo-img' />
                </div>

                <div className='fondo-img new-banner2'>

                    <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1709826717/dinamica_compra_sche8n.jpg' alt='fondo' className='fondo-img animate__animated' />
                </div>
                
            </div>
            <div className='div-img'>
                <div className='fondo-img new-banner1'>

                    <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1709826718/recuerdos_creativos_y6pyua.jpg' alt='fondo' className='fondo-img' />
                </div>

                <div className='fondo-img new-banner2'>

                    <img src='https://res.cloudinary.com/dwvfkyc6l/image/upload/v1668056761/punto_gwg860.jpg' alt='fondo' className='fondo-img animate__animated' />
                </div>
                
            </div>

        </div>
    )
}
