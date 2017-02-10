import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe('HashTable', () => {
  'use strict'

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('put()', () => {
    it('adds key-value pair to the hash table', () => {
      const myHashTable = new HashTable()

      myHashTable.put("name", "Zanzibar")
      expect(myHashTable.get("name"))
        .to.equal("Zanzibar")
    })
  })

  context('get()', () => {
    it('returns the data associated with key', () => {
      const myHashTable = new HashTable()

      myHashTable.put("name", "Zanzibar")
      expect(myHashTable.get("name"))
        .to.equal("Zanzibar")
    })
  })

  context('contains()', () => {
    context('when the hashtable contains the key', () =>{
      it('returns true', () => {
        const myHashTable = new HashTable()

        myHashTable.put("name", "Zanzibar")
        expect(myHashTable.contains("name"))
          .to.equal(true)
      })
    })
    context('when the hashtable does not contain the key', () =>{
      it('returns false', () => {
        const myHashTable = new HashTable()

        myHashTable.put("name", "Zanzibar")
        expect(myHashTable.contains("rainbows"))
          .to.equal(false)
      })
    })
  })

  context.only('iterate()', () => {
    it('takes a callback function and passes it each key and value in sequence', () => {
      const myHashTable = new HashTable()
      const print = (key, value) => {
        console.log("key: ", key)
        console.log("value: ", value)
      }

      myHashTable.put("name", "Zanzibar")
      myHashTable.put("food", "bagels")
      //Not sure how to test this so we set up a test to make it fail on purpose
      expect(myHashTable.iterate(print(key, value))).to.equal(true)
    })
  })
  context('remove()', () => {
    it('removes a key-value pair by key', () => {
      const myHashTable = new HashTable()

      myHashTable.put("name", "Zanzibar")
      myHashTable.put("food", "bagels")
      myHashTable.remove('food')
      expect(myHashTable.contains('food')).to.equal(false)
    })
  })

  context('size()', () => {
    it('returns the number of key-value pairs in the hash table', () => {
      const myHashTable = new HashTable()

      myHashTable.put("name", "Zanzibar")
      myHashTable.put("food", "bagels")
      expect(myHashTable.size()).to.equal(2)
    })
  })


  })
