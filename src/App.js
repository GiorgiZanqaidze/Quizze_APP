import React, {useState} from "react"
import IntroPage from "./IntroPage"
import Quizze from "./Quizze"
import Form from "./Form"


function App() {

  // const [quizze, setQuizze] = useState(false)
  const [page, setPage] = useState("introPage")

  const [allUnits, setAllUnits] = useState([])

  
  if (page === "introPage") {
    return <IntroPage setPage={setPage}/>
  } else if (page === "formPage") {
    return <Form  setAllUnits={setAllUnits} allUnits={allUnits} setPage={setPage}/>
  } else if (page === "quizePage") {
    return <Quizze setPage={setPage} allUnits={allUnits}/>
  }

}

export default App;