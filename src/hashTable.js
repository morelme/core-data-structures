import HashNode from "./hashNode"

export default class HashTable {
  constructor() {
    this.headNodes = []
    this.max = 10
    for (let i = 0; i < this.max; i++){
      this.headNodes.push(null)
    }
    this._length = 0
  }

  put = (key, value) => {
    if(typeof(key) === "undefined"){
      throw("Cannot insert with undefined key!")
    }
    const node = new HashNode(key, value)
    const hashIndex = this.hash(key)

    if(this.headNodes[hashIndex] === null){
      this.headNodes[hashIndex] = node
    } else {
      node.setNext(this.headNodes[hashIndex])
      this.headNodes[hashIndex] = node
    }

    this._length += 1
  }

  get = (key) => {
    const hashIndex = this.hash(key)
    let node = this.headNodes[hashIndex]
    if(node.getKey() === key){
      return node.getValue()
    }
    while (node.getNext() !== null)
    {
      if(node.getKey() == key){
        return node.getValue()
      }
      node = node.getNext()
    }
    return "key not found"
  }

  contains = (key) => {
    const hashIndex = this.hash(key)
    let node = this.headNodes[hashIndex]
    if(node === null){
      return false
    }
    if(node.getKey() === key){
      return true
    }
    while (node.getNext() !== null)
    {
      if(node.getKey() == key){
        return true
      }
      node = node.getNext()
    }
    return false
  }

  iterate = passedInFunction => {
    for (let i = 0; i < this.max; i++){
      if(this.headNodes[i]!== null){
        let currentNode = this.headNodes[i]
        passedInFunction(currentNode.getKey(), currentNode.getValue())
        while(currentNode.getNext() !== null){
          passedInFunction(currentNode.getKey(), currentNode.getValue())
          currentNode = currentNode.getNext()
        }
      }
    }
  }

  remove = (key) => {
    const hashIndex = this.hash(key)

    if(this.headNodes[hashIndex].getKey() == key){
      if(this.headNodes[hashIndex].getNext() === null){
        this.headNodes[hashIndex] = null
        this._length -= 1
        return
      } else {
        const temp = this.headNodes[hashIndex].getNext()
        this.headNodes[hashIndex].setNext(null)
        this.headNodes[hashIndex] = temp
        this._length -= 1
        return
      }
    }
    let currentNode = this.headNodes[hashIndex]
    while(currentNode.getNext() != null){
      if(currentNode.getNext().getKey() === key){
        let temp = currentNode.getNext()
        currentNode.setNext(currentNode.getNext().getNext())
        temp.setNext(null)
        this._length -= 1
        return
      }
      currentNode = currentNode.getNext()
    }
  }


  size = () => {
    return this._length
  }

  hash = (str) => {
    let hash = 0
    for (let i = 0; i < str.length; i++){
      hash = (hash << 5) - hash
      hash = hash + str.charCodeAt(i)
      hash = hash & hash
    }
    return Math.abs(hash % this.max)
    }

  }
