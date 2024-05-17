import { useState } from "react"
import TodoItem from "./Todoitem"

function Todolist(props) {

  const activityli = props.activityli
  const setactivityli = props.setactivityli
  
  return (
    <div className="p-2 bg-blue-600 border rounded-md flex-grow">
      <h1 className="font-sans text-xl font-bold">Today's Activity</h1>

      {activityli.length ===0?<p>You haven't added anything yet</p>:""}

      {
        activityli.map(function(item,index){
          return <TodoItem id={item.id} item={item} index={index} activityli={activityli} setactivityli={setactivityli} />
        })
      }
    </div>)
}

export default Todolist