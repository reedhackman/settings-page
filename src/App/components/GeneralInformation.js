import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Dropzone from './Dropzone'
import '../styles/GeneralInformation.css'

const GeneralInformation = () => (
  <div className="generalInformation">
    <div className="generalInformation-title">General information</div>
    <Formik
      initialValues={{fullName: '', role: '', email: '', phone: '', timeZone: ''}}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting }) => (

        <Form>
          <div className="generalInformation-formWrapper">
            <div className="generalInformation-fieldWrapper">
              <Dropzone onFilesAdded={console.log}>
                <div className="generalInformation-uploadBox">
                  <div className="generalInformation-uploadLabel">
                    <div className="generalInformation-uploadLabel-icon">
                      <i className="la la-cloud-upload"></i>
                    </div>
                    <div className="generalInformation-uploadLabel-label">
                      Upload profile photo
                    </div>
                  </div>
                </div>
              </Dropzone>
            </div>
            <div className="generalInformation-fieldWrapper">
              <div className="generalInformation-fieldTitle">
                FULL NAME
              </div>
              <Field type="text" name="fullName" className="rectangle5" placeholder="Enter your full name"/>
            </div>
            <div className="generalInformation-fieldWrapper">
              <div className="generalInformation-fieldTitle">
                Role
              </div>
              <Field component="select" name="role" className="rectangle5">
                <option>Placeholder</option>
              </Field>
            </div>
            <div className="generalInformation-fieldWrapper">
              <div className="generalInformation-fieldTitle">
                EMAIL
              </div>
              <Field type="email" name="email" className="rectangle5" placeholder="Enter your email"/>
            </div>
            <div className="generalInformation-fieldWrapper">
              <div className="generalInformation-fieldTitle">
                PHONE
              </div>
              <Field type="tel" name="phone" className="rectangle5" placeholder="Enter your phone number"/>
            </div>
            <div className="generalInformation-fieldWrapper">
              <div className="generalInformation-fieldTitle">
                Timezone
              </div>
              <Field component="select" name="timeZone" className="rectangle5">
                <option>Placeholder</option>
              </Field>
            </div>
          </div>
          <button type="submit" disabled={isSubmitting} className="updateButton">
            <div className="updateButton-title">
              update
            </div>
          </button>
        </Form>
      )}
    </Formik>
  </div>
)
 export default GeneralInformation
