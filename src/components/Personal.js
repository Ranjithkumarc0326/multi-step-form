import React from "react";

class Personal extends React.Component{

    next = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    

    render(){
    const {handleChange,firstName,lastName} = this.props;
    return(
        <>

            <div className="row">
            <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                <input  id="first_name" type="text" className="validate" onChange={handleChange("firstName")} value={firstName}/>
                <label htmlFor="first_name" className="active">First Name</label>
                </div>
                <div className="input-field col s6">
                <input id="last_name" type="text" className="validate" onChange={handleChange("lastName")} value={lastName}/>
                <label htmlFor="last_name" className="active">Last Name</label>
                </div>
            </div>
            </form>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.next}>
            <i className="material-icons right">Next</i>
            </button>
        </>
        )
    }
}

export default Personal;