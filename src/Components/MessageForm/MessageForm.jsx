import React from "react"
import { useFormik } from "formik"




export default function ContactForm(props) {

    const formik = useFormik({
        initialValues: {
            message: ""
        },
        onSubmit(values, { resetForm }) {
            props.onMessageAdd(values.message);
            // console.log(values.message);
            resetForm();
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <textarea
                cols="30"
                rows="10"
                name="message"
                placeholder="Your message"
                onChange={formik.handleChange}
                value={formik.values.message}
            />
            <button  type="submit">Send message</button>
        </form>
    )
}