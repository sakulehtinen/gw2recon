import React, { Component } from 'react'
import '../css/GetLatestItems.css'
import axios from 'axios'

class GetLatestItems extends Component {

  constructor () {
    super() 
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      itemName: ''
    }
  }

  handleClick () {
    axios.get('https://api.guildwars2.com/v2/items?ids=12345')
    .then(response => this.setState({itemName: response.data[0].name}))
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick={this.handleClick}>
          Click Me
        </button>
        <p>{this.state.itemName}</p>
      </div>
    )
  }
}
export default GetLatestItems