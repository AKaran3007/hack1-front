import React from 'react'

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardSlider() {
    
  return (
    <div style={{marginBottom:"3%", marginTop:"3%", padding:"3%"}}>
    <Carousel className="cardslider" indicators={false}>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"50px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px",width:"300px", borderRadius:"20%"}}>
                        <Card.Img src="./assets/c1.png" alt="Card image" style={{height:"300px",width:"300px"}} />
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px",width:"300px",borderRadius:"20%"}}>
                        <Card.Img src="./assets/c2.jpg" alt="Card image" style={{height:"300px",width:"300px"}}/>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px",width:"300px", borderRadius:"20%"}}>
                        <Card.Img src="./assets/c3.png" alt="Card image" style={{height:"300px",width:"300px"}}/>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px",width:"300px", borderRadius:"20%"}}>
                        <Card.Img src="./assets/c4.jpg" alt="Card image" style={{height:"300px",width:"300px"}}/>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"50px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px",width:"300px"}}>
                        <Card.Img src="./assets/b.jpg" alt="Card image" style={{height:"300px",width:"300px"}}/>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px",width:"300px"}}>
                        <Card.Img src="./assets/d.jpg" alt="Card image" style={{height:"300px",width:"300px"}}/>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px",width:"300px"}}>
                        <Card.Img src="./assets/ramleela.jpg" alt="Card image" style={{height:"300px",width:"300px"}}/>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px",width:"300px"}}>
                        <Card.Img src="./assets/s.jpg" alt="Card image" style={{height:"300px",width:"300px"}}/>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"50px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px",width:"300px"}}>
                        <Card.Img src="./assets/soorma.jpg" alt="Card image" style={{height:"300px",width:"300px"}}/>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px",width:"300px"}}>
                        <Card.Img src="./assets/th.jpg" alt="Card image" style={{height:"300px",width:"300px"}}/>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px",width:"300px"}}>
                        <Card.Img src="./assets/war.jpg" alt="Card image" style={{height:"300px",width:"300px"}}/>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px",width:"300px"}}>
                        <Card.Img src="./assets/d.jpg" alt="Card image" style={{height:"300px",width:"300px"}}/>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CardSlider;