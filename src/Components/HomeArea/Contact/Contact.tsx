import { useForm } from "@formspree/react";
import { useInView } from "react-intersection-observer";
import "./Contact.scss";

function Contact(): JSX.Element {

    const [state, handleSubmit] = useForm("mleqlear");
    const [headerRef, headerInView] = useInView({ triggerOnce: true });
    const [formRef, formInView] = useInView({ triggerOnce: true });

    return (
        <div className="Contact">
            <div className={`contactHeaderContainer ${headerInView ? "visible_header" : ""}`} ref={headerRef}>
                <h1 className="headerLine">Contact</h1>
                <p>Let's Connect: Drop me a Line!</p>
            </div>
            {!state.succeeded ?
                <form className={`form ${formInView ? "visible_form" : ""}`} onSubmit={handleSubmit} ref={formRef}>
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
