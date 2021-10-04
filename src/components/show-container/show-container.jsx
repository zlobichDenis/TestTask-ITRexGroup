import React from "react";
import PropTypes from 'prop-types';


export const ShowContainer = (props) => {
    const { firstName, lastName, description, adress } = props.person;
    return (
        <div className='show-container'>
            <h3 className='show-container__title'>Profile info:</h3>
            <p className='show-container_text'>Selected profile: <span>{`${firstName} ${lastName}`}</span></p>
            <p className='show-container_text'>Description: <span>{description}</span></p>
            <p className='show-container_text'>Adress: <span>{adress.streetAddress}</span></p>
            <p className='show-container_text'>City: <span>{adress.city}</span></p>
            <p className='show-container_text'>State: <span>{adress.state}</span></p>
            <p className='show-container_text'>Index: <span>{adress.zip}</span></p>
        </div>
    )
}

ShowContainer.propTypes = {
    person: PropTypes.object,
}