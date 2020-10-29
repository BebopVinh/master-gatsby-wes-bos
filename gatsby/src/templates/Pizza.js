import { graphql } from 'gatsby';
import React from 'react';

export default function SinglePizzaPage({ data }) {
  const { pizza } = data;
  return (
    <div>
      This is for...{' '}
      <strong style={{ color: 'firebrick' }}>{pizza.name}</strong>{' '}
    </div>
  );
}

// tells the query to expect a slug of type String
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
