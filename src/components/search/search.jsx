import React from "react";

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        const { onChangeSubstringInSearch } = this.props;
        return (
            <input onBlur={(evt) => onChangeSubstringInSearch(evt.target.value)} type='text'></input>
        )
    }
}