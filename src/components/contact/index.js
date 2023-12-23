import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'',
            email:'',
            phone:''
        }
    }
    handleSend = (e) => {
        e.preventDefault();
        const {email,phone, message} = this.state;
        let formData = new FormData;
        formData.append('email',email);
        formData.append('phone', phone);
        formData.append('message', message);
        let url = 'https://contactapp-delta.vercel.app/users/message'
        // toast.success("Message Sent Successfully");
        axios.post(url,formData)
        .then(response =>{
            toast.success("Message Sent Successfully");
            this.setState({email:'',phone:'',message:''});
        })
        .catch(error=>{
            toast.error("failed to send message");
        })

        console.log("message send function")
    }
    handleChange = (e) =>{
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <>
            <ToastContainer />
                <div className='container justify-content-center align-items-center mb-5' id='contact'>
                    <div className='row justify-content-center'>
                        <div className='col'>
                            <h2 className='mt-5'>Contact</h2>
                        </div>
                        <div className="w-100"></div>
                        <div className='col-lg-8'>
    <form onSubmit={this.handleSend}>
        <div className='form-group'>
            <label htmlFor="email" style={{ float: "left", marginLeft:"10px" }}><h5>Email<span className='text-danger'>*</span></h5></label>
            <input type="email" className="form-control rounded border shadow form-control-lg mb-2" id="email" aria-describedby="emailHelp" placeholder="Enter email" required name='email' value={this.state.email} onChange={this.handleChange}/>
            <label htmlFor="phone" style={{ float: "left", marginLeft:"10px" }}><h5>Phone</h5></label>
            <input type="number" className="form-control rounded border shadow form-control-lg mb-2" id="phone" aria-describedby="emailHelp" placeholder="Enter phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
            <label htmlFor="text" style={{ float: "left", marginLeft:"10px" }}><h5>Message<span className='text-danger'>*</span></h5></label>
            <textarea className="form-control rounded mb-3 border shadow form-control-lg" id="text" rows="3" required name="message" value={this.state.message} onChange={this.handleChange} />
            <button className='btn btn-warning btn-lg mb-5 w-100 rounded shadow'>Send</button>
        </div>
    </form>
</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contact;