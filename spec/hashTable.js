import chai, { expect } from 'chai'
import chaiChange from 'chai-change'
import HashTable from '../src/hashTable'

chai.use(chaiChange)

describe('HashTable', () => {
  let myHashTable
  beforeEach(() => {
    myHashTable = new HashTable()
  })

  it('exists', () => {
    expect(HashTable).to.be.a('function')
  })

  context('put()', () => {
    it('adds key-value pair to the hash table', () => {

      myHashTable.put("name", "Zanzibar")
      expect(myHashTable.get("name"))
        .to.equal("Zanzibar")
    })
  })

  context('get()', () => {
    it('returns the data associated with key', () => {

      myHashTable.put("name", "Zanzibar")
      expect(myHashTable.get("name"))
        .to.equal("Zanzibar")
    })
  })

  context('contains()', () => {
    context('when the hashtable contains the key', () =>{
      it('returns true', () => {


        myHashTable.put("name", "Zanzibar")
        expect(myHashTable.contains("name"))
          .to.equal(true)
      })
    })
    context('when the hashtable does not contain the key', () =>{
      it('returns false', () => {


        myHashTable.put("name", "Zanzibar")
        expect(myHashTable.contains("rainbows"))
          .to.equal(false)
      })
    })
  })

  context('iterate()', () => {
    it('takes a callback function and passes it each key and value in sequence', () => {

      const addMomElement = element => {
        myHashTable.put(element + 'mom')
      }

      myHashTable.put("name", "Zanzibar")
      myHashTable.put("food", "bagels")
      myHashTable.iterate(addMomElement)

      expect(myHashTable.size()).to.equal(6)
    })
  })

  context('remove()', () => {
    it('removes a key-value pair by key', () => {

      myHashTable.put("name", "Zanzibar")
      myHashTable.put("food", "bagels")
      myHashTable.remove('food')
      expect(myHashTable.contains('food')).to.equal(false)
    })
  })

  context('size()', () => {
    it('returns the number of key-value pairs in the hash table', () => {

      myHashTable.put("name", "Zanzibar")
      myHashTable.put("food", "bagels")
      expect(myHashTable.size()).to.equal(2)
    })
  })


  })
