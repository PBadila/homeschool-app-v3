import { Link } from 'react-router-dom'

const Administrative = () => {
    return(
        <div className="adminContainer">
            <ol className="adminList">
                <Link to = '/addassignments'><li className="adminLI">Add Assignments</li></Link>
                <Link to = '/addaffirmations'><li className="adminLI">Add Affirmations</li></Link>
                <Link to = '/addevents'><li className="adminLI">Add Events</li></Link>
                <Link to = '/addchores'><li className="adminLI">Add Chores</li></Link>
                <Link to = '/addpractice'><li className="adminLI">Add Practice</li></Link>
                <Link to = '/'><li className="adminLI">Logout</li></Link>
            </ol>
        </div>
    )
}
export default Administrative