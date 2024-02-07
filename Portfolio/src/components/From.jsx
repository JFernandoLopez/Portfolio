import React, {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import toast, {Toaster} from "react-hot-toast";

export default function Form(){
    const [status, setStatus] = useState({
        user_name: false,
        user_email: false,
        message: false,
    });
    const form = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        
        emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TEMPLATE_ID}`, form.current, `${import.meta.env.VITE_PUBLIC_KEY}`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        document.getElementsByName('user_name')[0].value = "";
        document.getElementsByName('user_email')[0].value ="";
        document.getElementsByName('message')[0].value = "";

        setStatus({
            user_name: false,
            user_email: false,
            message: false,
        })
        
        toast.success('Message is on way', {
            style: {
                border: '1px solid #3ccd00',
                padding: '16px',
                color: '#fffaee',
                backgroundColor: '#15000d'
            },
            iconTheme: {
                primary: '#fffaee',
                secondary: '#3ccd00',
            },
        });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        value === "" ? 
        setStatus((prev) => ({
            ...prev,
            [name]: false,
        })) : setStatus((prev) => ({
            ...prev,
            [name]: true
        }))
    }

    return(
        <div>
        <form ref={form} onSubmit={handleSubmit}>
            <div className="input-group mb-3 border border-black rounded bg-black">
                <label htmlFor="user_name" className="form-label my-2 mx-2 text-light">Name</label><br/>
                <input type="text" className="form-control" placeholder="ex: Javier" aria-label="Username" aria-describedby="basic-addon1" name="user_name" onChange={handleChange}/>
            </div>
            <div className="mb-3 border border-black rounded bg-black">
                <label htmlFor="user_email" className="form-label my-1 text-light">Email</label><br/>
                <input type="email" className="form-control" id="user_email" aria-describedby="emailHelp" placeholder="@algo.ex" name="user_email" onChange={handleChange}/>
            </div>
            <div className="mb-3 border-black rounded bg-black">
                <label htmlFor="message" className="form-label my-1 text-light">Send a message</label>
                <textarea className="form-control" id="message" rows="3" placeholder="Click here and leave a message" name="message" onChange={handleChange}></textarea>
            </div>
            <div>
                {(status.user_name && status.user_email && status.message) && <input type="submit" value='Send message' className="btn active btn-dark"/>}
            </div>
        </form>
        <Toaster
        position="top-left"
        reverseOrder={false}/>
        </div>
        
)
}