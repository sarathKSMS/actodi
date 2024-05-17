import Todoform from "./Todoform"
import Todolist from "./Todolist"

function Todocontainer() {
  return (
    <div>

      <div className="flex gap-5 mt-10 flex-wrap">
        <Todoform></Todoform>
        <Todolist></Todolist>
      </div>

    </div>




  )
}

export default Todocontainer