import React from 'react'
import Tabs from '../components/Tabs'
import GeneralInformation from '../components/GeneralInformation'

export default class extends React.Component{
  state = {
    //
  }
  render(){
    return(
      <Tabs>
        <div link="General Information" description="Profile photo, name, email, phone" className="generalInformation-formWrapper" iconClass="la la-user">
          <GeneralInformation/>
        </div>
        <div link="Account & Apps" description="Connected external accounts" className="generalInformation-formWrapper" iconClass="la la-puzzle-piece">
          This is where the Account and Apps component goes
        </div>
        <div link="Security" description="Password & security questions" className="generalInformation-formWrapper" iconClass="la la-unlock">
          This is where the Security component goes
        </div>
        <div link="Billing" description="Setup payment methods" iconClass="la la-certificate">
          This is where the Billing component goes
        </div>
        <div link="Notifications" description="Set your email notifications" className="generalInformation-formWrapper" iconClass="la la-volume-up">
          This is where the Notifications component goes
        </div>
      </Tabs>
    )
  }
}
