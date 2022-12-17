import React from "react"
import Answers from "./Answers"


export default function Questions({data, setAllAnswers, allAnswers, submit}) {

    
    function addAnswer(answer, index, isCorrect) {
        setAllAnswers(prevState => {
            const newState = prevState.filter(item => item.id !== index)
                return [
                    ...newState,
                    {
                        answer: answer,
                        id: index,
                        isCorrect: isCorrect
                    }
                ]
        })
    }
    

    return (
        <div>
            {data.map((questionItem, index) => {
                const {question, correct_answer, incorrect_answers,} = questionItem
                const all = [correct_answer, ...incorrect_answers]
                return (
                    <div className="question" key={index}>
                        <h4 className="title">{question}</h4>
                        <div className="btn-container">
                            <Answers data={all} allAnswers={allAnswers} addAnswer={addAnswer} index={index} questionItem={questionItem}  submit={submit} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
} 