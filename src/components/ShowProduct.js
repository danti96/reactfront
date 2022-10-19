// HOOKS
import React, {useEffect, useState } from 'react'
import axios from 'axios'

// 
import {Link} from 'react-router-dom'
const endPoint = "http://localhost:8000/api"
//
const ShowProduct = () => {
    //* HOOK MANTIENE EL ESTADO
    //* 
    const [products, setProducts]=useState([]);
    
    //* Despues de rendereizar, el hook le dice al react
    //* que tiene que hacer algo con useEffet
    useEffect(()=>{
        getAllProducts()
    },[])

    const getAllProducts= async()=>{
        const response = await axios.get(`${endPoint}/products`)
        //* Ejecutamos la funcion setProducts del useState
        //* Para indicar los cambios
        setProducts(response.data)
    }
    const deleteProduct = async(id)=>{
        await axios.delete(`${endPoint}/product/${id}`)
        getAllProducts()
    }
  return (
    <div>
        <div className="d-grid gap-2">
            <Link to="/create" className="btn btn-success btn-lg mt-2 mb-2 text-white">Create</Link>
        </div>
        <table className="table table-striped">
            <thead className="bg-primary text-white">
                <tr>
                    <th>Descripción</th>
                    <th>Precío</th>
                    <th>Stock</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.descripcion}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                        <td>
                            <Link to={`/edit/${product.id}`} className="btn btn-warning">Editar</Link>
                            <button onClick={ ()=>deleteProduct(product.id) } className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ShowProduct