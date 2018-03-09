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
      <div className="Faq">
        <Container className="py-5">
          <Row>
            <Col xs="12" lg="12">
              <p>
                <span className="signalP"> &gt; </span> ¿Cuál es el sector hidrocarburos? ¿Sólo puedo enfocarme en ese sector? El sector hidrocarburos hace referencia al conjunto de actividades económicas relacionadas con la extracción, producción y/o procesamiento y comercialización de recursos naturales no renovables (petróleo, gas natural, gas licuado de petróleo, entre otros). Este Reto se enfoca únicamente al análisis y cruce de datos para detectar corrupción en dicho sector.
              </p>
              <p>
                <span className="signalP"> &gt; </span> ¿En qué fecha cierra la convocatoria? La recepción de propuestas se cerrará a las 11:59 hrs (hora de Ciudad de México) del día 24 de marzo de 2018.
              </p>
              <p>
                <span className="signalP"> &gt; </span> ¿Es posible aplicar en equipo? Sí. Es importante que toda la documentación personal del equipo (identificación, CV, etc.) sea integrada en un sólo archivo.
              </p>
              <p>
                <span className="signalP"> &gt; </span> Si soy finalista y no puedo asistir al panel presencial, ¿existe otro modo de participación? Sí. Es posible presentar de forma remota.
              </p>
              <p>
                <span className="signalP"> &gt; </span> Si gano, ¿tengo que implementar al propuesta? Posterior a la premiación, el participante o equipo ganador se compromete a colaborar de manera directa con Ethos para crear un prototipo funcional.
              </p>
              <p>
                <span className="signalP"> &gt; </span> ¿Podemos consultar recursos adicionales a los proporcionados por Ethos? Sí. Es posible obtener información de otros organismos y entidades no consideradas en el compilado proporcionado por “Ethos”; incluso se puede proponer la apertura de bases de datos que actualmente no sean de uso público para mejorar la detección de irregularidades.
              </p>
              <p>
                Para preguntas adicionales puedes escribir a equipo@codeandomexico.org 
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Faq
