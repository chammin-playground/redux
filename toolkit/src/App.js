import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { up } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: "counterSlice/up", step: 2 });
          dispatch(up(2));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
};

export default App;
