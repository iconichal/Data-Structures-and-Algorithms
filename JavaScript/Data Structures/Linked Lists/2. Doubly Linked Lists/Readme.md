# Doubly Linked DoublyLinkedLists

<details> <summary>Pre-requisites </summary>
- Big O Notation
- Data Structures Intro
- Singly Linked Lists

</details>

<details> <summary> Introduction </summary>
## Objective

- Construct a Doubly Linked List
- Compare and contrast Doubly Linked Lists and Singly Linked Lists
- Implement basic operations on a Doubly Linked List

## What is a Doubly Linked List?

![Doubly Linked Lists Representation](https://i.imgur.com/FZ3WYIv.png)

- **Almost** identical to Singly Linked Lists, except every node has **another** pointer, to the **previous** node!
- A tiny change structurally to each node, just one pointer pointing to previous node, but has a large impact on efficiency of certain operations.

## Comparisons with Singly Linked Lists

### More Memory === More Flexibility

- Doubly Linked Lists takes up more memory, it's **almost** always a trade-off!
</details>

<details> <summary>Pseudocodes </summary>
Here are the pseudocodes for all the functions or operations of Singly Linked Lists!

## Pushing

Adding a new **node** to the end of the Doubly Linked List!

- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise, set the next property on the tail to be the new node.
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created node
- Increment the length by one
- Return the doubly linked list

## Popping

Removing a **node** from the end of the Doubly Linked List!

- If there are no nodes in the list, return undefined
- Otherwise, store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous node
- Set the new Tail's next to null
- Decrement the length
- Return the value removed

## Shifting

Removing a **node** from the beginning of the Doubly Linked List!

- If there are no nodes in the list, return undefined
- Store the current head property in a variable
- If the length is one - set the head to be null, set the tail to be null
- Update the head to be the next of the old head
- Set the head's prev property to be null
- Set the old head's next to null
- Decrement the length of the list by 1
- Return the value of the node removed

## Unshifting

Adding a new **node** to the beginning of the Doubly Linked List!

- This function should accept a value
- Create a new node using the value passed to the function
- If the list is empty, set the head and tail to the newly created node
- Otherwise set the prev property on the head of the list to be the new node
- Set the next property on the new node to be the head property
- Update the head to be the new node
- Increment the length of the list by 1
- Return the linked list

## Get

Retrieve a **node** by its position in the Doubly Linked List!

- If the index is less than 0 or greater or equal to the length, return null
- If the index is less than or equal to half the length of the list
  - Loop through the list starting from the head and loop towards the middle
  - Return the node once it is found
- If the index is greater than half the length of the list
  - Loop through the list starting from the tail and loop towards the middle
  - Return the node once it is found

## Set

Changing the value of a **node** based on its position in the Doubly Linked List!

- The function should accept an index and a value
- Create a variable which is the result of the **get** method at the index passed to the function
  - If the get method returns a valid node, set the value of that node to be the value passed to the function
  - return true
- Otherwise, return false

## Insert

Adding a **node** to the Doubly Linked List at a specific position

- If the index is less than zero or greater than the length, return false
- If the index is the same as the length, push a new node to the end of the list
- If the index is 0, unshift a new node to the start of the list
- Otherwise, using the **get** method, access the node at the index-1
- Set the next and prev property on the correct nodes to link everything together
- Increment the length
- Return true

## Remove

Removing a **node** from the Doubly Linked List at a **specific** position

- If the index is less than zero or greater than the length, return undefined
- If the index is the same as the length-1, pop
- If the index is 0, shift
- Otherwise, using the **get** method to retrieve the item to be removed
- Update the next and prev properties to remove the found node from the list
- Decrement the length
- Return the value of the node removed
</details>

<details> <summary>Big O Complexity </summary>
- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)

    Technically searching is O(n/2), but that's still O(n)

- Access - O(n)
</details>

<details> <summary>Recap</summary>
- Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes
- Better than Singly Linked Lists for finding nodes and can be done in half the time!
- However, they do take up more memory considering the extra pointer
</details>
