import { useNavigate, Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Home = () => {
    const { userInfo } = useParams()
    console.log(userInfo)
    let userID = userInfo.slice(0,1)
    console.log(userID)
    let userName = userInfo.slice(2)
    console.log(userName)

    const [ assignments, setAssignments ] = useState([])
    const [ affirmation, setAffirmation ] = useState([])
    const [blogs , setBlogs ] = useState([])
    const [calendars , setCalendars ] = useState([])
    const [chores , setChores ] = useState([])
    // Reminder for me: create a practice table in the API and set the state 
    // const [ practice, setPractice ] = useState([])

    const fetchAssignmentData = async (id) => {
        const url = `https://homeschool-app.onrender.com/assignments/user/${userID}`
        const response = await fetch(url)
        const  data = await response.json()
        setAssignments(data)
    }

    const fetchAffirmationData = async (id) => {
        const url = `https://homeschool-app.onrender.com/affirmations/random`
        const response = await fetch(url)
        const  data = await response.json()
        setAffirmation(data)
    }

    const fetchBlogData = async (id) => {
        const url = `https://homeschool-app.onrender.com/blogs/user/${userID}`
        const response = await fetch(url)
        const  data = await response.json()
        setBlogs(data)
    }

    const fetchCalendarData = async (id) => {
        const url = `https://homeschool-app.onrender.com/calendars`
        const response = await fetch(url)
        const  data = await response.json()
        setCalendars(data)
    }

    const fetchChoresData = async (id) => {
        const url = `https://homeschool-app.onrender.com/chores/user/${userID}`
        const response = await fetch(url)
        const  data = await response.json()
        setChores(data)
    }

    useEffect(()=>{
        fetchAssignmentData()
        fetchAffirmationData()
        fetchBlogData()
        fetchCalendarData()
        fetchChoresData()
       
    },[])
    console.log(assignments)
    console.log(affirmation)
    console.log(blogs)
    console.log(calendars)
    console.log(chores)

    return(
        <div className="homeContainer">
            <div className="navBar">
                <ul className="nav">
                    <Link to = {`/assignments/${userID}`} state= {{assignments:assignments, affirmation:affirmation, calendars:calendars, blogs:blogs, chores:chores}}><li>Assignments</li></Link>
                    <Link to = {`/practice/${userID}`} state= {{assignments:assignments, affirmation:affirmation, calendars:calendars, blogs:blogs, chores:chores}}><li>Practice</li></Link>
                    <Link to = {`/journal/${userID}`} state= {{assignments:assignments, affirmation:affirmation, calendars:calendars, blogs:blogs, chores:chores}}><li>Journal</li></Link> 
                </ul>
            </div>
            <h1> Sawubona Beautiful Spirit {userName}!</h1>
            <h2>Today is an amazing day!</h2>
        </div>
    )
}
export default Home