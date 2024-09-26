

function Dish(props) {
    return (
        <div style={{backgroundImage:`url(${props.strMealThumb})`}} className="elem" id={props.idMeal}>
            <h3>{props.strMeal}</h3>
        </div>
    )
}

export {Dish}