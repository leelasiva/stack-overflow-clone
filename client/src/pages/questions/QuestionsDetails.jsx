import React from 'react'
import { useParams, Link } from 'react-router-dom'
import sortup from '../../assets/sort-up-solid.svg';
import sortdown from '../../assets/sort-down-solid.svg';
import './questions.css'
import Avatar from '../../components/avatar/Avatar';
import DisplayAnswer from './DisplayAnswer';

const QuestionsDetails = () => {

    const { id } = useParams();

    let questions = [
        {

            _id: '1',
            upVotes: 3,
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
                userID: 2,
            }]

        },
        {
            _id: '2',
            upVotes: 3,
            downVotes: 2,
            noOfAnswers: 0,
            questionTitle: "what is an array?",
            questionBody: "It mean to be",
            questionTags: ["javaScript", "react js", "R", "python"],
            userPosted: "mano",
            askedOn: "jan 12",
            userId: 2,
            answer: [{
                answerBody: "Answer",
                userAnswered: "siva",
                answeredOn: "jan2",
                userID: 2,
            }]

        },
        {
            _id: '3',
            upVotes: 3,
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
                userID: 2,
            }]

        },

    ]
    return (
        <div className='question-details-page'>
            {
                questions === null ?
                    <h1>Loading...</h1> :
                    <>
                        {
                            questions.filter((question) => {
                                return (
                                    question._id === id
                                )
                            }).map((question) => (
                                <div key={question._id}>
                                    <section className='question-details-container'>
                                        <h1>{question.questionTitle}</h1>
                                        <div className='question-details-container-2'>
                                            <div className='question-votes'>
                                                <img src={sortup} alt="sortup" width='18' className='votes-icon' />
                                                <p>{question.upVotes}</p>
                                                <img src={sortdown} alt="sortdown" width='18' className='votes-icon' />
                                            </div>
                                            {/* Question body starts*/}
                                            <div style={{ width: "100%" }}>
                                                <p className='question-body'>{question.questionBody}</p>
                                                <div className='question-details-tags'>
                                                    {
                                                        question.questionTags.map((tag) => (
                                                            <p key={tag}>{tag}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className='question-actions-user'>
                                                    <div >
                                                        <button type='button'>Share</button>
                                                        <button type='button'>Delete</button>
                                                    </div>
                                                    <div>
                                                        <p>asked {question.askedOn}</p>
                                                        <Link to={`/User/${question.userId}`}
                                                            className='user-link'
                                                            style={{ color: '#0086d8' }}
                                                        >
                                                            <Avatar
                                                                backgroundColor="orange"
                                                                px='8px'
                                                                py='5px'
                                                            >{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                            <div>
                                                                {question.userPosted}
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        question.noOfAnswers !== 0 && (
                                            <section>
                                                <h3>{question.noOfAnswers} answers</h3>
                                                <DisplayAnswer key={question._id} question={question} />
                                            </section>
                                        )
                                    }
                                    <section className='post-ans-container'>
                                        <h3>Your Answer</h3>
                                        <form>
                                            <textarea name='' id='' cols='30' rows='10'></textarea><br />
                                            <input type='submit' className='post-ans-btn' value='Post your Answer' />
                                        </form>
                                        <p>
                                            Browse other question tagged
                                            {
                                                question.questionTags.map((tag) => (
                                                    <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                                ))
                                            } or
                                            <Link to='/AskQuestion' style={{ textDecoration: "none", color: '#009dff' }}>ask your own question</Link>
                                        </p>
                                    </section>
                                </div>
                            ))
                        }
                    </>
            }
        </div>
    )
}

export default QuestionsDetails