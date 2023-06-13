import { useLocation } from 'react-router-dom'

const Chores = () => {
    const location = useLocation()
    const { assignments, affirmation, calendars, blogs, chores } = location.state
    console.log(assignments)
    console.log(affirmation)
    console.log(calendars)
    console.log(blogs)
    console.log(chores)
    
    return (
        <div>

        </div>
    )
}
export default Chores