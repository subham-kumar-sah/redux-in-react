import React from "react";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";
import { connect } from "react-redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>No. of Ice Cream - {props.noOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfIceCream: state.iceCream.noOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
