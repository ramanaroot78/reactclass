import React, { Component } from 'react'
export class Getex extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    } 
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((res))=>{console.log(res.data)
        this.setstate({posts:res.data})
        })
    }
     
  render() {
    return (
      <div>Getex
      <p>{posts}</p>
      </div>
    )
  }
}

export default Getex