export default class Stack {
  constructor() {
    this.size = 0
    this.elements = []
  }

  push = (elementToAdd) => {
    this.size += 1
    this.elements.push(elementToAdd)
  }

  pop = () => {
    if (this.isEmpty()) return null
    else {
      this.size -= 1
      return this.elements.pop()
    }
  }

  peek = () => this.isEmpty() ? null : this.elements[this.size - 1 ]

  isEmpty = () => this.size === 0

  length = () => this.size
}
