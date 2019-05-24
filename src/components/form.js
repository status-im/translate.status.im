import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Axios from 'axios';

class Form extends Component {
  
  constructor(){
    super();
    this.state = {
      name : "",
      email : "",
      message : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = this.state;
    const form = await Axios.post('api/form', {
      name,
      email,
      message
    })
  }

  render() {

    return (
        <form>
          {/* I am just sending a basic error message */}
              {this.state.formError &&
                <p className="error">
                    Fill all the input fields please.
                </p>
              }
        <p><FormattedMessage id="form.contact" defaultMessage="if you have any further questions, feel free to contact us" /></p>
              <div>
          <label htmlFor="name"><FormattedMessage id="form.name" defaultMessage="name" /></label>
                <input type="text" name="name" placeholder="Your name" onChange={this.handleChange} />
              </div>
              <div>
          <label htmlFor="email"><FormattedMessage id="form.email" defaultMessage="email" /></label>
          <input type="email" name="email" placeholder="Email address" onChange={this.handleChange} />
              </div>
              <div>
          <label htmlFor="message"><FormattedMessage id="form.message" defaultMessage="message" /></label>
          <input type="text" name="message" placeholder="Your message" onChange={this.handleChange} />

              </div>
              <div>
          <p><FormattedMessage id="form.feedback" defaultMessage="Your feedback is always welcome! Thank you very much" /></p>
                <input type="submit" name="submit" value="Send" onClick= {this.handleSubmit} />

              </div>
              
            </form>
    );
  }
}                      


export default Form;
