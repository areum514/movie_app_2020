
function Food({fav}) {
  return (
  <h1>I LIKE {fav}</h1>
  );
}

function App() {
  return (
    <div className="App">
      hello
      <Food fav="kimch"/ >
      <Food fav="삼겹살"/ >

        
    </div>
  );
}

export default App;
