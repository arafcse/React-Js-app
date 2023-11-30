import React from "react";

class App extends React.Component{

state = {

  email:"",
  password:"",
  emailError:'',
  passError:''

}

validate(){
  if(!this.state.email>0 && !this.state.password>0){
    this.setState({emailError:"Email and Password Required"})

  }else if(!this.state.email>0){
    this.setState({emailError:"Email field cannot be blank"})

  }else if(!this.state.password>0){

    this.setState({passError:"Password field cannot be blank"})
  }else{
    return true;
  }
}
  
formSubmit = (e) => {
  e.preventDefault();
  if(this.validate()){
    alert("Form Submit Done");
  }
}


  render(){
    return(
      <div className="App">
        <h1>Login Panel</h1>
        
        <div>
          <form onSubmit={this.formSubmit}>

            <div class="form-group" style={{marginLeft:200}}>
              <label>Email:</label><br></br>
              <input type="email" name="email" onChange={(event)=>{this.setState({email:event.target.value})}}></input><br></br>
              <strong style={{color:'red'}}>{this.state.emailError}</strong><br></br>
              <label>Password:</label><br></br>
              <input type="password" name="password" onChange={(event)=>{this.setState({password:event.target.value})}}></input><br></br>
              <strong style={{color:'red'}}>{this.state.passError}</strong><br></br>
              <button type="submit">Submit</button>


            </div>


          </form>
        </div>
      </div>
    )
  }
}

export default App;
