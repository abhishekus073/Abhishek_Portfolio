import { Container, Row, Col, Tab } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";
import projImg1 from "../assets/img/CERTIFICATE_1.jpeg";
import projImg2 from "../assets/img/CERTIFICATE_2.jpg";
import projImg3 from "../assets/img/UC-880cc84c-8160-44d6-a9c6-575ae80c857d.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certifications = () => {

  const Certifications = [
    {
      title: "Crash Course on Python",
      description: "Python Programming Basic Python Syntax Basic Python Data Structures Object-Oriented Programming (OOP)",
      imgUrl: projImg1,
    },
    {
      title: "AI ForIndia 2.0",
      description: "AI AND ML",
      imgUrl: projImg2,
    },
    {
      title: "JAVA ",
      description: "Learn Java and artificial Intelligence Programmind Tools",
      imgUrl: projImg3,
    }
    ,
    {
      title: "JAVA ",
      description: "Learn Java and artificial Intelligence Programmind Tools",
      imgUrl: projImg3,
    }
   
  ];

  return (
    <section className="certifications" id="certification">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certifications</h2>
                < br />
                <Tab.Container id="certifications-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Certifications.map((project, index) => {
                            return (
                              <CertificateCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
