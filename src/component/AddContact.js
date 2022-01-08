import React from "react";
class AddContact extends React.Component{
    state={
        name:"",
        email:"",
        number:""
    }
    addform=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email==="" || this.state.number===""){
            alert("All Fields Needed");
            return;
        }
    this.props.addConatcthandler(this.state);
    this.setState({name:"",email:"",number:""});
    };
render(){
    return(


        <div className="ui main">
<h2>Add Contat</h2>

<form className="ui form" onSubmit={this.addform}>
    <div className="field">
        <label>Name</label>
        <input type="text" name="name" placeholder="Enter Name"
        value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
    </div>
    <div className="field">
        <label>Email</label>
        <input type="text" name="email" placeholder="Enter Email"
        value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/>
    </div>
    <div className="field">
        <label>Mobile No</label>
        <input type="text" name="number" placeholder="Enter Number" 
        value={this.state.number} onChange={(e)=>this.setState({number:e.target.value})}/>
    </div>
    <button className="ui button blue" >Add</button>
</form>

        </div>
    )
}

}
export default AddContact;