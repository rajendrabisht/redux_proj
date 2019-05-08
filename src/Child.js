import React from 'react';
class Child extends React.Component{

	constructor(props){
		super(props);
		this.state={
			age:''
		}		
		
		//throw new Error('My new Error');
	}
	
	changeData(){
		
		//this.setState({age:'hi'})
		this.props.callme('hi');
	}
	
	
	render(){
			console.log('child');

		return(
		
			<div>
				<input type="submit" onClick={(e)=> this.changeData()} />
			</div>
		
		)
	}
	
	

}

export default Child;