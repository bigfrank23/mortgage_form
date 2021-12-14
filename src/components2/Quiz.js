import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap'
import PageImg from '../images/swedbank-logo.svg'
import QuizData from './QuizData'
import Results from './Results'
import Swal from 'sweetalert2'
import './styles.css'



export default class Quiz extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             userAnswer : null,
             currentIndex: 0,
             options: [],
             quizEnd: false,
             score: 0,
             disabled: true,
             display: false,
             quizOption : QuizData,
             firstname: '',
             lastname: ''
             
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.prevQuestionHandler = this.prevQuestionHandler.bind(this);
        
    }
    

    loadQuiz = () =>{
        const {currentIndex} = this.state;
        this.setState(()=> {
            return{
                question: QuizData[currentIndex].question,
                options: QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer
            }
        })
        localStorage.removeItem("userJob")
    }

    nextQuestionHandler = () =>{
        
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            //  userAnswer: null
            })
        
    }

    prevQuestionHandler = () => {
        this.setState({
          currentIndex: this.state.currentIndex - 1
        });
        

    }

    componentDidMount(){
        this.loadQuiz()
    }

    componentDidUpdate(prevProps, prevState){
        const {currentIndex} = this.state;
        if (this.state.currentIndex != prevState.currentIndex){
            this.setState(()=>{
                return {
                  question: QuizData[currentIndex].question,
                  options: QuizData[currentIndex].options,
                  answer: QuizData[currentIndex].answer
                }
            });
        }
        
    }

    finishHandler = () =>{
        if (this.state.currentIndex === QuizData.length - 1){
            this.setState({
                quizEnd : true
            })
        }
        Swal.fire({
          title: "Completed!",
          type: "success",
          text: "Weldone!",
          icon: "success",
        });
    }
    handleFormSubmit(e){
        e.preventDefault()
        this.setState({
          currentIndex: this.state.currentIndex + 1,
        //   display: true
        });
        if (localStorage.getItem("userJob") && localStorage.getItem("employment")) {
            this.setState({
              currentIndex: this.state.currentIndex + 1
            });
            localStorage.removeItem("userJob")
        }
        if (localStorage.getItem("userJob")) {
            this.setState({
              currentIndex: this.state.currentIndex + 2
            });
            localStorage.removeItem("userJob")
        }
        if (!localStorage.getItem("employment")) {
            localStorage.removeItem("userWorkAddress");
        }
    }
    
    render() {
        const {question, options, currentIndex, userAnswer, quizEnd} = this.state;
        if (quizEnd) {
            return (
              <div>
                <h1> Summary </h1>
                    <Results/> 
                {/* <ul>
                  {QuizData.map((item, index) => (
                    <li className="options" key={index}>
                      {item.answer}
                    </li>
                  ))}
                </ul> */}
              </div>
            );
        }
        
        const now = currentIndex * 4.5;
        const progressInstance = <ProgressBar now={now} label={`${now}% completed`} />
        return (
            <div className="container">
                <div className="pageHeader__wrapper">
                    <img src={PageImg} alt="PGImg" className="pageHeaderImg" />
                </div>

                <div className="bar">
                    {progressInstance}
                </div>
                <hr/>
                <h2 className="question__wrapper"> {question} </h2>
                <span style={{visibility: "hidden"}}> {`Question ${currentIndex + 1} of ${QuizData.length}`} </span>
                <form onSubmit={this.handleFormSubmit}>
                {options.map(option => <p key = {option.id} className={`options`}
                > {option} </p>)}

                <div className="navBtn__wrapper">
                {currentIndex < QuizData.length - 1  && <button className="nextBtn"> <i className="fa fa-angle-right" aria-hidden="true" /></button>}
                {currentIndex === QuizData.length - 1 && <button className="finishBtn" onClick={this.finishHandler}  > <i className="fa fa-check" aria-hidden="true"></i></button>}
                </div>
                </form>
                <div className="navBtn">
                {currentIndex >= 1 && <button className="prevBtn" onClick={this.prevQuestionHandler} tabIndex={0} ><i className="fa fa-angle-left" aria-hidden="true" /></button>}

                </div>
            </div>
        )
    }
}
