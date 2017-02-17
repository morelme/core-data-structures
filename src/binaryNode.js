export default class BinaryNode {
  constructor(value) {
    this._value = value
    this._rightChild = null
    this._leftChild = null
  }

  getRightChild = () =>{
    return this._rightChild
  }

  setRightChild = (right) => {
    this._rightChild = right
  }

  getLeftChild = () =>{
    return this._leftChild
  }

  setLeftChild = (left) => {
    this._leftChild = left
  }

  getValue = () => {
    return this._value
  }

  setValue = (value) => {
    this._value = value
  }
}
