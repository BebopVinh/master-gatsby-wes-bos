/* eslint-disable prettier/prettier */
import { FaPepperHot as icon} from 'react-icons/fa';

export default {
  // computer name
  name: 'topping',
  // visible title
  title: 'Toppings',
  type: 'document',
  // can take any React component
  icon,
  fields: [
     {
         name: 'name',
         title: "Topping's Name",
         type: 'string',
         description: 'Name of the topping'
     },
     {
        name: 'vegetarian',
        title: 'Vegetarian',
        type: 'boolean',
        description: 'Checked if vegetarian',
        options: {
           layout: 'checkbox'
        }     
     },
  ],
  preview: {
     select: {
        title: 'name',
        vegetarian: 'vegetarian'
     },
     prepare: ({title, vegetarian}) => ({
        title: `${vegetarian ? '🌱' : ''} ${title}`
     })
  }
};
