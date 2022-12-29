import React from 'react'
import {  useLocation,useNavigate } from 'react-router-dom';
import './homeMainbar.css';
import QuestionsList from './QuestionsList';

const HomeMainbar = () => {

  const user = 1;
  const navigate = useNavigate();

  const checkAuth =() =>{
      if( user == null){
        alert("login or signup to ask a question");
        navigate('/Auth');
      }else{
        navigate('/AskQuestion');
      }
  }

  let questions = [
    {
      
      _id: 1,
      upVotes:3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "what is a function?",
      questionBody: "It mean to be",
      questionTags: ["java", "node js", "react js", "mongodb"],
      userPosted: "mano",
      askedOn: "jan 1",
      userId: 1,
      answer: [{
          answerBody: "Answer",
          userAnswered: "kumar",
          answeredOn: "jan2",
          userID:2,
      }]

    },
    {
      _id: 2,
      upVotes:3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "what is an array?",
      questionBody: "It mean to be",
      questionTags: ["javaScript", "react js", "R", "python"],
      userPosted: "mano",
      askedOn: "jan 12",
      userId:2,
      answer: [{
        answerBody: "Answer",
        userAnswered: "siva",
        answeredOn: "jan2",
        userID:2,
    }]

    },
    {
      _id: 3,
      upVotes:3,
      downVotes: 2,
      noOfAnswers: 0,
      questionTitle: "what is a SinglyLinkedList?",
      questionBody: "It mean to be",
      questionTags: ["node js", "react js", "mongodb"],
      userPosted: "dhriti",
      askedOn: "jan 20",
      userId: 3,
      answer: [{
        answerBody: "Answer",
        userAnswered: "prasad",
        answeredOn: "jan2",
        userID:2,
    }]

    },

  ]

  const location = useLocation()

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
        {
          questions === null ?
            <h1>Loading...</h1> :
            <>
              <p>{questions.length} questions</p>
              <QuestionsList questions={questions} />
            </>
        }
      </div>


    </div>
  )
}

export default HomeMainbar