import React from 'react'
import '../styles/Dropzone.css'

export default class extends React.Component{
  constructor(props){
    super(props)
    this.fileInputRef = React.createRef()
    // highlight in state allows us to change the style if we want to
    this.state = {
      highlight: false
    }
    this.openFileDialog = this.openFileDialog.bind(this)
    this.onFilesAdded = this.onFilesAdded.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
    this.onDragLeave = this.onDragLeave.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }
  /* onDragOver, onDragLeave, and the setState in onDrop can be deleted if we
   don't care about highlighting */
  onDragOver(event){
    event.preventDefault()
    if(this.props.disabled) return
    this.setState({ highlight: true })
  }
  onDragLeave(event){
    this.setState({ highlight: false })
  }
  onDrop(event){
    event.preventDefault()
    if(this.props.disabled) return
    if(this.props.onFilesAdded){
      this.props.onFilesAdded(event.dataTransfer.files[0])
    }
    this.setState({ highlight: false })
  }
  onFilesAdded(event){
    if(this.props.disabled) return
    if(this.props.onFilesAdded){
      this.props.onFilesAdded(event.target.files[0])
    }
  }
  openFileDialog(){
    if(this.props.disabled) return
    this.fileInputRef.current.click()
  }
  render(){
    const{
      fileInputRef,
      onDragOver,
      onDragLeave,
      onDrop,
      onFilesAdded,
      openFileDialog,
      props: {
        disabled,
        children
      },
      state: {
        highlight
      }
    } = this
    return(
      <div
        className="Dropzone"
        onClick={openFileDialog}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <input
          className="FileInput"
          ref={fileInputRef}
          type="file"
          onChange={onFilesAdded}
        />
        {/* rendering children instead of the upload profile picture div allows
          this component to be more easily re-used (on boxes that we want to
          style differently). */}
        {children}
      </div>
    )
  }
}
