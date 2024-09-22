import React, { Component } from 'react'

export default class User extends Component {
    constructor()
    {
        super();
        this.state=
        {
            email:"swati@gmail.com"
        }
    }
  render() {
    // console.warn("Render method",this.state.email)
    console.log(this.state.email)
    return (
      <div>
        <h1>User Component</h1>
      
      </div>
    )
  }
}
