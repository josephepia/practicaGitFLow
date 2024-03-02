

export class Person{
    // public name : string | undefined ;
    // public address?: string;

    // constructor(name : string , address?: string){
    //     this.name = name;
    //     this.address = address;
    // }
    constructor (public name : string, public address?: string){

    }
}

// export class Hero extends Person{
//     constructor(
//         public alterEgo: string,
//         public age : number,
//         public realName:string,
//     ){
//         super(realName, 'New York')
//     }
// }
// const ironman = new Person('iron man', ' New York');

export class Hero {
    // public person: Person;

    constructor(
        public alterEgo: string,
        public age : number,
        public realName:string, 
        public person : Person
    ){
        // this.person = new Person(realName)
        
    }
}

const tony = new Person ('Tony Stark', 'New');
const ironman = new Hero('iron man', 45, ' Tony York',tony); // Herencia Extend



console.log(ironman)