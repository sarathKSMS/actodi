import { useState } from "react"

function Todoform(props) {

  const activityli = props.activityli
  const setactivityli = props.setactivityli

  const [newact,setnewact] = useState("")

  function handleChg(event){
    setnewact(event.target.value)
  }

  function addAct(){
    setactivityli([...activityli,{id:activityli.length+1, activity:newact}])
    setnewact("")
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-sans text-xl font-bold">Manage Activites</h1>


      <div>
        <input value={newact} onChange={handleChg} className="p-2 border border-black " type="text" placeholder="Add your acitivity" />
        <button onClick={addAct} className="bg-black text-white border border-black p-2">Add</button>
      </div>
    </div>
  )
}

export default Todoform