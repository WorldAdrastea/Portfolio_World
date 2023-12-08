import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button, TextareaAutosize } from "@mui/material";

const StyledSection = styled.div`
    border-radius: 10px;
    padding: 20px;
    text-align: center;

    .input {
        width: 70%;
        border: 1px solid #404040;
        border-radius: 5px;
        padding: 8px;
        margin-bottom: 10px;
        outline: none;
        transition: border-color 0.3s ease-in-out;
    
        &:focus {
          border-color: #00aaff;
        }
    }

    .labels {
        line-height: 1.5715;
        padding: 10px;
    }

    .button {
        color: #fff;
        background-color: #008394;
        border: 0;
        padding: 0.5rem 1.5rem;
        transition: background-color 0.3s ease-in-out;
        cursor: pointer;
        border-radius: 0.375rem;
        font-size: 1.125rem;

        &:hover {
            background-color: #33c9dc;
        }
    }

    #contactform {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`

export const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
        .then(() => alert("Message Sent!"))
        .catch((error) => alert(error));
    }

    return (
        <StyledSection>
            <div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed/v1/place?q=10+Bosuns+Close,+Fareham,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div>
                        <h2>
                            ADDRESS
                        </h2>
                        <p>
                            10 Bosuns Close, Fareham, Hampshire PO16 0TQ
                        </p>
                    </div>
                    <div>
                        <h2>
                            EMAIL
                        </h2>
                        <a>
                            williamcfyau@hotmail.co.uk
                        </a>
                        <h2>
                            PHONE NUMBER
                        </h2>
                        <p>
                            07782502545
                        </p>
                    </div>
                </div>
                <form
                    id="contactform"
                    name="contact"
                    onSubmit={handleSubmit}
                >
                    <h2>
                        Hire Me
                    </h2>
                    <div>
                        <label 
                            htmlFor="name"
                            className="labels"
                        >
                            Name
                        </label>
                        <input
                            className="input"
                            type="text"
                            id="name"
                            name="name"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div>
                        <label 
                            htmlFor="email"
                            className="labels"
                        >
                            Email
                        </label>
                        <input
                            className="input" 
                            type="email"
                            id="email"
                            name="email"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <label 
                            htmlFor="message"
                            className="labels"
                        >
                            Message
                        </label>
                        <TextareaAutosize
                            id="message"
                            name="message"
                            variant="outlined"
                            onChange={(event) => setMessage(event.target.value)}
                        />
                    </div>
                    <Button
                        className="button"
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </StyledSection>
    )
}