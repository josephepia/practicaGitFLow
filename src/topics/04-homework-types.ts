
interface SuperHero {
    name:string;
    age: number;
    addres: Address;
    showAdress:() => string;
}
interface Address{
    street:string;
    country: string;
    ciudad: string;
}

const superHeroes: SuperHero ={
    name: 'Spiderman',
    age:30,
    addres:{
        street:'Main St',
        country: 'USA',
        ciudad: 'NY'
    },

    showAdress(){
        return this.name + ',' +this.addres.ciudad+' , '+this.age;
    }

}

console.log(superHeroes.showAdress());

export{

}