import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const initialState = { value: 0 };

const reducer = (state, action) => {
  if (action.type === "up") {
    return { ...state, value: state.value + action.step };
  }

  return state;
};

const store = createStore(reducer, initialState);

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "up", step: 2 });
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
