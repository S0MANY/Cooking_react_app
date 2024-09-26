import { useEffect , useState } from "react"
import { useParams ,Link } from "react-router-dom"
import { Dish } from "../Components/Dish"


function CategorySearch() {

    // eslint-disable-next-line
    const [content , setContent] = useState([])
    const [isLoaded , setLoading] = useState(false)
    const params = useParams()


    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.type}`)
        .then(response => response.json())
        .then(data => {
            setContent(data['meals'])
            setLoading(true)
            })
    }, [params.type])

    useEffect(()=>{
        console.log(content)
    }, [content])


 return(
    <>
        <div className="container">
            {!isLoaded ? "Loading" : content.map(item => <Link key={item.idMeal} to={`/dish/${item.idMeal}`}><Dish key={item.idMeal} {...item}/></Link>)}
        </div>
    </>
 )
}

export {CategorySearch}