import { useLocation } from 'react-router-dom'

import math from '../imgs/calculator.png'
import compSci from '../imgs/computerScience.png'
import reading from '../imgs/reading.png'
import science from '../imgs/science.png'
import writing from '../imgs/writing.png'

import Header from './Header'

const Assignments = () => {

    const location = useLocation()
    const { assignments, affirmation, calendars, blogs, chores } = location.state
    console.log(assignments)
    console.log(affirmation)
    console.log(calendars)
    console.log(blogs)
    console.log(chores)

    const findImg = (lesson) => {
        let lessonArray = lesson.split('/')
        console.log(lessonArray)
        let topic = lessonArray[0]
        switch (topic) {
            case 'Math':
                return math
                break
            case "Science":
                return science
                break
            case 'Computer Science':
                return compSci
                break
            case "Reading":
                return reading
                break
            case "Writing":
                return writing
                break
            }
        }
    
    console.log(affirmation)
    return (
        <div className="container">
            <Header affirmation={affirmation}/>
        <div className="assignmentContainer">
            
            {assignments.map((assignment)=>
                <div className="assignCard" key={assignment.id}>
                    <div className="assignImgBox">
                        <img className="assignImg" src={findImg(assignment.title)}/>
                    </div>
                    <h1>{assignment.title.split('/')[1]}</h1>
                    <p>{assignment.instructions}</p>
                    <div className='checkBoxBox'>
                        <input className="completeCheck" type="checkbox" />
                    </div>
                </div>
            )}
            
        </div>
        </div>
    )
}
export default Assignments