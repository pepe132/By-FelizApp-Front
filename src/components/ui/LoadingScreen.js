import { Spin } from 'antd'
import React from 'react'

export const LoadingScreen = () => {
  return (
    <div className="auth-center">
        <Spin tip="Cargando"/>
    </div>
   
  )
}
