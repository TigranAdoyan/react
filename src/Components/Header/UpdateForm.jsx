import React from 'react';
import {Input, TextArea} from '../Controlls/FormControll';
import {Field, reduxForm} from 'redux-form';

const UpdateForm = (props) => {
    return (
        <>
        <button className="closeBtn" onClick={props.OffPopupStatus} >X</button>
        <form onSubmit={props.handleSubmit}>
            <div>
                UserId
               <Field name="userId" component={Input} type="number" />
            </div>
            <div>
                LookingForAJob
                <Field name="lookingForAJob" component={Input} type="checkbox" />
            </div>
            <div>
                LookingForAJobDescription
                <Field name="lookingForAJobDescription" component={Input} type="text" />
            </div>
            <div >
                About Me
                <Field name="AboutMe" component={TextArea} type="textarea"  rows="5" cols="40" maxlength="100" />
            </div>
            <div>
                FullName
                <Field name="fullName" component={Input} type="text" />
            </div>
            <div>
                Github
                <Field name="github" component={Input} type="text" />
            </div>
            <div>
                Vk
                <Field name="vk" component={Input} type="text" />
            </div>
            <div>
                Facebook
                <Field name="facebook" component={Input} type="text" />
            </div>
            <div>
                Instagram
                <Field name="instagram" component={Input} type="text" />
            </div>
            <div>
                Twitter
                <Field name="twitter" component={Input} type="text" />
            </div>
            <div>
                Web Site
                <Field name="website" component={Input} type="text" />
            </div>
            <div>
                YouTube
                <Field name="youtube" component={Input} type="text" />
            </div>
            <div>
                MainLink
                <Field name="mainLink" component={Input} type="text" />
            </div>
            <button type="submit">Update</button>
        </form>
        </>
    );
};

export default reduxForm({form: "update"})(UpdateForm) ;