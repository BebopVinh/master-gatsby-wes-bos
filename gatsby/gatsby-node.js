import path from 'path'; // from Node.js API

async function turnPizzasIntoPages({ graphql, actions }) {
  // 1. Get the template for this page
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  // 2. Query all pizzas
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  // 3. Loop over each pizza and create a page for it
  data.pizzas.nodes.forEach((pizza) => {
    actions.createPage({
      // What is the URL for this new page?
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        // creates a slug property to pass to the pizzaTemplate graphQL query
        slug: pizza.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // create pages dynamically
  // 1. pizzas
  await turnPizzasIntoPages(params);
  // 2. toppings
  // 3. Slicemasters
}
