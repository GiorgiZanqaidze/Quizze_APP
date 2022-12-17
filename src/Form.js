import React, {useState} from 'react'
import "./Form.css"

const units = ["1", "2", "3", "4", "5", "6"]



export default function Form({setAllUnits, allUnits, setPage}) {
  const [checkedState, setCheckedState] = useState(
    JSON.parse(localStorage.getItem("checkedState")).length === units.length ? 
    JSON.parse(localStorage.getItem("checkedState")) : 
    new Array(units.length).fill(false)
    );
  
    
  const handleChange = (position) => {
    // update checkState array on every click on checkbox (false to true or vise versa) 
    const updateCheckState = checkedState.map((item, index) => 
      position === index ? !item : item
    );
    
    setCheckedState(updateCheckState)
    localStorage.setItem('checkedState', JSON.stringify(updateCheckState))
  }
  
  
  
  React.useEffect(() => {
    setAllUnits(units.filter((item, index) => checkedState[index]))
    
  }, [checkedState])


  const handleSubmit = (e) => {
    e.preventDefault()
    allUnits.length > 0 ? setPage('quizePage') : alert('აირჩიეთ სასურველი ქვეთავი')
  }

  return (
    <form className='form-container'>
      <h1 className='form-title'>აირჩიეთ სასურველი ქვეთავი</h1>
        {units.map((item, index) => {
          return (
            <div key={index}>
              <label htmlFor={`custom-checkbox-${index}`} className='units-title'>{item} თავი</label>
              <input type="checkbox" id={item} className='check-list'  value={item} checked={checkedState[index]} onChange={() => handleChange(index)}/>
            </div>
          )
        })}
        <button onClick={handleSubmit} className="form-submit">შემდეგი</button>
    </form>
  )
}
        

