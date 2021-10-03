import React from "react";

export default class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.props = props;
    }

    render() {
        return (
            <select defaultValue='to-high' className="places__sorting-type" id="places-sorting">
                <option className="" value="popular">Popular</option>
                <option className="" value="to-high" >Price: low to high</option>
                <option className="" value="to-low">Price: high to low</option>
                <option className="" value="top-rated">Top rated first</option>
          </select>
        )
    }
}