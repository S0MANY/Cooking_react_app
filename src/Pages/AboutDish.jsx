import { useParams ,useNavigate } from "react-router-dom"
import { useEffect , useState } from "react"

function AboutDish() {

    const params = useParams()
    const [content, setContent] = useState([])
    const [isLoaded , setLoading] = useState(false)
    const [products , setProducts] = useState([])
    const [amounts , setAmount] = useState([])

    const navigate = useNavigate()



    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setContent(data["meals"][0])
            setLoading(true)})},[params.id])

    // eslint-disable-next-line
    useEffect(()=>{
        let prod = []
        let amount = []

        for (let str in content) {
            if (str.includes("strIngredient") && content[str] !== "") { 
                const num  = str.replace(/\D/g, "")
                prod.push(content[str])
                amount.push(content[`strMeasure${num}`])
            
            }
        }
        // eslint-disable-next-line
        setProducts(prod)
        // eslint-disable-next-line
        setAmount(amount)
    }, [content]) 


    return (
        <>
            { !isLoaded ? "Loading" : (<div className="dish" id={content.idMeal}>
            <div className="dish__img" style={{backgroundImage:`url(${content.strMealThumb})`}}></div>
            <div className="dish__info">
                <div className="dish__info__name"><h2>{content.strMeal}</h2></div>
                <div className="dish__info__country">Category: {content.strCategory}</div>
                <div className="dish__info__ingredients">
                    <div className="ingredients__products">
                        <ul className="ingredients">
                            {products.map(product => <li>{product}</li>)}
                        </ul>
                    </div>
                    <div className="ingredients__amount">
                    <ul className="amounts">
                            {amounts.map(amount => <li>{amount ? amount : "On your taste"}</li>)}
                        </ul>
                    </div>

                </div>
            </div>
            <div className="dish__discription">
                <h2>Instruction</h2>
                <p>{content.strInstructions}</p>
            </div>
                <div className="forBtn">
            <div className="backBtn" onClick={()=>navigate(-1)}>Go back</div>
            </div>
        </div>)}  
        
        </>
        
    )
}

export {AboutDish}