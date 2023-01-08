import React from 'react';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

function PokemonType(params){
    return(
      <LinkContainer to="/pokemons" state={{url:params.url}}>
        <Card>
          <Card.Img variant="top" src={'../images/types/' + params.name + '.png'} />
        </Card>
      </LinkContainer>
    );
}

export default PokemonType;