import { useForm } from "@formspree/react";
import "./Contact.scss";

function Contact(): JSX.Element {

    const [state, handleSubmit] = useForm("mleqlear");

    return (
        <div className="Contact">
            <h1 className="headerLine">Contact</h1>
            <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>
            {!state.succeeded ?
                <form className="form" onSubmit={handleSubmit}>
                    <div className="inputContainer">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter Your Name"
                            required />
                    </div>
                    <div className="inputContainer">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            required />
                    </div>
                    <div className="inputContainer">
                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="Enter Your Message"
                            required />
                    </div>
                    <div className="formBtn">
                        <button className="btn-p">Send</button>
                    </div>
                </form> :
                <div className="form">
                    <span>Thanks for reaching out!</span>
                    </div>
            }
        </div>
    );
}

export default Contact;
