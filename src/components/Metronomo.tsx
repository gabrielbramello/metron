import React, { useState, useEffect, useRef } from 'react';

interface MetronomoProps{
    tempo:number;
}
const Metronomo: React.FC<MetronomoProps> = (props) =>{
    const [blocoAtivo, setBlocoAtivo] = useState<boolean>(true);
    
    const style ={
        blocoOn:{
            width:'30px',
            height:'30px',
            backgroundColor: 'black',
            borderWidth:'1px',
            borderStyle:'solid',
            margin:'5px',
            display:'inline-block'  
        },
        blocoOf:{
            width:'30px',
            height:'30px',
            backgroundColor: 'white',
            borderWidth:'1px',
            borderStyle:'solid',
            margin:'5px',
            display:'inline-block' 
        }
    }
    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log(blocoAtivo);
            setBlocoAtivo(!blocoAtivo);
        }, props.tempo);
        return ()=>clearInterval(interval); //o return dentro do useEffect é equivalente ao componentWillUnmount (executa função quando desmonta componente)
    }, [blocoAtivo]);

    
    const blocoMetronomo = (ativo:boolean)=>{
        if(ativo){
            return(<div style={style.blocoOn}></div>);
            
        }else{
            return(<div style={style.blocoOf}></div>);
        }
    }
    return (
        <div>
            {blocoMetronomo(blocoAtivo)}
            {blocoMetronomo(!blocoAtivo)}
        </div>
    );
}

export default Metronomo;