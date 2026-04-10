import Contacts from "../../components/contacts/contacts.tsx";

const ContactPage = () => {
    return (
        <div className="page" id="contacts">
            <section>
                <div className="section-eyebrow">Contattami</div>
                <div className="section-heading">Parliamo insieme</div>
                <Contacts />
            </section>
        </div>
    )
}

export default ContactPage;