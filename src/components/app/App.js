import React from "react";
import PropTypes from 'prop-types';
import Table from "../table/table";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.props = props
 }

  render() {
    const { data } = this.props;
    return (
      <div className="App">
        <Table data={data}/>
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

