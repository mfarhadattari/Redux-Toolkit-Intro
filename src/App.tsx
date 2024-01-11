import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

const App = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center bg-gray-100 w-fit h-fit p-5 rounded-lg">
        <h1 className="text-center">COUNTER</h1>
        <div className="flex gap-5 mt-5">
          <button
            onClick={() => dispatch(decrement())}
            className="px-2 py-1 bg-red-500 rounded-md text-white uppercase"
          >
            Decrement
          </button>
          <h1 className="text-3xl">{count}</h1>
          <button
            onClick={() => dispatch(increment())}
            className="px-2 py-1 bg-green-500 rounded-md text-white uppercase"
          >
            Increment
          </button>
        </div>
        <div className="flex gap-5 mt-5">
          <button
            onClick={() => dispatch(decrementByValue(5))}
            className="px-2 py-1 bg-red-500 rounded-md text-white uppercase"
          >
            Decrement by 5
          </button>
          <button
            onClick={() => dispatch(incrementByValue(5))}
            className="px-2 py-1 bg-green-500 rounded-md text-white uppercase"
          >
            Increment by 5
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
