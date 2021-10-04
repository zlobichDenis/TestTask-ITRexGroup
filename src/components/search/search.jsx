import React from "react";
import PropTypes from 'prop-types';

export const Search = (props) => {
    const { onChangeSubstringInSearch } = props;
    return (
        <input 
            className='search-input'
            placeholder='Seach By Name: '
            onChange={(evt) => {
                setTimeout(onChangeSubstringInSearch(evt.target.value), 500)
                // onChangeSubstringInSearch(evt.target.value)
            }} 
            type='text'>
        </input>
    )
};

Search.propTypes = {
    onChangeSubstringInSearch: PropTypes.func.isRequired,
}