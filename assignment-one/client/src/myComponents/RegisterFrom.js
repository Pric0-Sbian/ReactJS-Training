import React from 'react';
import '../App.css';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function RegisterFrom() {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const { name, email, phone } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const onSubmit = async e => {
        if (user.name.length > 2) {
            if (user.phone.length === 10) {
                if (user.email.search("@") !== -1) {
                    e.preventDefault();
                    await axios.post("http://localhost:3000/users", user);
                    history.push("/");
                }
                else {
                    document.getElementById("email").innerHTML = "Please Enter a Valid Email Address";
                }
            }
            else {
                document.getElementById("phone").innerHTML = "Please Enter a Valid Phone Number";
            }
        }
        else {
            document.getElementById("name").innerHTML = "Please Enter a valid Name";
        }
        e.preventDefault();

    }
    return (
        <div className="form">
            <form onSubmit={e => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="InputName" className="form-label text-muted" >Full Name</label>
                    <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" placeholder="Enter Your Name"
                        name="name" value={name} onChange={e => onInputChange(e)} />
                    <p id="name"></p>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label text-muted">Email address</label>
                    <input type="email" className="form-control" id="InputEmail" placeholder="Enter Your Email"
                        name="email" value={email} onChange={e => onInputChange(e)} />
                    <p id="email"></p>
                </div>
                <div className="mb-3">
                    <label htmlFor="InputPhone" className="form-label text-muted">Phone No.</label>
                    <input type="number" className="form-control" id="InputPhone" placeholder="Enter Your Phone No."
                        name="phone" value={phone} onChange={e => onInputChange(e)} />
                    <p id="phone"></p>
                </div>
                <button className="btn btn-outline-success">Register</button>
            </form>
        </div>
    )
}
