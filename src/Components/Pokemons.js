import { useEffect, useState } from "react"
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getPokemons } from "../Services/Common";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";

function Pokemons () {

    const location = useLocation();
    const [pokemons, setPokemons] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const getData = async () => {
        const response = await getPokemons(location.state.url);
        setPokemons(response);
        setLoading(false)
    };

    useEffect(() =>{
        getData();

    },[]);


    if(isLoading){
        return(
            <Spinner animation="border" variant="primary" /> 
        );        
    }

    return(
        <Container fluid>
            <Row>
                <Col>
                    <Form className='m-3'>
                        <Form.Label>Search</Form.Label>
                        <Form.Control type='text' placeholder="Search Pokemon"></Form.Control>
                        <Form.Text muted>
                            type here to search for the Pokemon you want to look at
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
            <Row>
                {pokemons.map((item,index) => {
                    return (<Col>
                                <Card style={{ width: '18rem' }} className='m-3'>
                                    <LinkContainer to='/pokemon' state={{url:item.pokemon.url}}>
                                        <Card.Body>
                                                <Card.Text>
                                                    <span>{item.pokemon.name}</span>
                                                    <span className="float-end"><Image src='../images/pokeball.png'></Image></span>
                                                </Card.Text>
                                        </Card.Body>
                                    </LinkContainer>
                                </Card>
                            </Col>
                    
                    );
                })}
            </Row>
        </Container>
    );

}
export default Pokemons