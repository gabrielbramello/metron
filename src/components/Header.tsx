import React from 'react';

interface HeaderProps{
    //Possui a prorpiedade title do tipo string. Se for obrigatorio deve conter um '?' antes do ':' Ex: title?: string;
    title: string;
}
//Definindo que a constanten Header é um React Function Component e que essa função recebe o "objeto" (na verdade interface) HeaderProps
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}

export default Header;