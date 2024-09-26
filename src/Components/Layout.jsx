import { Outlet , NavLink } from "react-router-dom"

function LayOut() { 
    return (
        <>
            <header>
            <nav>
                <NavLink to="/">Home page</NavLink>
                <NavLink to="search/name">Search By Name</NavLink>
                <NavLink to="search/ingredient">Search By Ingredirnt</NavLink>
                <NavLink to="contacts">Contacts</NavLink>
            </nav>
            </header>
            <main>  
                <Outlet/>
            </main>
        </>
        
        
    )
}

export { LayOut }