import questionData from '../data/questions.js'
import QuestionCard from './QuestionCard.jsx'

import '../style/Questions.css'
import bgImage from '../assets/questions_bg.jpg'

export default function Questions () {

    const bgStyle = {
        backgroundImage: `url(${bgImage})`,
    }
    return (
        <div id="questionsPage">
            <div className='backgroundContainer' style={bgStyle}></div>
            <div id="questionsContent">
                <div id="questionsBox">
                    <p>Questions</p>
                    { questionData.map( (question, index) => {
                        return <QuestionCard key={index} data={question}/>
                    })}
                </div>
                <div id="postQuestionBox">
                    <div id="postQuestionForm">
                        <p>Ask a question</p>
                        <textarea placeholder='Your Question'></textarea>
                        <button id="sendBt" className='backButton'> Post Your Question</button>
                    </div>
                </div>
            </div>
        </div>
    )
}