import React from "react";
import PropTypes from 'prop-types';


export const Filters = (props) => {
    const { availableStates, onChangeActiveFilter } = props;
    const options = Array.from(availableStates).map((state) => {
        return (
            <option 
                key={`state-${state}`} 
                className="" 
                value={state}>
            {state}
            </option>
        )
    })
    
    return (
        <select                    
            onChange={(evt) => {
                const activeFilter = evt.target.value;
                onChangeActiveFilter(activeFilter)
            }}  
            defaultValue='to-high' 
            className="places__sorting-type" 
            id="places-sorting">
            <option 
                key={`state-${'None'}`} 
                className="" 
                value={'NONE'}>
                NONE
            </option>
            {options}
        </select>
    )
}

Filters.propTypes = {
    availableStates: PropTypes.object.isRequired,
    onChangeActiveFilter: PropTypes.func.isRequired,
}