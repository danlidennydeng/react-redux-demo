Lesson 14
---------
npx create-react-app react-redux-demo

cd react-redux-demo

npm install redux react-redux

1. Javascript APPLICATION: the application is maintained separately in the Redux store, the application always subscribe to Redux Store for its state, however, it cannot change its state directly.

=> 2. ACTION: if the application wants to update the state, it has to emit or dispatch an action.

=> 3. REDUCER: once the action has been dispatched, the reducer then handles the action and update the current state.

=> 4. REDUX STORE: the newly changed state is kept in the redux store.

=> 1. APPLICATION: get the newly changed state since the application subscribes to the Redux Store.

This is how redux works...
=====================================================================================

Lesson 15 - Lesson 18

* Action(buyCake) : 
App.js => components/CakeContainer14.js => redux/index18.js => redux/cake/cakeAction15.js => redux/cake/cakeTypes15.js

* State(numOfCakes): 
App.js => components/CakeContainer14.js => redux/store17.js => redux/cake/cakeReducer16.js => redux/cake/cakeTypes15.js

This is the most basic pattern of how redux works in react. Please program starting from cakeTypes15.js and work backward.

mapStateToProps can be renamed to anything, but please keep the name it is.
===============================================================================

Lesson 19

React Redux + Hooks

React Redux pattern
* Action creators, reducers, provide the store and connect the components
* Components can access state and dispatch actions
* React Hooks
* React Redux v7.1
* subscribe to store and dispatch actions without connect()
==============================================================

Lesson 20

useSelector

is a hook the React Redux library provides which acts as a closed equivalent,  to the mapStateToProps.

However, it comes with a usage warning. Please see documentation.

==============================================================

Lesson 21

useDispatch

is a hook the React Redux library provides which acts as a closed equivalent,  to the mapDispatchToProps.

However, it comes with a usage warning. Please see documentation.

Please compare HooksCakeContainer20.js vs. CakeContainer14.js to see the differences. Other files remain the SAME.

Although two hooks might look simpler, I think it is safer to stay with the regular mapStateToProps, mapDispatchToProps, and connect(), instead of useSelector and useDispatch hooks.
=======================================================================

Lesson 22

multiple Reducers for cakes and ice creams

rootReducer22.js
=======================================================================

Lesson 23

npm install redux-logger

=======================================================================

Lesson 24

1. download redux-devtools browser extension in Chrome web store.
2. npm install --save redux-devtools-extension
3. import and apply in store24.js