import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () =>{
    let user
    let error=""

    const navigate = useNavigate()

    const [ users, setUsers ] = useState([])

    const fetchUserData = async () => {
        const url = 'https://homeschool-app.onrender.com/users'
        const response = await fetch(url)
        const  data = await response.json()
        setUsers(data)
    } 

    useEffect(()=>{
        fetchUserData()
    },[])
console.log(users)

    const handleChange = (event) => {
        user = event.target.value
    }
    const findUser = () =>{
        let found = 0 
        users.forEach(person =>{
            if(person.username === user){
                found = 1
                console.log('found user')
                navigate(`/home/${person.id}/${person.firstName}`)

            }
        })
        if(found===0){
            error="Username not found.  Try again or sign up."
            console.log(found)
            console.log(error)
            return(error)
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(user)
        console.log(users)
        findUser()

        

        
    }
    //conditional rendering
    // if(users.length === 0){
    //     return <div>Loading...</div>
    // }
    console.log(error)
    return (
        <div className="loginContainer">
          <h1>Click on your username or <a href="/signup">sign up</a></h1>
          <div className="buttonBox">
                {users.map(person => (
                    <Link to = {`/home/${person.id}_${person.firstName}`} key={person.id}><button>{person.username}</button></Link>
                ))}
            </div>
        </div>
    )
}
export default Login