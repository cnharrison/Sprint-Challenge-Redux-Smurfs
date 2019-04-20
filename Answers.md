1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map, .filter, .find
object.assign()

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions send data from our code to the store
reducers specify how the application's state changes in response to actions. it is made up of pure functions
store holds the immutable state tree of our application


1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state is the state of all of our components together, component state is the state of one component, such as form with controlled input

1.  What is middleware?
connects a piece of software, in this case a redux action and a redux reducer. middleware in redux allows us to trigger things between the moment an action is dispatched and the moment it reaches therreducer

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is a middleware lets us perform async operations while using redux. now we can dispatch multiple actions like FETCH_START, FETCH_SUCCESS, from a single action creator function. now our action creators can return functions rather than just objects (sort of)


1.  Which `react-redux` method links up our `components` with our `redux store`?
connect()
