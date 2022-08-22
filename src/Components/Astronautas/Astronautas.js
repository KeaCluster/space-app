import React from 'react';
import './Astronautas.css';

import datos from '../../Constants/astronautas';

const Astronautas = () => {
    const astronauta = datos.map(item => {
        return (
            <Astronauta 
                {...item}
            />
        )
    });

    return(
        <div className='astronauts-container'>
            <h1 className='astronauts-title'>Personas en el espacio</h1>
            {astronauta}
        </div>
    )
}

const Astronauta = props => {
    return (
        <div className='astronaut-container'>
            <h1 className='astronaut-name'>{props.name}</h1>
            <h1 className='astronaut-craft'>Estanción: {props.craft}</h1>
        </div>
    )
}

export default Astronautas;