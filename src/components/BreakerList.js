import React from 'react'
import TagList from './TagList'

export default function BreakerList( { breakerList }) {
  
    let itemList=[];
    breakerList.forEach((item,index)=>{
        //console.log(index, item.tags)
    itemList.push( 
    <div className="card" key={index}>
        {item.question} 
        <TagList tags ={item.tags} />
        <p></p>
    </div>)
    })
    
    return(
    <div>
    <p>Here are all {breakerList.length} of the breakers: </p>
    {itemList}
    </div>
    )
    
}
