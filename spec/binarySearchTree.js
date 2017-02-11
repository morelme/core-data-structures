import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import BinarySearchTree from '../src/BinarySearchTree'
import BinaryNode from '../src/binarynode'

chai.use(chaiChange)

describe('BinarySearchTree', () => {
  'use strict'

  it('exists', () => {
    expect(BinarySearchTree).to.be.a('function')
  })

  context('insert()', () => {
    context('when the tree is empty', () => {
      it('inserts a node with the specified value at the root', () => {
          const myBST = new BinarySearchTree()

          myBST.insert(4)
          expect(myBST.root._value).to.be.equal(4)
      })
    })
    context('when the tree is not empty and the value is less than the root', () => {
      it('inserts a node as the left child of the root', () => {
          const myBST = new BinarySearchTree()

          myBST.insert(4)
          myBST.insert(1)
          expect(myBST.root._leftChild._value).to.be.equal(1)
      })
    })
    context('when the tree is not empty and the value is greater than the root', () => {
      it('inserts a node as the right child of the root', () => {
          const myBST = new BinarySearchTree()

          myBST.insert(4)
          myBST.insert(6)
          console.log("myBST", myBST)
          expect(myBST.root._rightChild._value).to.be.equal(6)
      })
    })
  })

  context('search()', () => {
    context('when the node is not found', () => {
      it('returns null', () => {
          const myBST = new BinarySearchTree()

          myBST.insert(4)
          expect(myBST.search(3)).to.be.equal(null)
      })
    })
    context('when the node is found', () => {
      it('returns the node object', () => {
          const myBST = new BinarySearchTree()

          myBST.insert(4)
          expect(myBST.search(4)._value).to.be.equal(4)
      })
    })
  })

  context('remove()', () => {
    context('when the node is not found', () => {
      it('returns null', () => {
          const myBST = new BinarySearchTree()

          myBST.insert(4)
          expect(myBST.remove(3)).to.be.equal(null)
      })
    })
    context('when the node is found', () => {
      it('removes the value\'s node from the tree', () => {
          const myBST = new BinarySearchTree()

          myBST.insert(4)
          myBST.remove(4)
          expect(myBST.count()).to.be.equal(0)
      })
    })
  })

  context('traverse()', () => {
    //What is this supposed to do/how do we test it?
  })

  context.only('count()', () => {
    it('return the number of nodes in the tree', () => {
          const myBST = new BinarySearchTree()

          myBST.insert(4)
          myBST.insert(3)
          expect(myBST.count()).to.be.equal(2)
    })
  })

})
