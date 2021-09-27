import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFruit } from "../../store/modules/fruits/actions";
import './style.css'
const FruitsPage = () =>{
    const [fruit, setFruit] = useState("")
    const dispatch = useDispatch()
    const fruits = useSelector((state)=>state.fruits)
    const handleAddFruit = () =>{
        setFruit("")
        dispatch(addFruit(fruit))
        console.log(fruit)
    }
    return(
        
        <div className='fruits-container'>
            <TextField 
                id='standard-basic' 
                sx={{m:2}}
                label='Insira uma fruta'
                variant='standard'
                value={fruit}
                onChange={ (e)=>setFruit(e.target.value) } 
            />
                
            <Button sx={{color:'white'}}onClick={handleAddFruit}>Adicionar Fruta</Button>
        {
            fruits.map((item)=>(
                <div key={ item } className='fruits'>
                    <p >{ item }</p>
                </div>
            ))
        }
        </div>
    )
}

export default FruitsPage