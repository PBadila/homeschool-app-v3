import yoga from '../imgs/yoga.png'
import { useLocation } from 'react-router-dom'
import Header from './Header'


const Affirmation = () =>{
    const location = useLocation()
    const { assignments, affirmation, calendars, blogs, chores, userID } = location.state
    console.log(assignments)
    console.log(affirmation)
    console.log(calendars)
    console.log(blogs)
    console.log(chores)
    console.log(affirmation.statement)
    console.log(userID)
    return(
        <div className='totalContainer'>
            <Header 
                assignments={assignments} 
                affirmation={affirmation}
                calendars={calendars}
                blogs={blogs}
                chores={chores}
                userID = {userID}
            />
            <div className="affirm">
                <div className="affirmWords">
                    <h2>Today's Affirmation:</h2>
                    <h1>{affirmation.statement}</h1>
                </div>
                <div className="imgBox">
                    <img className="affImg" src={yoga}/>
                </div>
            </div>
        </div>
    )
}
export default Affirmation