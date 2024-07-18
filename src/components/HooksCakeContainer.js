import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function HooksCakeContainer() {
  //useSelector returns the state variable in reducer.
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  // useDispatch returns the reference of the dispatch method in reducer.
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {noOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default HooksCakeContainer;
