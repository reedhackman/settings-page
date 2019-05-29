import React from 'react'
import { Field, ErrorMessage } from 'formik'
import Dropzone from 'react-dropzone'

const GeneralInformation = () => (
  <React.Fragment>
    <div className="Settings-title">General information</div>
    <div className="Settings-content">
      <div className="generalInformation-fieldWrapper">
      <Dropzone
        onDrop={acceptedFiles => console.log(acceptedFiles)}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="generalInformation-uploadBox">
                <div className="generalInformation-uploadLabel">
                  <div className="generalInformation-uploadLabel-icon">
                    <i className="fa fa-cloud-upload-alt"></i>
                  </div>
                  <div className="generalInformation-uploadLabel-label">Upload profile photo</div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Dropzone>
      </div>
      <div className="generalInformation-fieldWrapper">
        <label className="generalInformation-fieldTitle">Full Name</label>
        <ErrorMessage name="fullName" component="div" className="form-error" />
        <Field type="text" name="fullName" className="generalInformation-fieldBox" placeholder="Enter your full name"/>
      </div>
      <div className="generalInformation-fieldWrapper">
        <label className="generalInformation-fieldTitle">Role</label>
        <ErrorMessage name="role" component="div" className="form-error" />
        <Field component="select" name="role" className="generalInformation-fieldBox">
          <option>Option 1</option>
          <option>Option 2</option>
        </Field>
      </div>
      <div className="generalInformation-fieldWrapper">
        <label className="generalInformation-fieldTitle">email</label>
        <ErrorMessage name="email" component="div" className="form-error" />
        <Field type="email" name="email" className="generalInformation-fieldBox" placeholder="Enter your email"/>
      </div>
      <div className="generalInformation-fieldWrapper">
        <label className="generalInformation-fieldTitle">phone</label>
        <ErrorMessage name="phone" component="div" className="form-error" />
        <Field type="tel" name="phone" className="generalInformation-fieldBox" placeholder="Enter your phone number"/>
      </div>
      <div className="generalInformation-fieldWrapper">
        <label className="generalInformation-fieldTitle">timezone</label>
        <ErrorMessage name="timeZone" component="div" className="form-error" />
        <Field component="select" name="timeZone" className="generalInformation-fieldBox">
          <option>PST</option>
          <option>OTHER</option>
        </Field>
      </div>
    </div>
  </React.Fragment>
)
 export default GeneralInformation
