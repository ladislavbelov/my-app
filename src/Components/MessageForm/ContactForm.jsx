import React from "react"
import { useFormik } from "formik" // new




export default function ContactForm() {
    
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validate(values) {
            const errors = {}

            if (!values.email) {
                errors.email = "Email field is required!"
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = "Email must be valid!"
            }

            // More validations here

            return errors
        },
        onSubmit(values) {
            console.log(values)
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your name"
                className={formik.errors.name ? "error" : null}
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            {formik.errors.name ? (
                <span className="errorText">{formik.errors.name}</span>
            ) : null}
            <input
                type="text"
                name="email"
                placeholder="Your email"
                className={formik.errors.email ? "error" : null}
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.errors.email ? (
                <span className="errorText">{formik.errors.email}</span>
            ) : null}
            <textarea
                name="message"
                placeholder="Your message"
                className={formik.errors.message ? "error" : null}
                onChange={formik.handleChange}
                value={formik.values.message}
            />
            {formik.errors.message ? (
                <span className="errorText">{formik.errors.message}</span>
            ) : null}
            <button type="submit">Send message</button>
        </form>
    )
}