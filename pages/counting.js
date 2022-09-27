import react from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
} from "../redux/actions/counterActions";

const Counting = (props) => {
  return (
    <div>
      <h1>Counter : {props.counter}</h1>
      <button
        onClick={() => {
          props.incrementCounter(20);
        }}
      >
        Count +
      </button>
      <button onClick={props.decrementCounter}>Count -</button>
      <Counter />
    </div>
  );
};

// รับฟังก์ชันจาก store มาใช้งาน
const mapStateToProps = (state) => ({
  counter: state.counter.value,
  total: state.counter.total,
});

// ส่งค่าไปยัง store เป็น object
const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};
export default connect(mapStateToProps, mapDispatchToProps)(Counting);
