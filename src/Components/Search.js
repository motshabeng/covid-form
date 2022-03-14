import React from "react"
function Search(props){
    
    return( 
      
    
    <div><form action="/" method="get">
        <div className="search"><label htmlFor="header-search">
            <span className="visually-hidden"></span> 
        </label>
        
        <input
            type="text"
            id="header-search"
            placeholder="Search ...."
            name="s" 
        />
        </div>
        <div className="btn"><button type="submit">Search</button></div>
    </form>
   
    <div>
   
    </div>

        </div>
    )
}











export default Search;