import Title from './Components/Title'
import './App.css'
import Counter from './Components/Counter'
import useCountDown from './hooks/useCountDown'
import img from './assets/img3.jpg'

function App() {
  
  const [day, hour, minute, second]=useCountDown("Jan 1, 2025 00:00:00")
  
  return (
    <>
    
    <div className="App" style={{backgroundImage:`url(${img})`}}>
      <div className="container">
          <Title title="Contagem regressiva para 2025"/>
          <div className="countdown-container">
            <Counter title="Dias" number={day}/>
            <Counter title="Horas" number={hour}/>
            <Counter title="Minutos" number={minute}/>
            <Counter title="Segundos" number={second}/>
          </div>
        </div>
    </div>
   
    
    </>
  )
}

export default App
