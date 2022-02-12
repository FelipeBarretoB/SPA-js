//pov el texto solo dice, hago esto entro file, entonces te toca buscar en que file lo hizo

const Utils = {

    parseRequestURL : () =>{

        let url = location.hash.slice(1).toLocaleLowerCase || '/';
        let r =url.split("/")
        let request = {

            resourse : null,
            id : null,
            verb : null
        }


    }

}