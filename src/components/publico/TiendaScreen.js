import { Button, Carousel, Col, Row, Tabs } from 'antd'
import React, { useEffect } from 'react';

import byFeliz from '../../assets/byFeliz.jpeg';
import esfera from '../../assets/esfera.jpg';
import termo from '../../assets/termo.jpg';
import caja from '../../assets/caja.jpg';
import caja_imagen from '../../assets/caja_imagen.jpg';
import corona from '../../assets/corona.jpg';
import llavero from '../../assets/llavero.jpg';
import termo2 from '../../assets/termo2.jpg';
import { useNavigate } from 'react-router';

export const TiendaScreen = () => {

    
    const navigate=useNavigate();

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

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
        <div style={{padding:'3% 2%'}}>

                       
            <Row >
                <Col span={24} className='gutter-row'>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#f2f5f4',marginBottom:'10px'}}>
                    <img src={byFeliz} alt='byFeliz' style={{width:'300px'}} />

                    </div>
                </Col>
                
                <Col span={24} xs={24} sm={24} lg={24} className='gutter-row'>
                <div className="banner-1">
                <Carousel autoplay dots={false}>
                    <div>
                        <img src={corona} alt='corona' className='contentStyle'/>
                    </div>
                    <div>
                        <img src={termo2} alt='corona' className='contentStyle'/>
                    </div>
                    <div>
                        <img src={caja_imagen} alt='corona' className='contentStyle'/>
                    </div>
                    <div>
                        <img src={llavero} alt='corona' className='contentStyle'/>
                    </div>
                </Carousel>
                </div>
                </Col>
            </Row>

            <Row gutter={[16,16]} style={{marginBottom:30,marginTop:25}}>
                <Col xs={24} sm={24} lg={8} style={{borderRight:'1px dashed  #b4c8c4'}}>
                    <h1 style={{textAlign:'center',}}><i>Diseños MDF</i></h1>
                    <div style={{textAlign:'center'}}>

                    <img src={esfera} alt='esfera' width={260} height={210} />

                    <p style={{marginTop:'10px',fontSize:'15px'}}>Contamos con una gran vaierdad de diseños en MDF</p>
                    <Button type="primary" block style={{width:'60%',backgroundColor:' #5cc3ab',border:'1px solid  #5cc3ab'}} onClick={handleMDF}>
                        Ver mas
                    </Button>

                    </div>
                </Col>

                <Col xs={24} sm={24} lg={8} style={{borderRight:'1px dashed  #b4c8c4'}}>
                    <h1 style={{textAlign:'center'}}><i>Diseños en vinilo</i></h1>
                    <div style={{textAlign:'center'}}>

                    <img src={termo} alt='termo' width={240} height={210} />

                    <p  style={{marginTop:'10px',fontSize:'15px'}}>Contamos con una gran vaierdad de diseños en vinil</p>
                    <Button type="primary" block style={{width:'60%',backgroundColor:' #5cc3ab',border:'1px solid  #5cc3ab'}} onClick={handleVinilo}>
                        Ver mas
                    </Button>
                    </div>
                </Col>

                <Col xs={24} sm={24} lg={8}>
                    <h1 style={{textAlign:'center'}}><i>Cajas personalizadas</i></h1>
                    <div style={{textAlign:'center'}}>

                    <img src={caja} alt='caja' width={240} height={210} />
                    <p style={{marginTop:'10px',fontSize:'15px'}}>Contamos con una gran vaierdad de Cajas personalizadas para toda ocasion</p>
                    <Button type="primary" block style={{width:'60%',backgroundColor:' #5cc3ab',border:'1px solid  #5cc3ab'}} onClick={handleCajas}>
                        Ver mas
                    </Button>
                    </div>
                </Col>
            </Row>

        

           
        </div>
    )
}
