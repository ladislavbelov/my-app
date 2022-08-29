import React from 'react';

class Profilestatus extends React.Component {

    state = {
        editMode: false,
        message: 'The message'
    }
    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
    }
    render() {
        return (
            <>
            {!this.state.editMode &&
                <p onClick={this.activateEditMode}>{this.props.status}</p>
            }
            {this.state.editMode &&
                <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status} type="text" name="" id="89231dj"></input>
            }
            </>
        )
    }
}
export default Profilestatus