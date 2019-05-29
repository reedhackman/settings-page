import React, { Fragment } from 'react'
import GeneralInformation from './SettingsGeneralInformationTab'
import { Formik, Form } from 'formik';

const Settings = () => (
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
      <SettingsTabs>
        <div link="General Information" description="Profile photo, name, email, phone" className="generalInformation-formWrapper" iconClass="fa fa-user">
          <GeneralInformation/>
        </div>
        <div link="Account & Apps" description="Connected external accounts" className="generalInformation-formWrapper" iconClass="fa fa-puzzle-piece">
          This is where the Account and Apps component goes
        </div>
        <div link="Security" description="Password & security questions" className="generalInformation-formWrapper" iconClass="fa fa-unlock">
          This is where the Security component goes
        </div>
        <div link="Billing" description="Setup payment methods" iconClass="fa fa-certificate">
          This is where the Billing component goes
        </div>
        <div link="Notifications" description="Set your email notifications" className="generalInformation-formWrapper" iconClass="fa fa-volume-up">
          This is where the Notifications component goes
        </div>
        <Fragment>
          <button type="submit" disabled={isSubmitting} className="updateButton">
            <div className="updateButton-title">
              update
            </div>
          </button>
        </Fragment>
      </SettingsTabs>
    )}
  </Formik>
)

class SettingsTabs extends React.Component{
  state = {
    activeTab: this.props.children[0].props.link
  }
  // change active component
  onTabClick = (tab) => {
    this.setState({
      activeTab: tab
    })
  }
  render(){
    // improves readability so we don't have to type/read "this." constantly
    const {
      onTabClick,
      props: {
        children
      },
      state: {
        activeTab
      }
    } = this
    return(
      <div className="Settings-wrapper">
        <div className="Settings-tabs">
        { /* generates all of the tabs */ }
          {children.map((child) => {
            const { link, description, iconClass } =  child.props
            let className="SettingsTabs-tabWrapper"
            if(link === activeTab){
              className += " is-activeTab"
            }
            if(!(child.props.link)) return
            return(
              <div className={className} key={link}>
                <SettingsTab
                  activeTab={activeTab}
                  link={link}
                  iconClass={iconClass}
                  description={description}
                  onClick={onTabClick}
                />
              </div>
            )
          })}
        </div>
        <div className="Settings-contentWrapper">
          <Form>
            {children.map((child) => {
              if(!(child.props.link)) return child.props.children
              if(child.props.link !== activeTab) return undefined
              return child.props.children
            })}
          </Form>
        </div>
      </div>

    )
  }
}

class SettingsTab extends React.Component{
  onClick = () => {
    const { link, onClick } = this.props
    onClick(link)
  }
  render(){
    const {
      onClick,
      props: {
        activeTab,
        link,
        description,
        iconClass
      }
    } = this
    let linkClass = "SettingsTab-link"
    let iconBox = "SettingsTab-iconBox"
    if(activeTab === link){
      linkClass += " is-activeTab"
      iconBox += " is-activeTab"
    }
    return(
      <div
        className="SettingsTab"
        onClick={onClick}
      >
        <div className={iconBox}><i className={iconClass}></i></div>
        <div className="SettingsTab-linkAndDescription">
          <div className={linkClass}>{link}</div>
          <div className="SettingsTab-description">{description}</div>
        </div>
      </div>
    )
  }
}

export default Settings
