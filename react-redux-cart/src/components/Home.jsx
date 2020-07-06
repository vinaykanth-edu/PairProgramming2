import React, {Component} from 'react';
import SingleItem from './SingleItem';
import {connect} from 'react-redux';
import {addToCart} from "../redux/action";

class Home extends Component{
    constructor(props){
        super(props)

    }

    render(){
        const {data,addToCart,cart}=this.props
        return(
            <div className="row">
                <div className="col">
                    <SingleItem data={data} addToCart={addToCart} />
                </div>
                <div className="col mt-5">
                    {
                        cart && cart.length>0?
                        <div>
                            <label>Items in the cart</label>
                            <table className="table table-striped table-dark">
                                <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Image</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    cart && cart.map((ele,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{ele.name}</td>
                                                <td>{ele.price}</td>
                                                <td><img src={ele.img}  width="100"
                                                height="100"className="img-fluid" alt={ele.name} /></td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                        :''
                    }
                </div>
            </div>

        )
    }
}

const mapStateToProps=state=>{
    return{
        data:state.data,
        cart:state.cartArray
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(payload)=>dispatch(addToCart(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);