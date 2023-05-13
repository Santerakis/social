import React from 'react';
import {RootStateType} from "../../../redux/reduxStore";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
type ClassStateType = {
    title?: string
    editMode?: boolean
    status?: string
    // или вместо ? имутабельно менять
}

class ProfileStatus extends React.Component<ProfileStatusPropsType, ClassStateType> {
    state = {
        editMode: false,
        status: this.props.status,
        title: 'Yo'
    }

    activateEditMode = () => {
        console.log('1: ',this.state)
        console.log('this: ', this)
        this.setState({ editMode: true})
        // this.state.editMode = true
        // this.forceUpdate()
    }
    deactivateEditMode = () => {
        console.log('2: ',this.state)
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '---'}</span>
                    </div>
                }
                {!this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode}  type="text" value={this.state.status}/>
                    </div>
                }

            </div>

        );
    }
}

export default ProfileStatus;

//onBlur={this.deactivateEditMode.bind(this)} если используем не стрелочную функции и теряется контекст