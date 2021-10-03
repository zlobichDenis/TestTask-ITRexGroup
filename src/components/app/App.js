import React from "react";
import PropTypes from 'prop-types';
import Table from "../table/table";
import Filters from "../filters/filters";
import Search from "../search/search";
import TableButtons from "../table-buttons/table-buttons";
import ShowContainer from "../show-container/show-container";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;

    this.state = {
      currentIndexOfData: 0,
  };

    this._numberOfPersonsPerPage = 20;
 }

 prepareDataForRendering(data) {
    let preparedData = [];
    const numberOfPersonsPerPage = 20;

    (function sliceArr(firstIndex = 0, secondIndex = 20) {
      if (firstIndex === data.length) {
        return;
      }
      preparedData.push(data.slice(firstIndex, secondIndex))
      firstIndex = secondIndex;
      secondIndex += numberOfPersonsPerPage;
      return sliceArr(firstIndex, secondIndex);
    })();

    return preparedData;
 }

  render() {
    const { data } = this.props;
    const preparedData = this.prepareDataForRendering(data);
    const { currentIndexOfData } = this.state

    return (
      <div className="App">
        <Search />
        <Filters />
        <Table data={preparedData[currentIndexOfData]}/>
        <TableButtons numberOfButtons={preparedData.length}/>
        <ShowContainer />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

