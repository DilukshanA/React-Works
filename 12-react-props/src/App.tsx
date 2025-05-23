import './App.css'
import Students from './components/Students'
function App() {

  return (
    <>
    <div>
      <Students name="Dilukshan" age={22} isStudent={true}/>
      <Students name="Dilu" age={20}/>
      <Students />
    </div>
    </>
  )
}

export default App
