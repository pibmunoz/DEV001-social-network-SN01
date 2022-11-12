import { routes } from "./dictionary";

export const changeView= (hash) =>{
    const divRoot= document.querySelector("#root")

    switch(hash){
        case '#/':
            divRoot.appendChild(routes.home());
        break;
        case '#/register':
            divRoot.appendChild(routes.register())

    }
}
