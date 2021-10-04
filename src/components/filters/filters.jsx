import React from "react";
import PropTypes from 'prop-types';

export default class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        const { availableStates, onChangeActiveFilter } = this.props;
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
}

Filters.propTypes = {
    availableStates: PropTypes.object.isRequired,
    onChangeActiveFilter: PropTypes.func.isRequired,
}