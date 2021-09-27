import { useSelector } from "react-redux";

const FruitsPage = () =>{
    const fruits = useSelector((state)=>state.fruits)
    console.log(fruits)
    return(
        <div>
        {
            fruits.map((fruit)=>(
                <p key={fruit}>{fruit}</p>
            ))
        }
        </div>
    )
}

export default FruitsPage