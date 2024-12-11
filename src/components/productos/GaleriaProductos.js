import { Button, Image } from 'antd';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { ModalDescImagen } from '../modals/ModalDescImagen';

export const GaleriaProductos = () => {

  const {id}=useParams()
  const {id:id_usuario,rol} = useSelector(state => state.auth);

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  

  const location=useLocation()

  const initValues = {
    '_id': '',
    'alt': '',
  }
  const [imagesValues, setImagesValues] = useState(initValues)

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleEditar = (id_img,alt) => {
    setImagesValues({
        '_id': id_img,
        'alt': alt,

    })
    setIsModalVisible(true); 
  };
    
  return (
    <div style={{padding: '3% 6vw 3% 6vw'}}>

<h1 className='animate__animated animate__bounce' style={{textAlign:'center',fontWeight:'bold',fontSize:'30px'}}><i>Más productos</i></h1>
        
        {
          location.state.img && location.state.img.map((slide,index)=>{
            return(
                <div className='sequency-images' key={index}>
                  {
                    (location.state.img.length>0) ? (
                      <>
                        <Image
                        width={270}
                        height={270}
                        src={slide.src}
                        preview={false}
                        

                        />
                        <p className={slide.alt && 'img_desc' }>{slide.alt}</p>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                          {
                            (id_usuario && rol==='ADMIN_ROLE') && (
                              

                                <Button type='primary' style={{borderRadius:30,backgroundColor:'#BE1A25',border:'none',bottom:10}} onClick={()=>handleEditar(slide._id,slide.alt)}>Editar desc.</Button>
                            

                            )
                          }

                        </div>
                      </>
                    ) : (
                      <h1>No hay productos</h1>
                
                    )
                  }
                 
                </div>

            )
          })
        }
        <ModalDescImagen
            id={id}
          imagesValues={imagesValues}
          setImagesValues={setImagesValues}
          initValues={initValues}
          setIsModalVisible={setIsModalVisible} 
          isModalVisible={isModalVisible}
        />
    </div>
  )
}
