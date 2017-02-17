import BinaryNode from './binarynode'

 export default class BinarySearchTree {
  constructor() {
    this.length = 0
    this.root = null
  }

  insert = (value) => {
    const newNode = new BinaryNode(value)
    let root = this.root

    if (!root) {
      this.root = newNode
      this.length += 1
      return
    }

    let currentNode = root

    while(currentNode){
      if(value < currentNode.getValue()){
        if(!currentNode.getLeftChild()){
          currentNode.setLeftChild(newNode)
          this.length += 1
          break
        }
        else {
          currentNode = currentNode.getLeftChild()
        }
      }
      else {
        if(!currentNode.getRightChild()){
          currentNode.setRightChild(newNode)
          this.length += 1
          break
        }
        else {
          currentNode = currentNode.getRightChild()
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

  inOrder = (node, passedInFunx) => {
    if(node){
      this.inOrder(node.getLeftChild(), passedInFunx)
      passedInFunx(node.getValue(), passedInFunx)
      this.inOrder(node.getRightChild(), passedInFunx)
    }
  }

  preOrder = (node, passedInFunx) => {
    if(node){
      passedInFunx(node.getValue())
      this.preOrder(node.getLeftChild(), passedInFunx)
      this.preOrder(node.getRightChild(), passedInFunx)

    }
  }

  postOrder = (node, passedInFunx) => {
    if(node){
      this.postOrder(node.getLeftChild(), passedInFunx)
      this.postOrder(node.getRightChild(), passedInFunx)
      passedInFunx(node.getValue())
    }
  }

  traverse = (order, passedInFunction) => {
    if(order.toLowerCase() === "inorder"){
      this.inOrder(this.getRoot(), passedInFunction)
    }

    if(order.toLowerCase() === "preorder"){
      this.preOrder(this.getRoot(), passedInFunction)
    }

    if(order.toLowerCase() === "postorder"){
      this.postOrder(this.getRoot(), passedInFunction)
    }
  }

  getRoot = () => {
    return this.root
  }

  count = () => {
    return this.length
  }
}
