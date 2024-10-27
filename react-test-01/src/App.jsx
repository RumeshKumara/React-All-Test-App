

function App() {

  function hello1() {
    console.log("hello");
  }

  const hello2 = () => {
    console.log("hello 2");
  }

  function hello3(name) {
    console.log("hello " + name);
  }

  return (
    <>
      <div id="wrapper">
        <button onClick={hello1}>Click 1</button>
        <button onClick={hello2}>Click 2</button>
        <button onClick={
          () => {
            hello3("Rumesh")
          }
          // (name) => hello3(name) // This will throw an error in strict mode as it's trying to pass a function as an argument to hello3.
        }>Click 3</button>
      </div>
    </>
  )
}

export default App
