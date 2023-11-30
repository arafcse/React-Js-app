import React from "react";

class App extends React.Component{

state = {
  username:"",
  phonenumber:"",
  email:"",
  city:""

}
  

ChangeData = (event) => {
  let val = event.target.name;
  let myvalue = event.target.value
  this.setState({[val]:myvalue});
}



  render(){
    return(
      <div className="App">
        <h1>{this.state.username} </h1>
        <h1>{this.state.phonenumber} </h1>
        <h1>{this.state.email} </h1>
        <h1>{this.state.city} </h1>
        <div>
          <form>

            <div class="form-group" style={{marginLeft:200}}>
              <label>User Name:</label><br></br>
              <input type="text" name="username" onChange={this.ChangeData}></input><br></br>
              <input type="text" name="phonenumber" onChange={this.ChangeData}></input><br></br>
              <input type="text" name="email" onChange={this.ChangeData}></input><br></br>
              <input type="text" name="city" onChange={this.ChangeData}></input><br></br>
              <button type="submit">Submit</button>


            </div>


          </form>
        </div>
      </div>
    )
  }
}

export default App;
