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
      currentActivePerson: null,
  };

    this._numberOfPersonsPerPage = 20;

    this.onChangeActivePerson = this.onChangeActivePerson.bind(this);
    this.onChangeCurrentIndex = this.onChangeCurrentIndex.bind(this);
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

  onChangeActivePerson(person) {
    this.setState({
      currentActivePerson: person,
    })
 }

  onChangeCurrentIndex(index, typeOfButton) {
    switch (typeOfButton) {
      case 'NEXT':
        this.setState(prevState => ({
          currentIndexOfData: prevState.currentIndexOfData + 1,
        }))

        break;

      case 'PREV':
        this.setState(prevState => ({
          currentIndexOfData: prevState.currentIndexOfData -1,
        }))
        break;

      default:
        this.setState({
          currentIndexOfData: index,
        })
    }

 }

  render() {
    const { data } = this.props;
    const preparedData = this.prepareDataForRendering(data);
    const { currentIndexOfData, currentActivePerson } = this.state

    return (
      <div className="App">
        <Search />
        <Filters />
        <Table onChangeActivePerson={this.onChangeActivePerson} data={preparedData[currentIndexOfData]}/>
        <TableButtons currentIndexOfData={currentIndexOfData} onChangeCurrentIndex={this.onChangeCurrentIndex} numberOfButtons={preparedData.length}/>
        {currentActivePerson ? <ShowContainer person={currentActivePerson} /> : null }
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

