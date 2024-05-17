function Card(props){

  return(
   <div style ={{backgroundColor:props.bgColor}}className="text-center border rounded-md p-5 flex-grow">
    <h1 className="font-sans text-xl font-bold">{props.title}</h1>
    <p>{props.subtitle}</p>
   </div>
  )
}

export default Card