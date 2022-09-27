import React from "react";
import { connect } from "react-redux";

const nextPageCounting = (props) => {
  console.log("object", props);
  return <div>{/* nextPageCounting : {props.counter} */}</div>;
};
const mapStateToProps = (state) => ({
  counter: state,
});
export default connect(mapStateToProps)(nextPageCounting);
