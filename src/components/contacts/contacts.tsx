import * as React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "./contacts.css"

interface IContacts {
    email: string;
    name: string;
    message: string;
}

const Contacts: React.FC = () => {
    const initialValues: IContacts = {email: "", name: "", message: "", };


    const validateEmail = (email: string | undefined) => {
        if (!email) {
            return 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        ) {
            return 'Invalid email address';
        }
        return ""
    }

    const validateName = (name: string) => {
        if (!name) return 'Required';
        return ""
    }

    const validateMessage = (message: string) => {
        if (!message) return 'Required';
        return ""
    }


    return (
        <Formik
            initialValues={initialValues}
            validate={values => {
                const errors: IContacts = {email: "", name: "", message: "", };
                errors.email = validateEmail(values.email);
                errors.name = validateName(values.name);
                errors.message = validateMessage(values.message);

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
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
                            <label htmlFor="nome" className="form-label">Nome*</label>
                            <Field type="text" name="nome" placeholder={'Nome'} />
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