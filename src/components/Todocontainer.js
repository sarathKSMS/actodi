import Todoform from "./Todoform"
import Todolist from "./Todolist"
import { useState } from "react"

function Todocontainer() {

  const [activityli, setactivityli] = useState([
    {
      id: 1,
      activity: "wakeup at 5pm"
    },
    {
      id: 2,
      activity: "Take a shower"
    },
    {
      id: 3,
      activity: "Get ready for work"
    }
  ])

  return (
    <div>

      <div className="flex gap-5 mt-10 flex-wrap">
        <Todoform activityli={activityli} setactivityli={setactivityli}/>
        <Todolist activityli={activityli} setactivityli={setactivityli}/>
      </div>

    </div>




  )
}

export default Todocontainer