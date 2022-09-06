import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'react-redux'
import { withFormik } from 'formik'
import {logInUser} from "../../Redux/login-reducer";

export default class User {
    static signIn({ email, password }) {
        return api('/auth/login', {
            json: true,
            headers: {
                ... /* Here you handle the header of your request */
            }
        }).then((res) => res.body)
    }
}

class Basic extends React.Component {
    render() {
        const {
            errors,
            handleSubmit,
            isSubmitting,
            values,
            setFieldValue,
            setFieldTouched,
        } = this.props

        return (
            <div>
                <h1>Login Form</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        type="email" name="email"
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                    />
                    <input
                        value={values.password}
                        type="password"
                        name="password"
                        onChange={setFieldValue}
                        onBlur={setFieldTouched}
                    />
                    <button type="submit" disabled={isSubmitting || errors}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
};

const Form = withFormik({
    validate(values) {
        const errors = {}

        if (!values.email) {
            errors.email = 'Required'
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address'
        }
        return errors;
    },
    handleSubmit(values, { props, setSubmitting }) {
        const { logInUser } = props
        const payload = { email: values.email, password: values.password }
        logInUser(payload).then(() => setSubmitting(false))
    },
})(Basic)

const mapDispatchToProps = (dispatch) => bindActionCreators({
    logInUser
}, dispatch)