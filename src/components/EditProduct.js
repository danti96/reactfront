import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const endPoint = 'http://localhost:8000/api/product/'

function EditProduct() {

    const [descripcion, setDescripcion]= useState("")
    const [price, setPrice]= useState(0)
    const [stock, setStock]= useState(0)
    const navigate = useNavigate()
    const {id} = useParams();
    
    const update =async (e)=>{
        console.log("entro")
        e.preventDefault()

        await axios.put(`${endPoint}${id}`,{
            descripcion:descripcion,
            price:price,
            stock:stock
        })
        navigate('/')
    }
    
    useEffect( ()=>{
        const getProductById = async ()=>{
            const response = await axios.get(`${endPoint}${id}`)
            console.log("response",response)
            setDescripcion(response.data.descripcion)
            setPrice(response.data.price)
            setStock(response.data.stock)
        }

        getProductById()
        // esLint-disable-next-line react-hooks/exhaustive-deps

    },[])
  return (
    <div>
        
    <h3>Edit Product</h3>        
    <form onSubmit={update}>
        <div className="mb-3">
            <label className="form-label">Descripcion</label>
            <input 
                value={descripcion}
                onChange={(e)=>setDescripcion(e.target.value)}
                type="text"
                className="form-control"
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Descripcion</label>
            <input 
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                type="number"
                className="form-control"
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Stock</label>
            <input 
                value={stock}
                onChange={(e)=>setStock(e.target.value)}
                type="number"
                className="form-control"
            />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
    </form>
    </div>
  )
}

export default EditProduct