import React,{useState}  from 'react';


const Sign=()=> {
  const[values,setValues]=useState({
      fullname:"",
      email:"",
      mobile:"",
      password:"",
      confirmpassword:""

  });
  const handleChange=(key)=>(e)=>{

    setValues({
      ...values,
      [key]:e.target.value
    }); 
 }
  const  handleSubmit=(e)=>{
      e.preventDefault();
      const url="http://localhost:4000/app/signup";
      fetch(url,{
        method:'post',
        headers: {
          'Content-Type': 'application/json',
          },
        body:JSON.stringify(values)

      }).then((res)=>res.json())
      .then((res)=>{
        console.log(res);
      })
      .catch((e)=>{
        console.log("error",e);
      })
  
  };
  return (
   <>
<div className="container">
    <div className="row my-4">
        <div className="col-md-6 offset-md-3">
        <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="fullname">Full Name</label>
    <input type="text" class="form-control" id="fullname" onChange={handleChange("fullname")}  placeholder="Enter full name"/>

  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={handleChange("email")}/>
  </div>
  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="text" class="form-control" id="phone"  placeholder="Enter phone number" onChange={handleChange("mobile")}/>

  </div>
  <div class="form-group">
    <label for="Password1">Password</label>
    <input type="password" class="form-control" id="Password1" placeholder="Password" onChange={handleChange("password")}/>
  </div>
  <div class="form-group">
    <label for="Password2">Confirm Password</label>
    <input type="password" class="form-control" id="Password2" placeholder="Confirm Password"onChange={handleChange("confirmPassword")}/>
  </div>

  <button type="submit" class="btn btn-outline-secondary">Submit</button>
</form>
        </div>
    </div>

</div>

   </>
  );
}

export default Sign;
