import React, { useState } from 'react';

const FunComponent = ()=>{
    return(
        <>
          <div className='funbox'>
          <h1>This is created using Functional Component</h1>
          <p className='fline'>This is done using External css</p>
              <p style={{color:'blue'}}>This is done using Inline css</p>

          </div>
        </>
    )
}
export default FunComponent;