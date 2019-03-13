import React, { Component } from 'react'

class Form extends Component {
  state = {
    title: '',
    body: '',
  }

  handleTitleInput = (event) => {
    this.setState({
      title:event.target.value,
    })
  }

  handleBodyInput = (event) => {
    this.setState({
      body:event.target.value,
    })
  }

  handleClick = () => {
    const { title, body } = this.state;
    const { addToList } = this.props;
    addToList(title,body)
    this.setState({
      title: '',
      body: '',
    })
  }

  render() {
    const { title,body } = this.state;
    return (
      <div className="form-container">
        <input type="text" value={title} onChange={this.handleTitleInput} placeholder=" title"/>
        <input type="text" value={body} onChange={this.handleBodyInput}  placeholder=" wtite here..."/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  }
}

export default Form
