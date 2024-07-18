Note:

--> To provide redux store to the react application we need to import "Provider" component from the react-redux library. We do this by wrapping our component by the Provider component and also passing store as a prop.

--> We dispatch an action from the component by following three steps:
a) first define a function mapStateToProps(), this gets state of redux app as a parameter and returns an object.
b) second define a function mapDispatchToProps(), this gets dispatch method of redux app as a parameter and returns an object.
c) third step is to connect these two above functions with each other, for this we use "connect" from react-redux library and while exporting our component we connect the mapStateToProps and mapDispatchToProps with the component. This connect gives the state and action as a prop to the component which can be accessed using props.<propertyname>

React Hooks:
--> React hooks came into picture to simplyfy our code and help our component connect to the redux store without the connect higher order function.
--> useSelector() Hook : this hook can be imported from react-redux library and it accepts a function as an argument, the function gets redux state as a parameter and returns the value which is state value, this useSelector() again returns whatever is returned by the argument function and we can store it in variable.
--> useDispatch() Hook : this hook can be imported from react-redux library and it returns a reference of the dispatch function from the react-redux, so we can store it in variable (dispatch) and use to dispatch an action by passing action creator as an argument to it.
