import React from "react";
import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={'login'} component={'Field'}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={'password'} component={'Field'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={'Field'} type={'checkbox'}/>
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    return <div>
        <h1>login</h1>
        <LoginReduxForm/>
    </div>
}
export default Login