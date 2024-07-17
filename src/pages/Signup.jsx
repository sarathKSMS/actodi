import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {

  const [eusername, seteusername] = useState()
  const [epassword, setepassword] = useState()
  
  const navigate = useNavigate()
  const users = props.users
  const setusers = props.setusers

  
  function handleU(evt) {
    seteusername(evt.target.value)
  }

  function handleP(evt) {
    setepassword(evt.target.value)
  }


  function Adduser(){
    setusers([...users,{username:eusername,password:epassword}]) 
    console.log(users)
    navigate("/")
  }


  return (
    <>
      <div className="bg-black p-10 ">

        <div className="bg-white border rounded p-10">
          <h1 className="text-3xl font-bold ">Hey Hi 👋</h1>
          <p className="text-2xl">You can signup here :)</p>
          <br />
          <div className="flex flex-col gap-2 my-2">
            <input className="border rounded-md p-1 bg-transparent border-black w-52"
              type="text"
              placeholder="Username" 
              onChange={handleU}/>

            <input className="border rounded-md p-1 bg-transparent border-black w-52"
              type="text"
              placeholder="Password"
              onChange={handleP} />

            <input className="border rounded-md p-1 bg-transparent border-black w-52"
              type="text"
              placeholder="Confirm Password" />

            <button className="bg-orange-400 w-32 p-1 border rounded-md"
            onClick={Adduser}>SignUp</button>
          </div>

          <p className="text-xl">Already have an account <Link className="underline" to={'/'}>Login</Link></p>

        </div>

      </div></>
  )

}

export default Signup