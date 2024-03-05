import "./Contact.scss";

function Contact(): JSX.Element {
    return (
        <div className="Contact">
            <h1 className="headerLine">Contact</h1>
            <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.</p>
            <form>
                <div className="inputContainer">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter Your Name" />
                </div>
                <div className="inputContainer">
                    <label>Email</label>
                    <input type="email" placeholder="Enter Your Email" />
                </div>
                <div className="inputContainer">
                    <label>Message</label>
                    <textarea placeholder="Enter Your Message" />
                </div>
                <div className="formBtn">
                    <button className="btn-p">Send</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
