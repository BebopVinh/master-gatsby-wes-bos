import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slick's Slices`,
    siteUrl: 'https://gatsby.pizza',
    description: 'The best pizza place in Hamilton!',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // this is the name of the name of the plugin you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'p4m0q2cv',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
