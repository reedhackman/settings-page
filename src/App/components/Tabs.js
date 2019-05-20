// load components
import React from 'react'
import Tab from './Tab'
import '../styles/Tabs.css'

export default class extends React.Component{
  // initialize state to track which component to load
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
      <div className="Tabs">
        <div className="Tabs-allTabs">
        { /* generates all of the tabs */ }
          {children.map((child) => {
            const { link, description, iconClass } =  child.props
            let className="Tabs-tabWrapper"
            if(link === activeTab){
              className += " is-activeTab"
            }
            return(
              <div className={className} key={link}>
                <Tab
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
        <div className="Tabs-content">
        {/* generates only the active tab */ }
          {children.map((child) => {
            if(child.props.link !== activeTab) return undefined
            return child.props.children
          })}
        </div>
      </div>

    )
  }
}
