import React from "react";
import PropTypes from 'prop-types';

export default class Column extends React.Component {
    constructor(props){
        super(props)

        this.props = props;
    }

    render() {
        const { value } = this.props;
        return (
            <td>{ value }</td>
        )
    }
}

Column.propTypes = {
    value: PropTypes.any.isRequired,
}