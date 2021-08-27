import React, { Component, useState } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Input } from '@material-ui/core';
import './subForm.scss'
import { BrowserView, MobileOnlyView, TabletView } from 'react-device-detect';

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
    }
    return (
      <>
        <BrowserView>
          <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="mc__title">Join Us for future updates.</h3>
            <div className="mc__field-container">
              <Input
                label="First Name"
                onChangeHandler={setFirstName}
                type="text"
                value={firstName}
                placeholder="First Name"
                isRequired
                id='inputFirst'
              />

              <Input
                label="Last Name"
                onChangeHandler={setLastName}
                type="text"
                value={lastName}
                placeholder="Last Name"
                isRequired
                id='inputFirst'
              />

              <Input
                label="Email"
                onChangeHandler={setEmail}
                type="email"
                value={email}
                placeholder="Enter Your Email Address"
                isRequired
                id='inputFirst'
              />

            </div>

            <Input
              label="subscribe"
              type="submit"
              formValues={[email, firstName, lastName]}
              id='subFormBtn'
            />
          </form>
        </BrowserView>
        <TabletView>
         <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="mc__title">Join Us for future updates.</h3>
            <div className="mc__field-container">
              <Input
                label="First Name"
                onChangeHandler={setFirstName}
                type="text"
                value={firstName}
                placeholder="First Name"
                isRequired
                id='inputFirst'
              />

              <Input
                label="Last Name"
                onChangeHandler={setLastName}
                type="text"
                value={lastName}
                placeholder="Last Name"
                isRequired
                id='inputFirst'
              />

              <Input
                label="Email"
                onChangeHandler={setEmail}
                type="email"
                value={email}
                placeholder="Enter Your Email Address"
                isRequired
                id='inputFirst'
              />

            </div>

            <Input
              label="subscribe"
              type="submit"
              formValues={[email, firstName, lastName]}
              id='subFormBtn'
            />
          </form>
        </TabletView>
        <MobileOnlyView>
          <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="mc__title">Join Us for future updates.</h3>
            <div className="mc__field-container">
              <Input
                label="First Name"
                onChangeHandler={setFirstName}
                type="text"
                value={firstName}
                placeholder="First Name"
                isRequired
                id='inputFirst'
              />

              <Input
                label="Last Name"
                onChangeHandler={setLastName}
                type="text"
                value={lastName}
                placeholder="Last Name"
                isRequired
                id='inputFirst'
              />

              <Input
                label="Email"
                onChangeHandler={setEmail}
                type="email"
                value={email}
                placeholder="Enter Your Email Address"
                isRequired
                id='inputFirst'
              />

            </div>

            <Input
              label="subscribe"
              type="submit"
              formValues={[email, firstName, lastName]}
              id='subFormBtn'
            />
          </form>
        </MobileOnlyView>
      </>
    );
};


const postUrl = `https://amazotoken.us5.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`

export class SubForm extends Component {
    
    render() {
        return (
            <div id='mc_form_wrapper'>
                <MailchimpSubscribe url={postUrl} 
                    render={({ subscribe, status, message }) => (
                        <CustomForm
                            status={status} 
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />
            </div>
        )
    }
}

export default SubForm
//https://amazotoken.us5.list-manage.com/subscribe/post