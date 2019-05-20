import React from 'react'
import '../styles/Tab.css'

export default class extends React.Component{
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
    let linkClass = "Tab-link"
    let iconBox = "Tab-iconBox"
    if(activeTab === link){
      linkClass += " is-activeTab"
      iconBox += " is-activeTab"
    }
    return(
      <div
        className="Tab"
        onClick={onClick}
      >
        <div className={iconBox}><i className={iconClass}></i></div>
        <div className="Tab-linkAndDescription">
          <div className={linkClass}>{link}</div>
          <div className="Tab-description">{description}</div>
        </div>
      </div>
    )
  }
}
