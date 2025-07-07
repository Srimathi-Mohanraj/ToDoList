
import React, { useState } from 'react'

const ToDoList = () => {

    const[list,setlist] = useState ([{id:1,name:"Apple"},{id:2,name:"Orange"}])
    const[item,setitem] = useState("")

    const handleitem =(event) =>{
        setitem(event.target.value)
    }

    const handleAdd = () =>
    {
        setlist([...list,{id:list.length+1,name:item}])
      
    }
    const handleDelete = (removeid) =>{
        var temlist = list.filter(function(item)
    {
        if(item.id == removeid)
        {
            return false
        }else{
            return true
        }
    })
    setlist(temlist)
   
    }
    

  return (
<>

    <h1>To-Do List</h1>
    <input type="text" value={item} onChange={handleitem} />
    <button onClick={handleAdd}>Add</button>
    <ul>
        {
            list.map(function(item)
        {
            return <li>{item.name} <button onClick={()=>{handleDelete(item.id)}}>Delete</button></li>
        })
        }
    </ul>

</>  )
}

export default ToDoList