import React, { Component } from 'react';

class SingleItem extends Component {
    constructor(props){
        super(props)
        this.state={
            option:''
        }
    }
    
    handleChange=(e)=>{
        this.setState({
            option:e.target.value
        })
    }

    render(){
    const {data,addToCart}=this.props
    return (
        <div className="container mt-5">
                <div>
                    <select className="dropdown" onChange={this.handleChange}>
                        <option value="all">ALL</option>
                        <option value="Casual Shirts">Casual Shirts</option>
                        <option value="Jeans">Jeans</option>

                    </select>
                </div>
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
                        data && data.filter(item=>{
                            if(item.category==this.state.option)
                                return true
                            if(this.state.option=="all" || this.state.option=='')
                                return true
                        }).map((ele,index)=>{
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
}

export default SingleItem;