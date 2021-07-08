import React from 'react';


class ProfileStatus extends React.Component {
    state = {
          editMode: false,
          status: this.props.profileStatus
    };
    
    onEditMode = () => {
        this.setState({
              editMode: true
        });
    };

    offEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.UpdateStatus(this.state.status)
    };

    onStatusChange = (e) => {
       this.setState({
           status: e.currentTarget.value
       });
    };

    componentDidUpdate(prevProps, prevState){
        if (prevProps.profileStatus !== this.props.profileStatus) {
           this.setState({
               status: this.props.profileStatus
           });
           
        };
    };
    render() {
          return (
            <div className="statusDiv">
               {this.state.editMode ? 
                    <input onChange={this.onStatusChange} value={this.state.status}  autoFocus={true} type="text" onBlur={this.offEditMode} /> :
                    <span onDoubleClick={this.onEditMode} > {this.props.profileStatus ?  this.props.profileStatus : "Empty"} </span>  
                }
            </div>
          )
    }
}

export default ProfileStatus;