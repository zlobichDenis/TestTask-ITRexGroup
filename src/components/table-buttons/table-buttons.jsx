import React from "react";
import PropTypes from 'prop-types';




export const TableButtons = (props) => {
    const { numberOfButtons, onChangeCurrentIndex, currentIndexOfData } = props;

    const TYPES_OF_BUTTONS = {
        INDEX: 'INDEX',
        NEXT: 'NEXT',
        PREV: 'PREV',
    }

    const pageButtons = new Array(numberOfButtons).fill(null).map((item, index) => {
        const keyModifier = Math.random() * 15;
        return (
            <button 
                disabled={index === currentIndexOfData ? true : false}
                key={keyModifier}
                onClick={(evt) => {
                    const index = +evt.target.value;
                    onChangeCurrentIndex(index, TYPES_OF_BUTTONS.INDEX);
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
                    onChangeCurrentIndex(null, TYPES_OF_BUTTONS.PREV);
                }} 
                name='prev-page'
                disabled={currentIndexOfData === 0 ? true : false}
                >
                Prev
            </button>
            {pageButtons}
            <button 
                onClick={() => {
                    onChangeCurrentIndex(null, TYPES_OF_BUTTONS.NEXT);
                }} 
                name='next-page'
                disabled={currentIndexOfData >= numberOfButtons - 1 || numberOfButtons <= 1 ? true : false}
                >
                Next
            </button>
        </div>
    )
}

TableButtons.propTypes = {
    numberOfButtons: PropTypes.number.isRequired,
    onChangeCurrentIndex: PropTypes.func.isRequired,
    currentIndexOfData: PropTypes.number.isRequired,
}