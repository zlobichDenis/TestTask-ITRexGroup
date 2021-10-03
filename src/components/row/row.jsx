import React from "react";
import PropTypes from 'prop-types';
import Column from "../column/column";

export default class Row extends React.Component {
    constructor(props) {
        super(props);

        this.props = props
    }

    render() {
        return (
            <tbody>
                <tr>
                    <Column />
                </tr>
            </tbody>
        )
    }

}