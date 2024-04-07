import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-scroll";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSendMessage = async (e) => {
        e.preventDefault();
        await axios
            .post(
                "http://localhost:4000/api/v1/message/send",
                {
                    name,
                    email,
                    subject,
                    message,
                },
                {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" },
                }
            )
            .then((res) => {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setMessage("");
                setSubject("");
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    return (
        <>
            <div className="contact contact_head">
                <div className="contacts">
                    <h2>Let's Start Planning!</h2>
                    <div className="flex">
                        <div className="c-detail">
                            <h5>Call Us</h5>
                            <h3>(255) 252-2456</h3>
                        </div>
                        <div className="c-detail">
                            <h5>Email Us</h5>
                            <h3>hello@queevent.com</h3>
                        </div>
                    </div>
                    <Link to="contact" spy={true} smooth={true} duration={500} className="send-btn">
                        Send a Message
                    </Link>

                </div>
            </div>
            <div className="contact_line">
                <h3>event design and styling boutique <br /> serving the metro dc area</h3>
            </div>
            <div className="contact-content container">
                <div className="banner">
                    <div className="item">
                        <img src="/c2.jpg" alt="Contact-Image" className="contact-img" />
                    </div>
                    <div className="item">
                        <div className="c-head">
                            <h2>Let Get It Started!</h2>
                            <h1>Contact Us</h1>
                        </div>
                        <form onSubmit={handleSendMessage}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <textarea
                                rows={8}
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
