import React from 'react';
import {useFormik} from "formik";

type FormikErrorType = {
    login?: string
    password?: string
    rememberMe?: boolean
}

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false
        },
        validate: values => {
            const errors: FormikErrorType = {}
            console.log(values)
        },
        onSubmit: values => {
            console.log('called onSubmit')
        }
})

    console.log('touched: ',formik.touched)

    return (
        <form onSubmit={formik.handleSubmit}>
            <div><input name={'login'} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.login} placeholder={'login'} type="text"/></div>
            <div><input name={'password'} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} placeholder={'password'} type={'password'}/></div>
            <div><input name={'rememberMe'} onChange={formik.handleChange} checked={formik.values.rememberMe} type="checkbox"/></div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    )
}

const Login = () => {
    return (
        <div>
            <h2>Login</h2>
            <LoginForm/>
        </div>
    );
};

export default Login;