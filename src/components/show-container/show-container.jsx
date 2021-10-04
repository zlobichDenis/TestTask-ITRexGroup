import React from "react";
import PropTypes from 'prop-types';


export const ShowContainer = (props) => {
    const { firstName, lastName, description, adress } = props.person;
    return (
        <div>
            <h3>Profile info:</h3>
            <p>Selected profile: <span>{`${firstName} ${lastName}`}</span></p>
            <p>Description: <span>{description}</span></p>
            <p>Adress: <span>{adress.streetAddress}</span></p>
            <p>City: <span>{adress.city}</span></p>
            <p>State: <span>{adress.state}</span></p>
            <p>Index: <span>{adress.zip}</span></p>
        </div>
    )
}

ShowContainer.propTypes = {
    person: PropTypes.object,
}