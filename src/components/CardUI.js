import React from 'react';
import './card-style.css';

const Card = props => {
    return(
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt='cool project' className='card-img-top'></img>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='text-secondary'>{props.description}</p>
                <a href={props.deployment} target='_blank' rel="noreferrer" className='btn btn-outline-success'>View deployment</a>
                <a href={props.github} target='_blank' rel="noreferrer" className='btn btn-outline-success'>Code on Github</a>
            </div>
        </div>   
    );
}

export default Card;