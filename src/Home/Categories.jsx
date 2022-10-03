import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Categories() {
  return (
    <div style={{marginBottom:"3%", marginTop:"3%", padding:"3%", background:"white"}}>
       <h3 style={{color:"black"}}>Categories</h3>
        <Carousel>
            <Carousel.Item>
                <CardGroup style={{gap:"3%"}}>
                    <Card style={{background:"grey",height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/bollywood.jpg" style={{height:"350px"}}/>
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>Bollywood</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card style={{background:"grey", height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/classic.jpg" style={{height:"350px"}} />
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>Classic</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card  style={{background:"grey", height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/inter.jpg" style={{height:"350px"}}/>
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>International</Card.Title>
                        </Card.Body>
                    </Card>
                    <Card  style={{background:"grey",height:"350px", width:"250px"}}>
                        <Card.Img variant="top" src="./assets/reg.jpg" style={{height:"350px"}}/>
                        <Card.Body style={{color:"white"}}>
                        <Card.Title>Regional</Card.Title>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default Categories;