import { routes } from "./dictionary";

export const changeView= (hash) =>{ 
    
    const divRoot= document.querySelector("#root")
    divRoot.innerHTML="";

    switch(hash){
        case '#/': //en caso de que ese sea el hash va a mostrar esa página
            divRoot.appendChild(routes.home()); //las routes.home son el diccionario (objeto) creado al principio
        break;
        case '#/register':
            divRoot.appendChild(routes.register());
        break;
        case '#/profile':
            divRoot.appendChild(routes.profile());

    }
}
