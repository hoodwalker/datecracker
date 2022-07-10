import React from 'react'

export default function TagList({ tags }) {      
    //console.log(tags)     
    
    return(
    <div> 
        {
        tags.map((tag, index) => <span className="badge" key={index}> . {tag} . </span>)
        }
    </div>
    ) 
}
