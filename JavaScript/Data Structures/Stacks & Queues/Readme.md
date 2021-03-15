# Stacks and Queues

<details> <summary>Pre-requisites </summary>

- Big O Notation
- Data Structures Intro
- Singly Linked Lists
- Doubly Linked Lists

</details>

<details?> <summary> Introduction to Stacks</summary>

## Objective

- Define what a stack is
- Understand use cases for a stack
- Implement operations on a stack data structure

## What is a Stack?

![Stacks Representation](https://i.imgur.com/e8vXNgM.png)

- A **LIFO** data structure!
- The last element added to the stack will be the first element removed from the stack

## How is it used?

- Think about a stack of plates, or a stack of markers, or a stack of....anything
- As you pile it up, the last thing (or the topmost thing) is what gets removed first

## Where Stacks are used?

- Managing functions invocations - Call Stack in JS!
- Undo/Redo functionalities - like in photoshop!
- Routing (the history object) is treated like a stack - like in the browser!

# There's more than one way of implementing stack!

</details>

<details> <summary> Stacks Using Arrays </summary>
In the previous section, we discussed that there are multiple ways of implementing stack. It's an **abstract data structures**.

- One of the simplest way is to use Arrays!

First thing added in is the last thing removed!
Last thing added in is the first thing removed!

> Some programming languages comes with their own stack data type but that's not the case with JS

## Array Implementation

- Store data in array in such a way that is satisfies the LIFO or FILO concept of Stack
- Push/Pop: You can use `push` to add values to array, `pop` to remove the values
- Unshift/Shift: Alternatively, you can also use `unshift` to add values to array, `shift` to remove the values

If somebody goes and add something to the middle of the array or to the beginning or removes from the beginning, then it's quite not functioning as a stack anymore.

- With that in mind, you need to **stick with push/pop or unshift/shift** to replicate stack behaviour

## Stack using Array Limitations

- In Arrays(unshift/shift), adding to the beginning or removing from the beginning is not efficient since we need to re-index every element

If you care about the efficiency, then you probably don't want to use Arrays for a Stack. If you're working with ton of data and you need LIFO, then second implementation is what you need!

</details>

<details> <summary> Stacks Using Linked Lists </summary>
## Pushing

- The function should accept a value
- Create a new node with that value
- If there are no nodes in the stack, set the first and last property to be the newly created node
- If there is at least one node, create a variable that stores the current first property on the stack
- Reset the first property to be the newly created node
- Set the next property on the node to be the previously created variable
- Increment the size of the stack by 1

## Popping

- If there are no nodes in the stack, return null
- Create a temp variable to store the first property on the stack
- If there is only 1 node, set the first and last property to be null
- If there is more than one node, set the first property to be the next property on the current first
- Decrement size by 1
- Return the value of removed node
</details>

<details> <summary> Big O Complexity </summary>
- **Insertion - O(1)**
- **Removal - O(1)**
- Searching - O(n)
- Access - O(n)
</details>

<details> <summary> Recap </summary>
- Stacks are **LIFO** data structure where the last value in is always the first one out
- Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
- They are not a built-in data structure in JS, but are relatively simple to implement
</details>
