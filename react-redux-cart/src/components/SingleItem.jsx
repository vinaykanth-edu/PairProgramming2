import React from 'react'

function SingleItem(props) {
    const {data,addToCart}=props
    return (
        <div className="container mt-5">
            <table className="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {
                    data && data.map((ele,index)=>{
                        return(
                            <tr key={index}>
                                <th scope="row">{ele.id}</th>
                                <td>{ele.name}</td>
                                <td>{ele.category}</td>
                                <td>{ele.price}</td>
                                <td><img src={ele.img}  width="100"
                                height="100"className="img-fluid" alt={ele.name} /></td>
                                <td><button onClick={()=>addToCart(ele.id)} className="btn btn-outline-warning"> Add to Cart</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default SingleItem;