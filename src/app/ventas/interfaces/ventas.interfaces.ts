//Enum da un valor numero a las palabras
//ejemplo en este caso rojo es 0, negro 1, azul 2 y verde 3

export enum Color{
 rojo,negro,azul,verde
}


export interface Heroe{
nombre:string;
 vuela: boolean;
  color:Color;
}