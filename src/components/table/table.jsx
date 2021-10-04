import React from "react";
import PropTypes from 'prop-types';
import { Row } from "../row/row";


export const Table = (props) => {
    const { data, onChangeActivePerson, activeFieldOfSort, onChangeActiveFieldOfSort } = props;
    const { field: activeFieldTitle, direction } = activeFieldOfSort;

    const rowsOfTable = data.map((person) => {
        const keyModifier = Math.random() * 10;
        return <Row onChangeActivePerson={() => onChangeActivePerson(person)} key={person.id + keyModifier} person={person}/>
    });

    const headRow = Object.keys(data[0]).map((key) => {
        const activeStyle = activeFieldTitle === key && direction === true ? {transform: 'rotate(180deg)'} : {};
        if (key === 'adress') {
            return (
                <th key={`head-row__state`}>
                    <button 
                        className='sort-button'
                        onClick={() => {
                            const sortField = 'state';
                            const isDecrease = activeFieldTitle === 'state' ? !direction : true;
                            const fieldOfSort = {
                                field: sortField,
                                direction: isDecrease,
                            }
                            onChangeActiveFieldOfSort(fieldOfSort)
                        }}
                        key={`sort-button-${key}`} 
                        value='state'> 
                            <img 
                                style={activeFieldTitle === 'state' && direction === true ? {transform: 'rotate(180deg)'} : {}} 
                                alt='sort'
                                className='sort-button__img' src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/50/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-8.png"/>
                    </button>state 
                </th>
            )
        } else if (key === 'description') {
            return undefined;
        }
        return (
            <th key={`head-row__${key}`}>
                <button 
                    className='sort-button'
                    onClick={(evt) => {
                        const sortField = evt.target.value;
                        const isDecrease = activeFieldTitle === key ? !direction : true;
                        const fieldOfSort = {
                                field: sortField,
                                direction: isDecrease,
                            }
                        onChangeActiveFieldOfSort(fieldOfSort)
                        }} 
                    key={`sort-button-${key}`} 
                    value={key}>
                        <img alt='sort' style={activeStyle} className='sort-button__img' src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/50/000000/external-arrow-arrows-those-icons-lineal-color-those-icons-8.png"/>
                </button>{key}
            </th>
        )
    })

    return (
        <table className="container">
            <thead>               
                <tr>
                    {headRow}
                </tr>
            </thead>
            {rowsOfTable}
        </table>
    )
}

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeActivePerson: PropTypes.func.isRequired,
    activeFieldOfSort: PropTypes.object.isRequired,
    onChangeActiveFieldOfSort: PropTypes.func.isRequired,
}