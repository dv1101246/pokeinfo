import { useEffect, useState } from "react"
import { Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getPokemons } from "../Services/Common";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";
import Fuse from 'fuse.js'


function Pokemons () {

    const location = useLocation();
    const [pokemons, setPokemons] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [results, setResults] = useState(null);

    const search = (query) => {
        if(!query || query.length < 3){
            setResults(pokemons);
            return;
        }

        const fuse = new Fuse(pokemons, {keys:["pokemon.name"]});

        const searchResults = fuse.search(query);
        const matches = [];
        if(!searchResults || searchResults.length === 0){
            setResults(matches);
            return;
        }
        else{
            searchResults.map((item, index)=>(matches.push(item.item)));
            setResults(matches);
            return;
        }
    }



    useEffect(() =>{

        const fectData = async () => {
            const response = await getPokemons(location.state.url);
            setPokemons(response);
            setResults(response);
            setLoading(false)
        };
        fectData();

    },[location]);


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
                        <Form.Control type='text' placeholder="Search Pokemon" onChange={(e) => search(e.target.value)}></Form.Control>
                        <Form.Text muted>
                            type here to search for the Pokemon you want to look at
                        </Form.Text>
                    </Form>
                </Col>
            </Row>
            <Row>
                {results.map((item,index) => {
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