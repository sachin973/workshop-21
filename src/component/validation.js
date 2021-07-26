const Validation=(values)=>{
  

  let errors={};
   
  if(!values.fullname){
      errors.fullname="name is required"
  }
  if(!values.email){
    errors.email="name is required"
}
if(!values.mobile){
    errors.mobile="name is required"
}
if(!values.password){
    errors.password="name is required"
}


  
  return errors;
}

export default Validation;
