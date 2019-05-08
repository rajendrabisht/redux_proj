import React from 'react';
class ErrorComp extends React.Component{

	constructor(props){
		super(props);
		this.state={
			isError:false
		}		
		
	}
	
	static getDerivedStateFromError(error){
		this.setState({isError:true});
		
	}
	
	componentDidCatch(){		
		this.setState({isError:true});
	}
		
	
	render(){
		
		if(this.state.isError){
			return(<div> Error </div>);
		}
		return	this.props.children;
			
	}
	
	

}

export default ErrorComp;