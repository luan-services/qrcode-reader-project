import CardContainer from '../components/cardContainer'
import Challenge from '../components/Challenge'
import './App.css'

function App() {

  return (
    <>
      <div  className="min-h-screen bg-slate-300 dark:bg-slate-900 font-outfit"> {/* setando a cor do background da pagina */}

        <CardContainer />
        <Challenge />

      </div>
    </>
  )

}

export default App