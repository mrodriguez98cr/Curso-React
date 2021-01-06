//import { heroes } from './Data/Heroes';

//import { heroes } from "./Data/Heroes";

//import { heroes } from "./Data/heroes";

import {heroes} from './Data/heroes';

const heroeById=(id)=> heroes.find(heroes=>heroes.id===id);



console.log(heroeById(1));


const heroeByOwner=(owner)=>heroes.filter(heroes=>heroes.owner===owner);

console.log(heroeByOwner('DC'));

