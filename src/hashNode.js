export default class HashNode{
  constructor(key, value) {
    this._key = key
    this._value = value
    this.next = null

  }

  getValue = () => {
    return this._value
  }

  setValue = (value) => {
    this._value = value
  }

  getKey = () => {
    return this._key
  }

  getNext = () => {
    return this.next
  }

  setNext = (next) => {
    this.next = next
  }
}
