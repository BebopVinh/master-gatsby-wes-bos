import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const PizzaGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-auto-rows: auto auto 500px;
`;

const PizzaStyles = styled.div`
  display: grid;
  /* if browser doesn't support subgrid (i.e. Chrome at the time of this comment) */
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  /* take your row sizing not from the PizzaStyles div, but from the PizzaGridStyles grid */
  grid-template-rows: var(--rows, subgrid);
  /* each pizza needs to span 3 rows in the grid */
  grid-row: span 3;

  /* override the inherited gap */
  grid-gap: 1rem;
`;

function SinglePizza({ pizza }) {
  return (
    <PizzaStyles>
      <Link to={`/pizza/${pizza.slug.current}`}>
        <h2>
          <span className="mark">{pizza.name}</span>
        </h2>
      </Link>
      <p>
        {pizza.toppings.length > 0
          ? pizza.toppings.map((topping) => topping.name).join(', ')
          : 'Toppings not found :('}
      </p>
      <Img fluid={pizza.image.asset.fluid} />
    </PizzaStyles>
  );
}

export default function PizzaList({ pizzas }) {
  return (
    <PizzaGridStyles>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </PizzaGridStyles>
  );
}
