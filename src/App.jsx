import './App.css'

function App() {
  let sum = 0;
  let numberOfFriends = 1;
  let tip = 0;

  function calculateTip() {
    let toPay = ((sum * (1 + tip)) / numberOfFriends).toFixed(2);
    console.log(`Varje person ska betala ${Number(toPay)} kr`); // Number() tar bort decimalerna om dom är nollor
  }

  return (
    <div className="app">
      <h1>Split the nota</h1>
      <section className="container">
        <p>Summa</p>
        <input onChange={(e) => {sum = Number(e.target.value)}}/>
        <p>Antal vänner</p>
        <input onChange={(e) => {numberOfFriends = Number(e.target.value)}}/>
        <p>Dricks</p>
        <input onChange={(e) => {tip = Number(e.target.value)}}/>
        <button onClick={calculateTip}>Räkna</button>
      </section>
    </div>
  )
}

export default App
