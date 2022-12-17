import React from "react";
import Questions from "./Questions"
import "./Quizze.css"
import Png1 from "./blobs.png"
import Png2 from "./blobs-1.png"
// import {questions} from "./Data"
import {questions} from "./Menegment"
// const url = "https://opentdb.com/api.php?amount=5"


export default function Quizze({setPage, allUnits}) {


    // filter questions to show only choosen units
    const [unitQuests, setUnitQuests] = React.useState(
        questions.filter((item, index) => {
            return allUnits.includes(item.unit)
        })
    )
    // randomize choosen questions and pick only first five questions
    const [newQuests, setNewQuests] = React.useState(unitQuests.sort((a, b) => 0.5 - Math.random()).filter((item, index) => index < 10))
    
    const [allAnswers, setAllAnswers] = React.useState([])
    const [submit, setSubmit] = React.useState(false)
    const [correctNum, setCorrectNum] = React.useState(null)


    const questionsLength = newQuests.length
    
    function checkAnswers() {

        if (allAnswers.length === newQuests.length) {
            setSubmit(true)
            const onlyTrue = allAnswers.filter(item => item.isCorrect)
            setCorrectNum(onlyTrue.length)
        }
    }
    
    return (
        <>
            <main>
                <div className="questions__container">
                    <img className="png1"  src={Png1} alt='png1' style={{width: "20%"}}/>
                    <img className="png2" src={Png2} alt="png2" style={{width: "20%"}}/>
                    <article className="questions">
                        {<Questions data={newQuests} setAllAnswers={setAllAnswers} allAnswers={allAnswers} submit={submit} setSubmit={setSubmit} />}
                    </article>
                    <div className="submit__btn">
                        <h4 className={submit ? "show-scores" : "scores"}>You scored {correctNum}/{questionsLength} correct answers</h4>
                        <button onClick={submit ? () => setPage('formPage') :checkAnswers}  className='check-answers'>{submit ? "თავიდან დაწყება" : "პასუხების შემოწმება"}</button>
                    </div>
                </div>
            </main>
        </>
    )
}