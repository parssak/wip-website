import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from '../minor-components/Button';
import Axios from 'axios';
import Socials from '../minor-components/Socials';

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
        if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
            return;
        }

        this.setState({
            disabled: true
        });

        Axios.get('https://evening-inlet-95785.herokuapp.com/email', {
            params: {
                data: this.state
            }
        }).then(res => {
            if (res.data === "Accepted") {
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
        }).catch(err => {
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
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="fieldset">
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control className={`customForm ${this.props.theme}`} id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div className="fieldset">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control className={`customForm ${this.props.theme}`} id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="fieldset">
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control className={`customForm ${this.props.theme}`} id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                    </div>

                    <div className="flex-h-wrap">
                        <Button variant="primary" type="submit" disabled={this.state.disabled} text={"Send message"} helperClasses={"rainbow-hover"} />
                        <Socials />
                    </div>

                    {this.state.emailSent === true && <p className={`success-msg ${this.props.theme}`}>Email Sent</p>}
                    {this.state.emailSent === false && <p className={`err-msg ${this.props.theme}`}>Email Not Sent</p>}
                </form>
            </div>
        );
    }
}

export default Contact;
