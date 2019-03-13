import React, { Component } from 'react'
import './Todo.css'

class Item extends Component {

  render() {
    const {text, index, upIndex, downIndex, editIndex, deleteIndex} = this.props;
    return (
      <div className="item-container">
        <div className="text-container">
          <p>{text.title}</p>
          <p>{text.body}</p>
        </div>
        <div className="btns-contsiner">
          <button onClick={() => {upIndex(index)}}><i className="fas fa-angle-up"></i></button>
          <button onClick={() => {downIndex(index)}}><i className="fas fa-angle-down"></i></button>
          <button onClick={() => {deleteIndex(index)}}><i className="fas fa-trash-alt"></i></button>
          <button onClick={() => {editIndex(index)}}><i className="fas fa-edit"></i></button>
        </div>
      </div>
    )
  }
}

export default Item