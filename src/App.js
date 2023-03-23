import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
        name:'',
        email: '',
        password: '',
    },
    onSubmit:values=> {
      alert("Login Successful");
      console.log('form:', values);
    },
    validate:values=>{
      let errors = {};
      if(!values.name) errors.name ="field required";
      if(!values.email) {
        errors.email = "field required";
      } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = "Username should be an email";
      }
      if(!values.password) errors.password ="field required";
      return errors;
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name:</div>
        <input type="text" id="name" onChange={formik.handleChange} value={formik.values.name}/>
        {formik.errors.name ? <div id="nameError" style ={{color:"red"}}>{formik.errors.name}</div> : null}
        <div>Email:</div>
        <input type="text" id="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style ={{color:"red"}}>{formik.errors.email}</div> : null}
        <div>Password:</div>
        <input type="text" id="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password  ? <div id="pswError" style ={{color:"red"}}>{formik.errors.password}</div> : null}
        <button type="submit" id="submitBtn">Submit</button>  
      </form>
    </div>
  );
}

export default App;
