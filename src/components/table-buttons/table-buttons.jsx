import React from "react";
import PropTypes from 'prop-types';
import Table from "../table/table";

export default class TableButtons extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        const { numberOfButtons } = this.props;
        const pageButtons = new Array(numberOfButtons).fill(null).map((item, index) => {
            return <button value={index} name={`button-page-${index}`}>{index + 1}</button>
        })
        return (
            <div>
                <button name='prev-page'>Prev</button>
                {pageButtons}
                <button name='next-page'>Next</button>
            </div>
        )
    }
}

TableButtons.propTypes = {
    numberOfButtons: PropTypes.number.isRequired
}