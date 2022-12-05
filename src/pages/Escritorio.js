import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Row,Col,Typography,Button, Divider } from 'antd'
import React from 'react'


const {Title,Text}= Typography;

export const Escritorio = () => {

  const salir =()=>{
    console.log('salir')
  }
  const siguienteTicket = ()=>{
    console.log('siguiente')

  }
  return (
    <>
    <Row>
      <Col span ={20}>
        <Title></Title>
        <Text>Usted esta trabajando en el escritorio: </Text>
        <Text type="success">5</Text>
      </Col>
      <Col>
      <Button onClick={salir}
          shape="round"
          type="danger"
        ><CloseCircleOutlined/>
          Salir

        </Button>
      </Col>
    </Row>
    <Divider/>
    <Row>
      <Col>
        <Text>Esta siendo atendido el ticket numero: </Text>
        <Text style={{fontSize:30}}
          type="danger">55 </Text>
      </Col>
    </Row>
    <Row>
      <Col offset={18} span={6} align="right">
        <Button onClick={siguienteTicket}
          shape="round"
          type="primary"
        >
          <RightOutlined/>
          Siguiente

        </Button>

      </Col>
    </Row>
    </>
  )
}
