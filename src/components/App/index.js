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
    display: 'block'
  }

  updateSearch = (event) => {
    console.log('updateSearch')
    event.preventDefault()
    if(this.state.searchValue.length > 0) {
      const updatedData = this.state.data.filter(card => card.name == this.state.searchValue)
    this.setState({
      data: updatedData
    })
    } else {
      this.setState({
        data: data
      })
    }
  }

  updateSearch = (event) => {
    console.log('updateSearch')
    event.preventDefault()
    axios.get('https://api.github.com/search/repositories?q='+ this.state.searchValue +'&sort=stars&order=desc')
    .then(res => {
      const updatedData = res.data.items
      console.log(updatedData)
      this.setState({
        data: updatedData
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

  render() {
    const counter = this.state.data.length

    return (
      <div id="app">
        <Search value={this.state.searchValue} updateInputValue={this.updateInputValue} updateSearch={this.updateSearch} value={this.state.searchValue} />
        <Feedback counter={counter} value={this.state.searchValue} state={this.state}/>
        {this.state.display === 'block' && <ResultsBlocks data={this.state.data} handleDisplayBlock={this.handleDisplayBlock} handleDisplayList={this.handleDisplayList} />}
        {this.state.display === 'list' && <ResultsList data={this.state.data} handleDisplayBlock={this.handleDisplayBlock} handleDisplayList={this.handleDisplayList} />}
      </div>
    )
  }
}
