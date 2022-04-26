import { Card } from 'antd';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productosVinilLoading } from '../../actions/productos';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

export const DiseñosVinilo = () => {
    const { Meta } = Card;

    const dispatch=useDispatch()

    const {productoVinil,ok}=useSelector(state=>state.productos.productosVinil)

    useEffect(() => {
      dispatch(productosVinilLoading());
    }, [dispatch])
    return (
        <div>
            <h1 className='animate__animated animate__bounce' style={{textAlign:'center',fontWeight:'bold',fontSize:'30px'}}>Diseños en Vinilo</h1>

            {
                        (ok===true && productoVinil.length>0) ? (
                            productoVinil.map(el=>{
                                return(
                                    <Card
                                        key={el._id}
                                        style={{ width: 300 }}
                                        cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                        }
                                        actions={[
                                        <SettingOutlined key="setting" />,
                                        <EditOutlined key="edit" />,
                                        <EllipsisOutlined key="ellipsis" />,
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
        </div>
    )
}
