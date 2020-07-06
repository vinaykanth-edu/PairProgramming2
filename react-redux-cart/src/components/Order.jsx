import React from "react";
import {connect} from 'react-redux';

class Order extends React.Component{
    render(){
        const {data} = this.props
        return(
            <div className="container mt-5">
                { data && data.map((ele, index) => {
                    return(
                        <div>
                        <div>
                                <label>Name: {ele.name}</label>
                                
                                <label>Email: {ele.email}</label>
                            
                                <label>Ph no: {ele.phno}</label>
                                
                        </div>
                        <table className="table table-striped table-dark">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Category</th>
                                <th scope="col">Price</th>
                                <th scope="col">Image</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                ele.data && ele.data.map((item,index)=>{
                                    return(
                                        <tr key={index}>
                                            <th scope="row">{item.id}</th>
                                            <td>{item.name}</td>
                                            <td>{item.category}</td>
                                            <td>{item.price}</td>
                                            <td><img src={item.img}  width="100"
                                            height="100"className="img-fluid" alt={item.name} /></td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                    )
                })}
               
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        data:state.orderArray
    }
}

export default connect(mapStateToProps, null)(Order);
