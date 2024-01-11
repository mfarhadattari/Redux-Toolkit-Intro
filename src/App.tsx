const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className=" bg-gray-100 w-fit h-fit p-5 rounded-lg">
        <h1 className="text-center">COUNTER</h1>
        <div className="flex gap-5 mt-5">
          <button className="px-2 py-1 bg-red-500 rounded-md text-white uppercase">
            Decrement
          </button>
          <h1 className="text-3xl">0</h1>
          <button className="px-2 py-1 bg-green-500 rounded-md text-white uppercase">
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
