import { useState , createContext } from "react";

export const BulbContext = createContext(); //1 Define the context

export function BulbProvider({children}){
  const [islightbulb , setislightbulb] = useState(true);

  return (
    <BulbContext.Provider value={{
      islightbulb : islightbulb,
      setislightbulb : setislightbulb
    }}>
      {children}
    </BulbContext.Provider>
  )
}