import React from 'react';
import {useFormik} from "formik";
import s from './Login.module.css'
import {loginTC} from "../../redux/authReducer";
import {connect, useDispatch} from "react-redux";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../redux/reduxStore";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
type MapDispatchToPropsType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}
type MapStateToPropsType = {
    isAuth: boolean
}
type LoginPropsType = MapDispatchToPropsType & MapStateToPropsType

const LoginForm = (props: LoginPropsType) => {
    // const dispatch = useDispatch()
    const formik = useFormik<FormDataType>({
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
            props.loginTC(values.email, values.password, values.rememberMe)
            // formik.resetForm()
        }
    })


    // console.log('touched: ',formik.touched)
    console.log('1er: ', formik.errors)
    console.log('2value: ',formik.values)
    if (props.isAuth)return <Redirect to={'profile'}/>
    return (
        <form onSubmit={formik.handleSubmit}>
            <div><input className={formik.errors.email && formik.touched.email && s.inputError} name={'email'}
                        onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}
                        placeholder={'email'} type="text"/></div>
            {formik.errors.email && formik.touched.email && <div style={{color: "red"}}>{formik.errors.email}</div>}

            <div>< input className={formik.errors.password && formik.touched.password && s.inputError} name={'password'}
                         onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}
                         placeholder={'password'} type={'password'}/></div>
            {formik.errors.password && formik.touched.password &&
                <div style={{color: "red"}}>{formik.errors.password}</div>}

            <div><input name={'rememberMe'} onChange={formik.handleChange} checked={formik.values.rememberMe}
                        type="checkbox"/> remember Me
            </div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    )
}

const Login = (props: LoginPropsType) => {
    return (
        <div className={s.loginBlock}>
            <h2>Login</h2>
            <LoginForm {...props}/>
        </div>
    );
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, {loginTC})(Login);