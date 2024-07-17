import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {

  const navigate = useNavigate()
  const [eusername, seteusername] = useState()
  const [epassword, setepassword] = useState()
  const [ruser, setruser] = useState(true)

  const users = props.users
  
  function handleU(evt) {
    seteusername(evt.target.value)
  }

  function handleP(evt) {
    setepassword(evt.target.value)
  }

  function Checkuser(evt) {

    var userfound = false

    users.forEach(function (item) {

      if (item.username === eusername && item.password === epassword) {
        console.log("login successfull")
        userfound = true
        navigate("/landing",{state:{user:eusername}})

      }
      
    })
    if(userfound===false){
      console.log("login failed")
      setruser(false)
      
    }
  }

  return (<>
    <div className="bg-black p-10 ">

      <div className="bg-white border rounded p-10">
        <h1 className="text-3xl font-bold ">Hey Hi 👋</h1>
        {ruser?<p className="text-2xl">I help you manage your activities :)</p>:<p className="text-red-600  text-2xl">Oops😕 you don't have an account Please register </p>}
        <br />
        <div className="flex flex-col gap-2 my-2">
          <input className="border rounded-md p-1 bg-transparent border-black w-52"
            type="text"
            placeholder="Username"
            onChange={handleU} />

          <input className="border rounded-md p-1 bg-transparent border-black w-52"
            type="text"
            placeholder="Password"
            onChange={handleP} />

          <button className="bg-purple-500 w-32 p-1 border rounded-md"
            onClick={Checkuser}>Login</button>
        </div>

        <p className="text-xl">Don't have an account? <Link className="underline" to={'/signup'}>Signup</Link></p>

      </div>

    </div>
  </>)
}

export default Login