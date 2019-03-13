import React, { Component } from 'react'

class EditItem extends Component {
  state = {
    title: this.props.text.title,
    body: this.props.text.body,
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


  render() {
    const { index, updateIndex, deleteIndex} = this.props;
    const { title, body } = this.state
    return (
      <div  className="item-container">
        <div className="edit-input-container">
          <input type="text" value={title} onChange={this.handleTitleInput}  placeholder=" title"/>
          <input type="text" value={body} onChange={this.handleBodyInput}  placeholder=" wtite here..."/>
        </div>
        <div className="edit-btns-container">
          <button onClick={() => {deleteIndex(index)}}><i className="fas fa-trash-alt"></i></button>
          <button onClick={() => {updateIndex(index, title, body)}}><i className="fas fa-save"></i></button>
        </div>
      </div>
    )
  }
}

export default EditItem