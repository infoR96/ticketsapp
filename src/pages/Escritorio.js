import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';
import { Row,Col,Typography,Button, Divider } from 'antd'
import React,{useState} from 'react'
import { useHideMenu } from '../hooks/useHideMenu';
import { getUsuarioStorage } from '../helper/getUsuarioStorage';
import {  useNavigate } from 'react-router-dom';


const {Title,Text}= Typography;

export const Escritorio = () => {
  useHideMenu(false);
  const [usuario]=useState(getUsuarioStorage());
  const Navigate = useNavigate();

  const salir =()=>{
    localStorage.clear();
    console.log('hilla')
    Navigate('/ingresar')
  }
  const siguienteTicket = ()=>{
    console.log('siguiente')

  }
  if(!usuario.agente || !usuario.escritorio){
    Navigate('/ingresar')
  }
  return (
    <>
    <Row>
      <Col span ={20}>
        <Title level={2}>{usuario.agente}</Title>
        <Text>Usted esta trabajando en el escritorio: </Text>
        <Text type="success">{usuario.escritorio}</Text>
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
