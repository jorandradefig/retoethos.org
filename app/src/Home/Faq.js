import React, { Component } from 'react'
import './Faq.css'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

class Faq extends Component {
  render() {
    return (
      <div id="faq" className="Faq">
        <Container className="py-5">
          <Row>
            <Col xs="12" lg="12">
              <p className="font-weight-bold mb-0"><span className="greater"> &gt; </span> ¿Cuál es el sector hidrocarburos? ¿Sólo puedo enfocarme en ese sector?</p>
              <p>El sector hidrocarburos hace referencia al conjunto de actividades económicas relacionadas con la extracción, producción y/o procesamiento y comercialización de recursos naturales no renovables (petróleo, gas natural, gas licuado de petróleo, entre otros). Este Reto se enfoca únicamente al análisis y cruce de datos para detectar corrupción en dicho sector.</p>
              
              <p className="font-weight-bold mb-0"><span className="greater"> &gt; </span> ¿En qué fecha cierra la convocatoria?</p>
              <p>La recepción de propuestas se cerrará a las 11:59 hrs (hora de Ciudad de México) del día 24 de marzo de 2018.</p>

              <p className="font-weight-bold mb-0"><span className="greater"> &gt; </span> ¿Es posible aplicar en equipo?</p>
              <p>Sí. Es importante que toda la documentación personal del equipo (identificación, CV, etc.) sea integrada en un sólo archivo.</p>
              
              <p className="font-weight-bold mb-0"><span className="greater"> &gt; </span> Si soy finalista y no puedo asistir al panel presencial, ¿existe otro modo de participación?</p>
              <p>Sí. Es posible presentar de forma remota.</p>
              
              <p className="font-weight-bold mb-0"><span className="greater"> &gt; </span> Si gano, ¿tengo que implementar al propuesta?</p>
              <p>Posterior a la premiación, el participante o equipo ganador se compromete a colaborar de manera directa con Ethos para crear un prototipo funcional.</p>
              
              <p className="font-weight-bold mb-0"><span className="greater"> &gt; </span> ¿Podemos consultar recursos adicionales a los proporcionados por Ethos?</p>
              <p>Sí. Es posible obtener información de otros organismos y entidades no consideradas en el compilado proporcionado por “Ethos”; incluso se puede proponer la apertura de bases de datos que actualmente no sean de uso público para mejorar la detección de irregularidades.</p>
              
              <p>Para preguntas adicionales puedes escribir a <a href="mailto:equipo@codeandomexico.org" target="_top">equipo@codeandomexico.org</a></p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Faq
