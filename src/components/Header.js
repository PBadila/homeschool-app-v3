
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Header = ({assignments,affirmation,calendars,blogs,chores,userID}) => {
    

    return (
        <div className="navBar">
                <ul className="nav">
                    <Link to = {`/affirmation/${userID}`} state= {{assignments:assignments, affirmation:affirmation, calendars:calendars, blogs:blogs, chores:chores}}><li>Affirmation</li></Link>
                    <Link to = {`/assignments/${userID}`} state= {{assignments:assignments, affirmation:affirmation, calendars:calendars, blogs:blogs, chores:chores}}><li>Assignments</li></Link>
                    <Link to = {`/practice/${userID}`} state= {{assignments:assignments, affirmation:affirmation, calendars:calendars, blogs:blogs, chores:chores}}><li>Practice</li></Link>
                    <Link to = {`/journal/${userID}`} state= {{assignments:assignments, affirmation:affirmation, calendars:calendars, blogs:blogs, chores:chores}}><li>Journal</li></Link> 
                    <Link to = {`/chores/${userID}`} state= {{assignments:assignments, affirmation:affirmation, calendars:calendars, blogs:blogs, chores:chores}}><li>Chores</li></Link>
                    <Link to = {`/calendar/${userID}`} state= {{assignments:assignments, affirmation:affirmation, calendars:calendars, blogs:blogs, chores:chores}}><li>Calendar</li></Link>
                </ul>
            </div>
    )
}
export default Header