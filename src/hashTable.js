export default class HashTable {
  constructor() {
    this.storage = []
    this._length = 0
    this.max = 10
  }

  put = (key, value) => {
    if(typeof(key) === "undefined"){
      throw("Cannot insert with undefined key!")
    }
    const hashIndex = this.hash(key, this.max)
    this.storage[hashIndex] = value
    this._length += 1
  }

  get = (key) => {
    const hashIndex = this.hash(key, this.max)
    return this.storage[hashIndex]
  }

  contains = (key) => {
    if(this.get(key)){
      return true
    }
    return false
  }

  iterate = passedInFunction => {
    for (let i = 0; i < this.max; i++){
      if(this.storage[i] !== undefined){
        //unhash key - create unhash function?
        //passing it 1 as a placeholder to avoid compilation error
        passedInFunction(/*unhashed key*/ 1, this.storage[i])
      }
    }
  }

  remove = (key) => {
    const hashIndex = this.hash(key, this.max)
    const value = this.storage[hashIndex]
    this.storage.splice(hashIndex, 1)
    this._length -= 1
  }

  size = () => {
    return this._length
  }

  hash = (str, max) => {
    let hash = 0
    for (let i = 0; i < str.length; i++){
      hash = (hash << 5) - hash
      hash = hash + str.charCodeAt(i)
      hash = hash & hash
    }
    return Math.abs(hash % max)
  }

  }
