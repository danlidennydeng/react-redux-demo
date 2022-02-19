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

This is the most basic pattern of how redux works in react.

mapStateToProps can be renamed to anything, but please keep the name it is.

