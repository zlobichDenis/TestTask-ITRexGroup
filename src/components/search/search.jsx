import React from "react";
import PropTypes from 'prop-types';

export const Search = (props) => {
    const { onChangeSubstringInSearch } = props;
    return (
        <input 
            className='search-input'
            placeholder='Seach By Name: '
            onChange={(evt) => {
                onChangeSubstringInSearch(evt.target.value)
            }} 
            type='text'>
        </input>
    )
};

Search.propTypes = {
    onChangeSubstringInSearch: PropTypes.func.isRequired,
}