import React from 'react';

class Profilestatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        console.log("this:", this)
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e) => {
       this.setState({
           status: e.currentTarget.value
       });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
            {!this.state.editMode &&
                <p onClick={this.activateEditMode}>{this.props.status || "No status"}</p>
            }
            {this.state.editMode &&
                <input onChange={this.onStatusChange}  autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} type="text" name="" id="89231dj"></input>
            }
            {/*{!this.props.status &&*/}
            {/*    <button onClick={this.activateEditMode}>Edit status</button>*/}
            {/*}*/}

            </>
        )
    }
}
export default Profilestatus