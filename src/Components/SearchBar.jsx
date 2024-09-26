import { useEffect, useState } from "react"
import { useSearchParams , useParams } from "react-router-dom"

function SearchBar(props) {

    const [value , setValue] = useState()
    // eslint-disable-next-line
    const [searchparams , setSeacrhParams] = useSearchParams()
    const params = useParams()

    const handleSubmit = (event) => {
        event.preventDefault()
        // eslint-disable-next-line
        setSeacrhParams({query:value.trim().replace(" ", "_")})
        props.func(value.trim().replace(" ", "_"))
    }

    useEffect(()=>{
        
        setValue("")
    },[props.params.type])


    return (
        <form id="seachBar" autoComplete="off" onSubmit={handleSubmit}>
            <input placeholder="Search here" type="search" name="query" value={value} onChange={(event) => setValue(event.target.value)}/>
            <button className="seachBtn" type="submit">Find All</button>
        </form>
    )
}


export { SearchBar }