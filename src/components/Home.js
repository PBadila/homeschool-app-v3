import { useNavigate, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Home = () => {
    const { userInfo } = useParams()
    console.log(userInfo)
    let userID = userInfo.slice(0,1)
    console.log(userID)
    let userName = userInfo.slice(2)
    console.log(userName)
    return(
        <div className="homeContainer">
            <div className="navBar">
                <ul className="nav">
                    <Link to = {`/assignments/${userID}`}><li>Assignments</li></Link>
                    <Link to = {`/practice/${userID}`}><li>Practice</li></Link>
                    <Link to = {`/journal/${userID}`}><li>Journal</li></Link> 
                </ul>
            </div>
            <h1> Sawubona {userName}!</h1>
        </div>
    )
}
export default Home