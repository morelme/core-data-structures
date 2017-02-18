export default class BinaryNode {
  constructor(value) {
    this._value = value
    this._rightChild = null
    this._leftChild = null
  }

  getRightChild = () => this._rightChild

  setRightChild = (right) => this._rightChild = right

  getLeftChild = () => this._leftChild

  setLeftChild = (left) => this._leftChild = left

  getValue = () => this._value

  setValue = (value) => this._value = value
}
