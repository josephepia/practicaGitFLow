function addNumbers(a: number, b: number): number
{
    return a+b;
}

const addNumbersArrow = (a: number, b: number): string =>{
    return 'hola mundo';
}

function multiply( fisrtnumber: number, secondNumber? : number , base: number = 2){
    return fisrtnumber*base;
}

//const result = addNumbers(1,1).toString()
//const result2: string = addNumbersArrow(1,2)
//const multiplyResult: number = multiply(5)
//console.log({result})
//console.log({result2})
//console.log({multiplyResult})
interface character{
    name:string;
    hp:number;
    showHp:()=> void;
}

const healCharacter = (Character:character , amount: number)=>{
    Character.hp += amount;
}

const strider: character = {
    name: 'strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

strider.showHp()

healCharacter(strider,50)
export{

}