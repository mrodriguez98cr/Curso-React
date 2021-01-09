// Promesas

import {heroeById} from '../src/Bases/08-import-ex'
import heroes from './Data/heroes';


// const promesa=new Promise((resolve,reject)=>
// {
//     setTimeout(() => {
//         const heroe=heroeById(2);
//         resolve(heroe)
//         //reject('No se pudo encontar el malparido');
//     }, 2000)
// }); //son  tareas que se asignan a una variable 


// promesa.then((heroe)=>{
//     console.log('heroe',heroe)
// })
// .catch(err=>console.warn(err));


const HeroebyIdAsync = (id)=>
{
    return new Promise((resolve,reject)=>
{
    setTimeout(() => {
        const heroe=heroeById(id);
        if(heroe)
        resolve(heroe);
        
        else
        reject('No se pudo encontar el malparido')
        //console.log(p1)
        resolve(heroe)
        //reject('No se pudo encontar el malparido');
    }, 2000)
}); //son  tareas que se asignan a una variable 



}


HeroebyIdAsync(2).
then(console.log)
.catch(console.warn);