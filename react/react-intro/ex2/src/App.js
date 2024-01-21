import './App.css';

function App() {
  const temp = 34;

  const getClassName = (temperature) => {
    if(temperature < 15) {
      return "freezing";
    }
    else if(temperature > 30) {
      return "hell-scape"
    }
    else {
      return "fair";
    }
  }

  return (
    <div className="ex-space">
      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {<div id="weatherBox" class={getClassName(temp)}></div>}
      </div>
    </div>
  )
}

export default App;
