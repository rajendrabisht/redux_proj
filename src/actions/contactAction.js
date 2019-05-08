import * as actionTypes from './actionTypes';

export const createContact = (contact) => {
    
	/*
	return {
      type: actionTypes.CREATE_NEW_CONTACT,
      contact: contact
    }
	*/
	
	return dispatch=> {
		
		setTimeout(()=>{
			console.log('wait for 1 second');
			dispatch({
				type:actionTypes.CREATE_NEW_CONTACT,
				contact:contact				
			})
			
		},1000);
	}
	
	
	
  };

export const deleteContact = (id) => {
    return {
        type: actionTypes.REMOVE_CONTACT,
        id: id
    }
}