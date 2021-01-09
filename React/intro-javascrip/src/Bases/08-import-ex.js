//import { heroes } from './Data/Heroes';

//import { heroes } from "./Data/Heroes";

import heroes  from "../Data/heroes";

//import heroes,{owners} from '../Data/heroes';

//console.log(owners);


export const heroeById=(id)=> heroes.find(heroes=>heroes.id===id);



//console.log(heroeById(1));


export const heroeByOwner=(owner)=>heroes.filter(heroes=>heroes.owner===owner);

//console.log(heroeByOwner('DC'));

 
