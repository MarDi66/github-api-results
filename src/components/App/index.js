/**
 * Import
 */
import React from 'react';
import axios from 'axios';

/**
 * Local import
 */
import Search from "src/components/Search";
import Feedback from "src/components/Feedback";
import ResultsBlocks from "src/components/ResultsBlocks";
import ResultsList from "src/components/ResultsList";
import ConditionalButton from "src/components/ConditionalButton";
import WelcomeFeedback from "src/components/WelcomeFeedback";
import data from 'src/data/data';

// Styles et assets
import './app.sass';

/**
 * Code
 */

export default class App extends React.Component {
  state=  {
    data: [],
    searchValue: '',
    display: 'block',
    isLoading: false,
    gridPositive: true,
    listPositive: false,
    filteredData: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/search/repositories?q=react&sort=stars&order=desc')
    .then(res => {
      const baseData = res.data.items
      this.setState({
        data: baseData
      })
    })
  }

  updateSearch = (event) => {
    event.preventDefault()
    axios.get('https://api.github.com/search/repositories?q='+ this.state.searchValue +'&sort=stars&order=desc', this.setState({isLoading: true}))
    .then(res => {
      const updatedData = res.data.items
      this.setState({
        data: updatedData,
        isLoading: false
      })
    })
  }

  updateInputValue = (event) => {
      this.setState({
        searchValue: event.currentTarget.value
      })
  }

  handleDisplayBlock = () => {
    this.setState({
      display: 'block'
    })
  }

  handleDisplayList = () => {
    this.setState({
      display: 'list'
    })
  }

  /*handlePointerEnter = (cardId) => {
    return () => {
      document.querySelector('.hiddenDiv').style.display = 'unset'
      const filteredData = this.state.data.filter(card => card.id == cardId)
      this.setState({
        filteredData
      })
    }
  }

  handlePointerLeave = () => {
    document.querySelector('.hiddenDiv').style.display = 'none'
  }*/

  render() {
    const counter = this.state.data.length

    return (
      <div id="app">

        <Search value={this.state.searchValue} updateInputValue={this.updateInputValue} updateSearch={this.updateSearch} value={this.state.searchValue} load={this.state.isLoading} />

        {this.state.searchValue.length < 1 && <WelcomeFeedback handleDisplayBlock={this.handleDisplayBlock} handleDisplayList={this.handleDisplayList} display={this.state.display} />}
        {this.state.searchValue.length > 0 && <Feedback counter={counter} value={this.state.searchValue} state={this.state} handleDisplayBlock={this.handleDisplayBlock} handleDisplayList={this.handleDisplayList} display={this.state.display} />}

        {this.state.display === 'block' && <ResultsBlocks data={this.state.data} handleDisplayBlock={this.handleDisplayBlock} handleDisplayList={this.handleDisplayList} filteredData={this.state.filteredData} />}
        {this.state.display === 'list' && <ResultsList data={this.state.data} handleDisplayBlock={this.handleDisplayBlock} handleDisplayList={this.handleDisplayList} />}
      </div>
    )
  }
}
