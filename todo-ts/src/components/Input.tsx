import { reactSetState } from "../types/utils";

type input={
    newTodo:string;
    setNewTodo:reactSetState<string>;
}

export const Input = ({newTodo,setNewTodo}:input) => {
  return (
    <input 
    className="rounded p-3 w-full uppercase text-center tracking-widest"
    type="text" 
    onChange={(e)=>setNewTodo(e.target.value)} value={newTodo} 
    placeholder='enter a todo item'
    />
  )
}
