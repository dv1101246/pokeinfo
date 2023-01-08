import {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import { getPokemonTypes } from '../Services/Common';
import PokemonType from './PokemonType';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';

export default function PokemonTypes() {
    const [types, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
        
    const getData = async () => {
       const response = await getPokemonTypes();
        setData(response);
        setLoading(false);
        };


    useEffect(() => {
        getData();
    }, []);

    if(isLoading) {
        <div>
            Loading...
        </div>
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Pokemon Types</h1>
                </Col>
            </Row>
            <Row>
                {(types && types.map(function(item, i){ 
                    return(
                    <Col className='m-3'>
                        <PokemonType name={item.name} url={item.url} />
                    </Col>
                    );
                }))}
            </Row>
        </Container>
      );

    
}


