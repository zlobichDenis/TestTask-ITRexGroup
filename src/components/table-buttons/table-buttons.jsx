import React from "react";
import PropTypes from 'prop-types';
import { INCREMENT_CURRENT_INDEX, DECREMENT_CURRENT_INDEX, SET_CURRENT_INDEX } from "../../store/actions/current-index-actions";



export const TableButtons = (props) => {
    const { numberOfButtons, onChangeCurrentIndex, currentIndexOfData } = props;

    const pageButtons = new Array(numberOfButtons).fill(null).map((item, index) => {
        const keyModifier = Math.random() * 15;
        return (
            <button 
                className='page-button'
                disabled={index === currentIndexOfData ? true : false}
                key={keyModifier}
                onClick={(evt) => {
                    const index = +evt.target.value;
                    onChangeCurrentIndex(SET_CURRENT_INDEX, index);
                }} 
                value={index} 
                name={`button-page-${index}`}>{index + 1}
            </button>
        )
    })
    return (
        <div className='page-buttons'>
            <button
                className='page-button' 
                onClick={() => {
                    onChangeCurrentIndex(DECREMENT_CURRENT_INDEX, 1);
                }} 
                name='prev-page'
                disabled={currentIndexOfData === 0 ? true : false}
                >
                Prev
            </button>
            {pageButtons}
            <button 
                className='page-button'
                onClick={() => {
                    onChangeCurrentIndex(INCREMENT_CURRENT_INDEX, 1);
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