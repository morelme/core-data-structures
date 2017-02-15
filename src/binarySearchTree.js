import BinaryNode from './binarynode'

export default class BinarySearchTree {
  constructor() {
    this.length = 0
    this.root = null
  }

  insert = (value) => {
    const node = new BinaryNode(value)
    if (this.count() === 0) {
      this.root = node
      this.length += 1
    }
    else {
      let currentNode = this.root
      for(let i = 0; i < this.count(); i++){
        if(currentNode._value < node._value){
          if(currentNode._rightChild === null){
            currentNode._rightChild = node
            this.length += 1
            return
          }
          currentNode = this[i]._rightChild
        }
        if(currentNode._value > node._value){
          if(currentNode._leftChild === null){
            currentNode._leftChild = node
            this.length += 1
            return
          }
          currentNode = this[i]._leftChild
        }
      }
    }
  }

  search = (value) => {
    if(this.count() === 0){
      return null
    }
    let currentNode = this.root
    for(let i = 0; i < this.count(); i++){
      if(currentNode._value === value){
        return currentNode
      }
      if(currentNode._value < value){
        currentNode = currentNode._rightChild
      }
      if(currentNode._value > value){
        currentNode = currentNode._leftChild
      }
    }
    return null
  }

  remove = (value) => {
    if(this.count() === 0){
      return null
    }
    const node = new BinaryNode(value)
    if(this.root._value === value)
    {
      if(this.count() === 1){
        this.root = null
        this.length -= 1
        return
      }
      else {
        this.root._rightChild = null
        this.root = this.root._leftChild
        this.length -= 1
        return
      }
    }
    let currentNode = this.root
    for(let i = 0; i < this.count(); i++){
      if(currentNode._leftChild === node){
        currentNode._leftChild = null
        this.length -= 1
        return
      }
      if(currentNode._rightChild === node){
        currentNode._righttChild = null
        this.length -= 1
        return
      }
    }
    return null
  }

  count = () => {
    return this.length
  }
}
