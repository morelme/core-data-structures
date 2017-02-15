import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import PriorityQueue from '../src/priorityQueue'

chai.use(chaiChange)

describe('PriorityQueue', () => {
  'use strict'
  let myPQueue
  beforeEach(() => {
    myPQueue = new PriorityQueue()
  })

  it('exists', () => {
    expect(PriorityQueue).to.be.a('function')
  })

  context('enqueue()', () => {
    it('adds an element to the back of the queue.', () => {
    
      myPQueue.enqueue('bar', 10)
      expect(() => myPQueue.enqueue('foo', 100))
        .to.alter(() => myPQueue.length(), { from: 1, to: 2 })
    })
  })

  context('front()', () => {

    context('when the priority queue is not empty', () => {
      it('returns the front element (highest priority) in the queue.', () => {

        myPQueue.enqueue('foo', 2)
        myPQueue.enqueue('bar', 1)
        expect( myPQueue.front() ).to.equal('bar')
      })
    })

    context('when the priority queue is empty', () => {
      it('returns null', () => {

        expect( myPQueue.front() ).to.equal(null)
      })
    })
  })

  context('back()', () => {

    context('when the priority queue is not empty', () => {
      it('returns the back element (lowest priority) in the queue', () => {

        myPQueue.enqueue('foo', 2)
        myPQueue.enqueue('bar', 1)
        expect( myPQueue.back() ).to.equal('foo')
      })
    })

    context('when the priority queue is empty', () => {
      it('returns null', () => {

        expect( myPQueue.back() ).to.equal(null)
      })
    })
  })

    context('dequeue()', () => {
      context('when the priority queue is not empty', () => {
        it('returns and removes the front element (highest priority) in the queue', () =>{

          myPQueue.enqueue('foo', 2)
          myPQueue.enqueue('bar', 1)
          expect( myPQueue.dequeue() ).to.equal('bar')
        })
      })

      context('when the priority queue is not empty', () => {
        it('changes the size from 2 to 1', () => {

          myPQueue.enqueue('foo', 2)
          myPQueue.enqueue('bar', 1)
          expect(() =>myPQueue.dequeue()).to.alter(() => myPQueue.length(), { from: 2, to: 1 })
        })
      })

      context('when the priority queue is empty', () => {
        it('returns null', () => {


          expect( myPQueue.dequeue() ).to.equal(null)
        })
      })
    })

    context('isEmpty()', () => {
      context('when the priority queue is not empty.', () => {
        it('returns false', () => {

          myPQueue.enqueue('foo', 2)
          expect(myPQueue.isEmpty()).to.equal(false)
        })
      })

      context('when the priority queue is empty.', () => {
        it('returns true', () => {

          expect(myPQueue.isEmpty()).to.equal(true)
        })
      })
    })

    context('length()', () => {
      it('returns the number of elements in the queue', () => {

        myPQueue.enqueue('foo')
        myPQueue.enqueue('bar')
        expect( myPQueue.length() ).to.equal(2)
      })
    })
  })
