import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getPokemon } from "../Services/Common";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup";

function Pokemon(){

    const location = useLocation();

    const [pokemon, setPokemon] = useState(null);
    const [isLoading, setLoading] = useState(true);


    const fetchData = async () => {
        const response = await getPokemon(location.state.url);
        setPokemon(response)
        setLoading(false);
        console.log(response)
    }

    useEffect(() =>{
        fetchData();
    },[]);

    if(!isLoading)
    {
        return(
    <Container>
                <Row>
                    <Col>
                        <h1>{pokemon.name}</h1>
                    </Col>
                </Row>
                <Row>
                    {pokemon.sprites.back_default && <Col><Image src={pokemon.sprites.back_default}></Image></Col>}
                    {pokemon.sprites.back_female && <Col><Image src={pokemon.sprites.back_female}></Image></Col>}
                    {pokemon.sprites.back_shiny && <Col><Image src={pokemon.sprites.back_shiny}></Image></Col>}
                    {pokemon.sprites.back_shiny_female && <Col><Image src={pokemon.sprites.back_shiny_female}></Image></Col>}
                    {pokemon.sprites.front_default && <Col><Image src={pokemon.sprites.front_default}></Image></Col>}
                    {pokemon.sprites.front_female && <Col><Image src={pokemon.sprites.front_female}></Image></Col>}
                    {pokemon.sprites.front_shiny && <Col><Image src={pokemon.sprites.front_shiny}></Image></Col>}
                    {pokemon.sprites.front_shiny_female && <Col><Image src={pokemon.sprites.front_shiny_female}></Image></Col>}
                </Row>
                   <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    Weight: {pokemon.weight/10} kg
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    Height: {pokemon.height}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" active>
                                    Abilities
                                </ListGroup.Item>
                                {
                                    pokemon.abilities &&
                                    pokemon.abilities.map((item, index) => {
                                        return <ListGroup.Item as="li" key={index}>{item.ability.name}</ListGroup.Item>
                                    })  
                                }
           
   
                            </ListGroup>
                        </Col>
                    </Row>
                <Row className="mt-3">
                    <Col>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li" active>
                                Held Items
                            </ListGroup.Item>
                            {
                                pokemon.held_items &&
                                pokemon.held_items.map((item, index) => {
                                    return <ListGroup.Item as="li" key={index}>{item.item.name}</ListGroup.Item>
                                })
                            }
                        </ListGroup>   
                    </Col>
                </Row>
    </Container>    
        );
    }

    
}
export default Pokemon