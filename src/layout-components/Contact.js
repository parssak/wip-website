import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from '../minor-components/Button';

// import Hero from '../components/Hero';
// import Content from '../components/Content';
import Axios from 'axios';
import { useSelector } from 'react-redux';


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
            console.log("dis cap i'm outta heeeerre");
            return;
        }

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }


    render() {
        return (
            <div className={`contact`} id="contact">
                <div className={`sticky-header ${this.props.theme}`}>
                    <h3>Contact Me</h3>
                    {/* <Toggle helperClasses={"header-toggle"}/> */}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control className={`customForm ${this.props.theme}`}  id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </fieldset>

                    <fieldset>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control className={`customForm ${this.props.theme}`} id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </fieldset>

                    <fieldset>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control className={`customForm ${this.props.theme}`}  id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                    </fieldset>

                    <Button variant="primary" type="submit" disabled={this.state.disabled} text={"Send Message  📨"}/>
                       
                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                </form>
            </div>
        );
    }

}

export default Contact;
