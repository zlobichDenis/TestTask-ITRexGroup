import React from "react";
import PropTypes from 'prop-types';
import Table from "../table/table";

export default class TableButtons extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.typesOfButtons = {
            NEXT: 'NEXT',
            PREV: 'PREV',
            INDEX: 'INDEX',
        }
    }

    render() {
        const { numberOfButtons, onChangeCurrentIndex, currentIndexOfData } = this.props;

        const pageButtons = new Array(numberOfButtons).fill(null).map((item, index) => {
            const keyModifier = Math.random() * 15;
            return (
                <button 
                    disabled={index === currentIndexOfData ? true : false}
                    key={keyModifier}
                    onClick={(evt) => {
                        const index = +evt.target.value;
                        onChangeCurrentIndex(index, this.typesOfButtons.INDEX);
                    }} 
                    value={index} 
                    name={`button-page-${index}`}>{index + 1}
                </button>
            )
        })
        return (
            <div>
                <button 
                    onClick={() => {
                        onChangeCurrentIndex(null, this.typesOfButtons.PREV);
                    }} 
                    name='prev-page'
                    disabled={currentIndexOfData === 0 ? true : false}
                    >
                    Prev
                </button>
                {pageButtons}
                <button 
                    onClick={() => {
                        onChangeCurrentIndex(null, this.typesOfButtons.NEXT);
                    }} 
                    name='next-page'
                    disabled={currentIndexOfData === 5 ? true : false}
                    >
                    Next
                </button>
            </div>
        )
    }
}

TableButtons.propTypes = {
    numberOfButtons: PropTypes.number.isRequired,
    onChangeCurrentIndex: PropTypes.func.isRequired,
    currentIndexOfData: PropTypes.number.isRequired,
}