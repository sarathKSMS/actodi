import Header from "./components/Header";
import Card from "./components/card";
import Todocontainer from "./components/Todocontainer"
import Todolist from "./components/Todolist";
import Todoform from "./components/Todoform";


function App() {
  return (
  <div className="bg-black p-10">
    <div className="bg-white p-10 mx-4 border rounded-md">
      {/* header */}
      <Header></Header>

       {/* card */}
      <div className="flex justify-between my-4 flex-wrap gap-7">
      <Card bgColor={"#FFFF00"} title={"23 C"} subtitle={"Chennai"}/>
      <Card bgColor={"#000080"} title={"10 May"} subtitle={"11.02.35"}/>
      <Card bgColor={"#FFA500"} title={"Built Using "} subtitle={"React"}/>      
      </div>

      {/* Todocontainer */}
      <Todocontainer></Todocontainer>
      




    </div>
  </div>
  );
}

export default App;
