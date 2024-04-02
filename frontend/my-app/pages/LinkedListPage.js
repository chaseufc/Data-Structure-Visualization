import React, { useState } from 'react';
import './LinkedListPage.css';

// Define Node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Define LinkedList class
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  deleteNode(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current) {
      if (current.value === value) {
        prev.next = current.next;
        if (current === this.tail) {
          this.tail = prev;
        }
        this.length--;
        return;
      }
      prev = current;
      current = current.next;
    }
  }
}

// React component for the LinkedList
function LinkedListComponent() {
  const [linkedList, setLinkedList] = useState(new LinkedList());
  const [newValue, setNewValue] = useState('');

  const addNode = () => {
    if (!newValue.trim()) return; // Prevent adding empty values

    if (linkedList.length == 0) {
      linkedList.addToTail(newValue);
    } else {
      linkedList.addToTail(newValue);
    }
    setLinkedList(linkedList);
    setNewValue('');
  };


  const deleteNode = () => {
    if (!newValue.trim()) return; // Prevent deleting empty values
    linkedList.deleteNode(newValue);
    setLinkedList(linkedList);
    setNewValue('');
  };


  return (
    <div className="linked-list-container">
      <h2 className="linked-list-title">Linked List Simulator</h2>
      <input
        type="text"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <div className="button-container">
        <button onClick={addNode}>Add</button>
        <button onClick={deleteNode}>Delete</button>
      </div>
      {linkedList.head && (
        <div className="nodes-list">
          {[...Array(linkedList.length)].map((_, index) => {
            let currentNode = linkedList.head;
            for (let i = 0; i < index; i++) {
              currentNode = currentNode.next;
            }
            return (
              <div key={index}>
                <div className={`node ${index === 0 ? 'head' : ''} ${index === linkedList.length - 1 ? 'tail' : ''}`}>
                  <span className="node-value">{currentNode.value}</span>
                  {currentNode.next && <div className="line" style={{ height: '60px' }}></div>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LinkedListComponent;