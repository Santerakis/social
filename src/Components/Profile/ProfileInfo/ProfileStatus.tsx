import React from 'react';

class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false,
        title:'Yo'
    }
    activateEditMode = () => {
        this.setState({editMode: true})
        // this.state.editMode = true
        // this.forceUpdate()
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode} autoFocus={true} type="text" value={this.props.status}/>
                    </div>
                }

            </div>

        );
    }
}

export default ProfileStatus;