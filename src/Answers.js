import React from "react"


export default function Answers({data, addAnswer, index, questionItem, submit}) {

    const [correctClick, setCorrectClick] = React.useState(false)
    const [localIndex, setLocalIndex] = React.useState(null)
    const [submited, setSubmited] = React.useState(false)
    // i dont want to reset random answers on every re-render
    const [shuffleData, setShuffleData] = React.useState(data.sort((a, b) => 0.5 - Math.random()))

    function clickAnswer(item, localIndex) {
        // if it is not submited add show answers
        if (!submit) {
            setLocalIndex(localIndex)
            let isCorrect;
            if (questionItem.correct_answer === item) {
                setCorrectClick(!correctClick)
                isCorrect = true
            }else {
                isCorrect = false
            }
            addAnswer(item, index, isCorrect)
        }
    }

    
    React.useEffect(() => {
        setSubmited(submit)
    }, [submit])
    
    function setClass(index, localIndex) {
        
        if (index === localIndex && submited) {
            return 'false-active'
        } 
        if (index !== localIndex && submited) {
            return "other-btns"
        }
        if (index === localIndex) {
            return "active"
        }
        
    } 

    function showCorrect(item) {
        if (questionItem.correct_answer === item && submited) {
            return '#94D7A2'
        } 
    }


    return (
        <>
            {shuffleData.map((item, index) => {
                return <button key={item} onClick={() => clickAnswer(item, index)}
                className={setClass(index, localIndex)} style={{backgroundColor: showCorrect(item)}}>{item}</button>
            })}
        </>
    )
}