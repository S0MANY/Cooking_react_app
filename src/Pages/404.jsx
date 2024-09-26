import {  useNavigate } from "react-router-dom"

function Notfound(){

    const navigator = useNavigate()
    return (
        <>

        <div className="contactsContainer">
            <h2>404 Error.</h2>
            <div className="backBtn" onClick={()=>navigator(-1)}>Go back</div>
        </div> 
        </>
    )
}

export { Notfound}