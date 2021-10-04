import React from "react";
import PropTypes from 'prop-types';

export default class Column extends React.Component {
    constructor(props){
        super(props)

        this.props = props;
    }

    render() {
        const { fieldValue } = this.props;
        return (
            <td>{ fieldValue }</td>
        )
    }
}

Column.propTypes = {
    fieldValue: PropTypes.any.isRequired,
}