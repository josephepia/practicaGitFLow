import { Product } from './06-function-destructure';
import {taxCalculation } from './06-function-destructure';
const shoppingCard: Product[] = [
    {
        description: 'nokia',
        price:100,
    },
    {
        description: 'iPad',
        price: 150,
    }
];

const [total, tax ] = taxCalculation({
    products:shoppingCard,
    tax:0.15,
})

console.log('total', total);
console.log('tax', tax)

