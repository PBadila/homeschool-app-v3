const SignUp = () => {
    return (
        <div className="signupContainer">
            <form className="signupForm">
                <div className="formInput">
                    <label for="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="First Name"/>
                </div>
                <div className="formInput">
                    <label for="userName">Username</label>
                    <input type="text" id="userName" name="userName" placeholder="Username"/>
                </div>
                <div className="formInput">
                    <label for="password">Password</label>
                    <input type="text" id="password" name="password" placeholder="Password"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default SignUp