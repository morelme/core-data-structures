export default class BinaryNode {
  constructor(value) {
    this._value = value
    this._rightChild = null
    this._leftChild = null
  }

  getRightChild = () =>{
    return this._rightChild
  }

  getLeftChild = () =>{
    return this._leftChild
  }

  getValue = () => {
    return this._value
  }
}
