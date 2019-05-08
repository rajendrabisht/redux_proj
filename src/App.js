import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';
import Child from './Child';

class App extends Component {

  constructor(props){
	  
    super(props);
	
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callmePar = this.callmePar.bind(this);
     
    this.state = {
      name: '',
	  address:'',
	  errors:'',
	  test:'',
	  isError:false
    }
  }

  // error 
  componentDidCatch(){
	  
	  this.setState({isError:true})
	  
  }
  
  
  handleChange(e){	 
  
    this.setState({
      [e.target.name] :e.target.value
    })
  }

  callmePar(d){
	  console.log('callme '+d);
	  this.setState({ test : d });
  }
  
  handleSubmit(e){
    e.preventDefault();	
	  if (this.validateForm()) {
			let contact = {
			  name: this.state.name,
			  address:this.state.address
			}
			this.setState({
			  name: '',
			  address: '',
			  errors:''
			});
		this.props.createContact(contact);
	  }
  }
   
  
  validateForm() {
      //let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
	  
      if (this.state.name ==="") {
        formIsValid = false;
        errors["name"] = "*Please enter your name.";
      }

      if (typeof this.state.name !== "undefined") {
        if (!this.state.name.match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = "*Please enter alphabet characters only.";
        }
      }
	  
	  if (this.state.address==="") {
        formIsValid = false;
        errors["address"] = "*Please enter your address.";
      }

      this.setState({
        errors: errors
      });
      return formIsValid;
    } 
   
  listView(data, index){
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            {data.name} ||  {data.address}
          </li>
        </div>
        <div className="col-md-2">
          <button onClick={(e) => this.deleteContact(e, index)} className="btn btn-danger">
            Remove
          </button>
        </div>
    </div> 
    )
  }  
  
  deleteContact(e, index){
    e.preventDefault();
    this.props.deleteContact(index);
  }

  render() {  
	console.log('parents');
	if(this.state.isError){
		
		return( <div> Error Some issue </div>);
	}
	
    return(
      <div className="container">
        <h1>Clientside Contacts Application</h1>
        <div>		
		<hr />
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
           Name <input type="text" onChange={this.handleChange} name="name" className="form-control" value={this.state.name}/><br />
		    <div className="errorMsg" style={{color:'#cc0000', marginBottom:'12px'}} >{this.state.errors.name}</div>
			<br />
            Address <input type="text" onChange={this.handleChange} name="address" className="form-control" value={this.state.address} /> 	<br />
			 <div className="errorMsg" style={{color:'#cc0000', marginBottom:'12px'}} >{this.state.errors.address}</div>
			<br />
            <input type="submit" className="btn btn-success" value="ADD"/>
          </form>
          <hr />
        { <ul className="list-group">
          {this.props.contacts.map((contact, i) => this.listView(contact, i))}
        </ul> }	
		

        </div>
		
		<Child callme={this.callmePar} />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts  
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact)),
    deleteContact: i => dispatch(contactAction.deleteContact(i))   
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);