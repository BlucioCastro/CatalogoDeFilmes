import { createContext, useState } from "react"

export const SearchContext = createContext()
export default function SearchProvider({children}){
  const [query, setQuery] = useState("")
  const [previousRoute, setPreviousRoute] = useState("/")
  return(
    <SearchContext.Provider value={{query, setQuery, previousRoute, setPreviousRoute}}>
      {children}
    </SearchContext.Provider>
  )
}