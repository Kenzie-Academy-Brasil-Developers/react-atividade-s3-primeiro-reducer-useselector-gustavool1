import { useSelector } from "react-redux";
import './style.css'
const FruitsPage = () =>{
    const fruits = useSelector((state)=>state.fruits)
    console.log(fruits)
    return(
        <div className='fruits-container'>
        {
            fruits.map((item)=>(
                <div key={ item.fruit } className='fruits'>
                    <p >{ item.fruit }</p>
                    <img src={ item.image } alt={item.fruit}/>
                </div>
            ))
        }
        </div>
    )
}

export default FruitsPage