import { useState } from "react"
import { HeaderImage } from "./components/HeaderImage"
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { items } from "./types/utils";
import { ItemList } from "./components/ItemList";



function App() {
  const [list,setList]=useState<items[]>([])
  const [newTodo,setNewTodo] = useState<string>('');

  const handleSubmit=(event:React.FormEvent)=>{
    event.preventDefault()
    setList((prev)=>[...prev,{title:newTodo,id:Date.now().toString()}]);
    setNewTodo('')
  }

  return (
    <div className="h-[100vh] w-[100%] flex flex-col justify-center items-center">
       <HeaderImage/>
       <div className="w-[450px] mt-10">
        <form className=" flex flex-col items-center" onSubmit={handleSubmit}>
          <Input newTodo={newTodo} setNewTodo={setNewTodo}/>
          <Button className="w-full bg-slate-500 p-3 mt-3 rounded uppercase duration-500 hover:bg-slate-600" >Add todo</Button>
        </form>
       </div>
       <div className="w-[450px] h-52 overflow-y-auto mt-4 ">
        <ItemList list={list} setList={setList}/>
       </div>
    </div>
  )
}

export default App
