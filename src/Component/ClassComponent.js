import React, { Component } from "react";

class ClassComponent extends Component {
    render(){
        return(
            <>
              <div className="classbox">
              <h1>This is my class based Component</h1>
              <p className="fline">This is done using External css</p>
              <p style={{color:'blue'}}>This is done using Inline css</p>


              </div>
            </>
        )
    }
}
export default ClassComponent;