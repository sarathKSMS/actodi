function Todoform() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-sans text-xl font-bold">Manage Activites</h1>


      <div>
        <input className="p-2 border border-black " type="text" placeholder="Add your acitivity" />
        <button className="bg-black text-white border border-black p-2">Add</button>
      </div>
    </div>
  )
}

export default Todoform