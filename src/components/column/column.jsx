import React from "react";
import PropTypes from 'prop-types';

export const Column = (props) => {
    const { fieldValue } = props;
    return (
        <td>{ fieldValue }</td>
    )
}

Column.propTypes = {
    fieldValue: PropTypes.any.isRequired,
}