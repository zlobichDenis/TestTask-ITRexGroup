import React from "react";

export default class Table extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <table border="1">
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>State</th>
                </tr>
                <tr>
                    <td>34,5</td>
                    <td>3,5</td>
                    <td>36</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>35,5</td>
                    <td>4</td>
                    <td>36⅔</td>
                    <td>23–23,5</td>
                </tr>
                <tr>
                    <td>36</td>
                    <td>4,5</td>
                    <td>37⅓</td>
                    <td>23,5</td>
                </tr>
            </table>
        )
    }
}