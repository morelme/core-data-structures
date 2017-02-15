import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import Queue from '../src/queue'
import Node from '../src/node'

chai.use(chaiChange)

describe('Queue', () => {
  'use strict'
  let myQueue
  beforeEach(() => {
    myQueue = new Queue()
  })

  it('exists', () => {
    expect(Queue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue.', () => {

      expect(() => myQueue.enqueue('foo'))
        .to.alter(() => myQueue.length(), { from: 0, to: 1 })
    })
  })

  context('dequeue()', () => {

    context('when the queue is not empty', () => {
      it('removes and returns the front element', () => {

        myQueue.enqueue('foo')
        myQueue.enqueue('bar')
        expect(myQueue.dequeue()).to.be.an.instanceof(Node)
      })
    })

    context('when the queue is empty', () => {
      it('returns null', () => {

        expect(myQueue.dequeue()).to.equal(null)
      })
    })
  })


  context('front()', () => {
    context('when the queue is not empty', () => {
      it('returns the front element', () => {

        myQueue.enqueue('foo')
        myQueue.enqueue('bar')
        expect(myQueue.front()).to.be.an.instanceof(Node)
      })
    })

    context('when the queue is empty', () => {
      it('returns null', () => {

        expect(myQueue.front()).to.equal(null)
      })
    })
  })


  context('back()', () => {
    context('when the queue is not empty', () => {
      it('returns back element.', () => {

        myQueue.enqueue('foo')
        myQueue.enqueue('bar')
        expect(myQueue.back()).to.be.an.instanceof(Node)
      })
    })

    context('when the queue is empty', () => {
      it('returns null', () => {

        expect(myQueue.back()).to.equal(null)
      })
    })
  })

  context('isEmpty()', () => {
    context('when the queue is not empty', () => {
      it('returns false', () => {

        myQueue.enqueue('foo')
        myQueue.enqueue('bar')
        expect( myQueue.isEmpty() ).to.equal(false)
      })
    })

    context('when the queue is empty', () => {
      it('returns true on a empty queue', () => {

        expect( myQueue.isEmpty() ).to.equal(true)
      })
    })
  })

  context('length()', () => {
    it('returns the number of elements in the queue', () => {

      myQueue.enqueue('foo')
      myQueue.enqueue('bar')
      expect( myQueue.length() ).to.equal(2)
    })
  })

})
