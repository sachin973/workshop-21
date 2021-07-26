import React,{useState}  from 'react';


const Login=()=> {
  const[values,setValues]=useState({
      
      email:"",
      password:""
     

  });
  const handleChange=(key)=>(e)=>{

    setValues({
      ...values,
      [key]:e.target.value
    }); 
 }
  const  handleSubmit=(e)=>{
      e.preventDefault();
      const url="http://localhost:5000/login";
      fetch(url,{
        method:'post',
        headers: {
          'Content-Type': 'application/json',
          },
        body:JSON.stringify(values)

      }).then((res)=>res.json())
      .then((res)=>{ 
        console.log("valid user");
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
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={handleChange("email")}/>
  </div>
  
  <div class="form-group">
    <label for="Password1">Password</label>
    <input type="password" class="form-control" id="Password1" placeholder="Password" onChange={handleChange("password")}/>
  </div>
 

  <button type="submit" class="btn btn-outline-success">Submit</button>
</form>
        </div>
    </div>

</div>

   </>
  );
}

export default Login;