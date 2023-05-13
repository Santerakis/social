import React from 'react';
import {useFormik} from "formik";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: values => {
            console.log('validate')
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length < 3) {
                errors.password = 'Invalid password'
            }
            return errors
        },
        onSubmit: values => {
            console.log('called onSubmit')
        }
})

    // console.log('touched: ',formik.touched)
    console.log('er: ',formik.errors)

    return (
        <form onSubmit={formik.handleSubmit}>
            <div><input name={'email'} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} placeholder={'email'} type="text"/></div>
            {formik.errors.email && formik.touched.email && <div style={{color: "red"}}>{formik.errors.email}</div>}

            <div><input name={'password'} onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} placeholder={'password'} type={'password'}/></div>
            {formik.errors.password && formik.touched.password && <div style={{color: "red"}}>{formik.errors.password}</div>}

            <div><input name={'rememberMe'} onChange={formik.handleChange} checked={formik.values.rememberMe} type="checkbox"/> remember Me</div>
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