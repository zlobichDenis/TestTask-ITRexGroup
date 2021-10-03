import React from "react";

export default class Column extends React.Component {
    constructor(props){
        super(props)

        this.props = props;
    }

    render() {
        return (
            <td>Some column</td>
        )
    }
}