import React from 'react'
import Question from './Question'

const QuestionsList = ({questions}) => {
  return (
       <>
        {
            questions.map((question)=>(
                <Question question={question} key={question.id}/>
            ))
        }
       </>
    )
}

export default QuestionsList