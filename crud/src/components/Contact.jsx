import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import emailjs from '@emailjs/browser';
function Contact() {
    const { isLoaded, user } = useUser()
    const [message, setMessage] = useState("")
    if (!isLoaded) {
        return <h1>Lodding...</h1>
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await emailjs.send("service_g04nhoh", "template_abbtsem", { to_email: user.primaryEmailAddress.emailAddress, message }, "yB8W9bSpbuhxzsYiq")
        alert("Email send successfully")
    }
    return (
        <div>
            <h1>Contact</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" value={user.primaryEmailAddress.emailAddress} readOnly />
                <textarea name="message" id="" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Contact
