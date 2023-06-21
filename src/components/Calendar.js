import { useLocation } from 'react-router-dom'
import Header from './Header'

const Calendar = () => {
    const location = useLocation()
    const { assignments, affirmation, calendars, blogs, chores, userID } = location.state
    console.log(assignments)
    console.log(affirmation)
    console.log(calendars)
    console.log(blogs)
    console.log(chores)
    
    return (
      
        <div className="container">
            <Header 
                assignments={assignments}
                affirmation={affirmation} 
                calendars={calendars}
                blogs={blogs} 
                chores={chores}
                userID={userID}
            />
        </div>
    )
}
export default Calendar