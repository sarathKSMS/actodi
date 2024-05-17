

function TodoItem(props) {
  const activityli = props.activityli
  const setactivityli = props.setactivityli


  function handleDel(deleteid) {
    var temparr = activityli.filter(function (item) {
      if (item.id == deleteid) {
        return false
      }
      else {
        return true
      }
    })

    setactivityli(temparr)
  }

  return (
    <div className="flex justify-between">
      <p>{props.index + 1}.{props.item.activity}</p>
      <button className="border rounded m-1 bg-white text-red-600" onClick={function () { handleDel(props.id) }}>Delete</button>
    </div>

  )
}

export default TodoItem