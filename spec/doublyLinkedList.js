import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import DoublyLinkedList from '../src/doublyLinkedList'
import Node from '../src/node'

chai.use(chaiChange)

describe('DoublyLinkedList', () => {
  let myDLL
  beforeEach(() => {
    myDLL = new DoublyLinkedList()
  })

  it('exists', () => {
    expect(DoublyLinkedList).to.be.a('function')
  })

  context('getHeadNode()', () => {
    it('returns the first node in the list', () => {


        myDLL.insert('foo')
        myDLL.insert('bar')
        expect(myDLL.getHeadNode()).to.be.an.instanceof(Node)
    })
  })

  context('getTailNode()', () => {
    it('returns the last node in the list', () => {


        myDLL.insert('foo')
        myDLL.insert('bar')
        myDLL.insert('coo')
        expect(myDLL.getTailNode()).to.be.an.instanceof(Node)
    })
  })

  context('contains()', () => {
    context('when the element is in the list', () => {
      it('returns true', () => {


          myDLL.insert('foo')
          myDLL.insert('bar')
          expect(myDLL.contains('foo')).to.equal(true)
      })
    })
    context('when the element is not in the list', () => {
      it('returns false', () => {


          myDLL.insert('foo')
          myDLL.insert('bar')
          expect(myDLL.contains('fo')).to.equal(false)
      })
    })
  })

  context('find()', () => {
    context('when the element is in the list', () => {
      it('returns the element', () => {


          myDLL.insert('foo')
          myDLL.insert('bar')
          expect(myDLL.find('foo')).to.be.an.instanceof(Node)
      })
    })
    context('when the element is not in the list', () => {
      it('returns -1', () => {


          myDLL.insert('foo')
          myDLL.insert('bar')
          expect(myDLL.find('fo')).to.equal(-1)
      })
    })
  })

  context('insert()', () => {
    it('inserts node to the tail of the list', () => {


        myDLL.insert('foo')
        expect(myDLL.contains('foo')).to.equal(true)
        expect(myDLL.size()).to.equal(1)
    })
  })

  context('insertFirst()', () => {
    it('inserts node to the head of the list', () => {


        myDLL.insert('foo')
        myDLL.insert('bar')
        myDLL.insertFirst('apples')
        expect(myDLL.getHeadNode()._value).to.equal('apples')
    })
  })

  context('insertBefore("bananas", "apples")', () => {
    it('Inserts a node (with data "apples") before the first node containing "bananas"', () => {




        myDLL.insert('bananas')
        myDLL.insert('foo')
        myDLL.insertBefore('foo','apples')
        expect(myDLL.contains('apples')).to.equal(true)
    })
  })

  context('insertAfter("apples", "bananas")', () => {
    it('Inserts a node (with data "bananas") after the first node containing "apples"', () => {


        myDLL.insert('foo')
        myDLL.insert('apples')
        myDLL.insert('kiwi')
        myDLL.insertAfter('apples','bananas')
        expect(myDLL.contains('bananas')).to.equal(true)
    })
  })

  context('remove()', () => {
    it('Removes the tail node from the list', () => {


        myDLL.insert('foo')
        myDLL.insert('apples')
        myDLL.insert('kiwi')
        myDLL.remove()
        expect(myDLL.getTailNode()._value).to.equal('apples')
    })
  })

  context('removeFirst()', () => {
    it('removes the head node from the list', () => {


        myDLL.insert('foo')
        myDLL.insert('apples')
        myDLL.insert('kiwi')
        myDLL.removeFirst()
        expect(myDLL.getHeadNode()._value).to.equal('apples')
    })
  })

  context('isEmpty()', () => {
    context('when the list is not empty', () =>{
      it('returns false', () => {


          myDLL.insert('foo')
          expect(myDLL.isEmpty()).to.equal(false)
      })
    })

    context('when the list is empty', () =>{
      it('returns true', () => {


          expect(myDLL.isEmpty()).to.equal(true)
      })
    })
  })

  context('size()', () => {
    it('returns the size of the list (number of nodes)', () => {


        myDLL.insert('foo')
        myDLL.insert('apples')
        myDLL.insert('kiwi')
        expect(myDLL.size()).to.equal(3)
    })
  })

  context('clear()', () => {
    it('clears the list of all nodes/data', () => {


        myDLL.insert('foo')
        myDLL.insert('apples')
        myDLL.insert('kiwi')
        myDLL.clear()
        expect(myDLL.size()).to.equal(0)
    })
  })

})
