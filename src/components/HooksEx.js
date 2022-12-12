  import React, {useEffect, useState} from 'react'

function HooksEx() {
    const[count,setcount]=useState(0)
    useEffect(()=>{
        setcount(count+1)
        
    })
  return (

    <div>{count}
    <button onMouseOver={()=>setcount(count+1)}>clickme</button>
     </div>
  )
}

export default HooksEx 