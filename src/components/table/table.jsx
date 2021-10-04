import React from "react";
import PropTypes from 'prop-types';
import Row from "../row/row";

export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentIndexOfData: 0,
        };

        this.props = props;
    }

    render() {
        const { data, onChangeActivePerson, activeFieldOfSort, onChangeActiveFieldOfSort } = this.props;
        const { field: activeFieldTitle, direction } = activeFieldOfSort;

        const rowsOfTable = data.map((person) => {
            const keyModifier = Math.random() * 10;
            return <Row onChangeActivePerson={() => onChangeActivePerson(person)} key={person.id + keyModifier} person={person}/>
        });

        const headRow = Object.keys(data[0]).map((key) => {
            const activeStyle = activeFieldTitle === key && direction === true ? {color:'red'} : {color:'blue'};
            if (key === 'adress') {
                return (
                    <th key={`head-row__state`}>
                        <button 
                            style={activeFieldTitle === 'state' && direction ? {color:'red'} : {color:'blue'}}
                            onClick={(evt) => {
                                const sortField = 'state';
                                const isDecrease = activeFieldTitle === 'state' ? !direction : true;
                                const fieldOfSort = {
                                    field: sortField,
                                    direction: isDecrease,
                                }
                                onChangeActiveFieldOfSort(fieldOfSort)
                            }}
                            key={`sort-button-${key}`} 
                            value='state'>To top/down
                        </button>state
                    </th>
                )
            } else if (key === 'description') {
                return undefined;
            }
            return (
                <th key={`head-row__${key}`}>
                    <button 
                        style={activeStyle} 
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
                        value={key}>To top/down
                    </button>{key}
                </th>
            )
        })

        return (
            <table style={{width:'100%', height: '400px'}} border="1">
                <thead>               
                    <tr>
                        {headRow}
                    </tr>
                </thead>
                {rowsOfTable}
            </table>
        )
    }
}

Table.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChangeActivePerson: PropTypes.func.isRequired,
    activeFieldOfSort: PropTypes.object.isRequired,
    onChangeActiveFieldOfSort: PropTypes.func.isRequired,
}