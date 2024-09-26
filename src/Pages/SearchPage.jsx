import { useRef, useState } from "react";
import { SearchBar } from "../Components/SearchBar";
import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Dish } from "../Components/Dish";
import { useSearchParams } from "react-router-dom";


function SeachPage(props) {

    const [content , setContent] = useState()
    const [isLoaded , setLoading] = useState(false)
    const [prop , setProp] = useState()
    const [redirect , setRedirect] = useState(false)
    // eslint-disable-next-line
    const [searchParams , setSearchparams] = useSearchParams()
    let urlRef = useRef(null)
    let params = useParams()


    useEffect(()=>{
        console.log(urlRef , params.type)
        if (params.type === "name") {
            urlRef.current = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
            setProp("Find Dishes By Name")
        } else if (params.type === "ingredient") {
            urlRef.current = `https://www.themealdb.com/api/json/v1/1/filter.php?i=`
            setProp("Find Dishes By Ingredients")
        } else {
           setRedirect(true)
        }
        if (searchParams.get("query")) {       
            getContent(searchParams.get("query"))
        }
        // eslint-disable-next-line
    },[params])

    useEffect(()=>{
        setLoading(false)
        setContent()
    }, [params])



    function getContent(params) {
        console.log(urlRef.current+params)
        fetch(urlRef.current + params).then(resp => resp.json()).then(data => {
            console.log(data)
            setContent(data["meals"])
            setLoading(true)
        })
    }



    if (redirect) {
        return <Navigate to="/404"/>
    }

    return (
        <>
        <div className="seachPage">
            <div className="seachInput">
                <SearchBar params={params} func={getContent}/>
            </div>
            <div className="searchContainer">
                {isLoaded ? ( content ? content.map(item => <Link key={item.idMeal} to={`/dish/${item.idMeal}`}><Dish key={item.idMeal} {...item}/></Link>) : <h2 style={{color:"white"}}>Items not found</h2>)
                : <h2 style={{color:"white"}}>{prop}</h2> }
            </div> 
    
        </div>
        
        </>
    )
}

export {SeachPage}