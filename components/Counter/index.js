import React from "react";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div style={{ background: "red", color: "white" }}>
      Counter : {props.counter} eiei
    </div>
  );
}
// รับฟังก์ชันจาก store มาใช้งาน
const mapStateToProps = (state) => ({
  counter: state.counter.value,
});

export default connect(mapStateToProps)(Counter);
