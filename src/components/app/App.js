import React, { Component } from "react";
import PropTypes from 'prop-types';
import Table from "../table/table";
import Filters from "../filters/filters";
import Search from "../search/search";
import TableButtons from "../table-buttons/table-buttons";
import ShowContainer from "../show-container/show-container";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.props = props
 }

  render() {
    const { data } = this.props;
    return (
      <div className="App">
        <Search />
        <Filters />
        <Table data={data}/>
        <TableButtons />
        <ShowContainer />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

