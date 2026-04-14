import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./contacts.css"
import emailjs from "@emailjs/browser";

interface IContacts {
    email?: string | null;
    name?: string | null;
    message?: string | null;
}

const Contacts: React.FC = () => {
    const initialValues: IContacts = {email: "", name: "", message: ""};


    const validateEmail = (email?: string | null) => {
        if (!email) {
            return 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
            return 'Invalid email address';
        }
        return
    }

    const validateName = (name?: string | null) => {
        if (!name) return 'Required';
        return
    }

    const validateMessage = (message?: string | null) => {
        if (!message) return 'Required';
        return
    }


    return (
        <Formik
            initialValues={initialValues}
            validate={values => {
                const errors: IContacts = {};
                const emailValidation = validateEmail(values.email);
                if (emailValidation) {
                    errors.email = emailValidation;
                }

                const nameValidation = validateName(values.name);

                if (nameValidation) {
                    errors.name = nameValidation;
                }

                const messageValidation = validateMessage(values.message);

                if (messageValidation) {
                    errors.message = messageValidation;
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                emailjs.send("service_41k85mj", "template_at1qz8b", {
                    "email": values.email,
                    "name": values.name,
                    "message": values.message,
                }, "tB-dCPMNHL0DRMNl-").then(()=> {
                    setSubmitting(false);
                });
            }}
        >
            {({ isSubmitting }) => (
                <Form className={"d-flex flex-column form-wrap"}>
                    <div className="form-row">
                        <div className={"form-item"}>
                            <label htmlFor="email" className="form-label">Email*</label>
                            <Field type="email" name="email" placeholder={"Email"} />
                            <ErrorMessage name="email" component="div" className={"form-error"} />
                        </div>
                        <div className={"form-item"}>
                            <label htmlFor="name" className="form-label">Nome*</label>
                            <Field type="text" name="name" placeholder={'Nome'} />
                            <ErrorMessage name="name" component="div" className={"form-error"} />
                        </div>
                    </div>
                    <div className={"form-item"}>
                        <label htmlFor="message" className="form-label">Messaggio*</label>
                        <Field type="text" name="message" component="textarea" />
                        <ErrorMessage name="message" component="div" className={"form-error"} />
                    </div>
                    <div className={"submit-row"}>
                        <span className="submit-hint">Tutti i campi sono obbligatori</span>
                        <button type="submit" disabled={isSubmitting} className="btn-dark">
                            Invia Messaggio
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );

}

export default Contacts;