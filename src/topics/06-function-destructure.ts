export interface Product {
    description: string;
    price: number;

}
const phone : Product={
    description: 'Nokia A1',
    price: 150.0
}

const tablet : Product ={
    description: 'ipad Air',
    price: 250
}
interface TaxCalcultationOptions{
    tax: number;
    products: Product[];
}

export function taxCalculation(options: TaxCalcultationOptions): [number,number]{
    let total:number=0;

    options.products.forEach(({price}) =>{
        total+= price
    })

    return [total, total*options.tax];
}

const productos = [phone,tablet];
const tax = 0.15;

const [ total, taxTotal] = taxCalculation({
    products: productos,
    tax:tax,
})

 
console.log('total',total);
console.log('tax', taxTotal);


export{

}