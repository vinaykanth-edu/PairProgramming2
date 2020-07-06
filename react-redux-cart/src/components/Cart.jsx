import React from 'react';
import { connect } from 'react-redux';
import {submit} from '../redux/action';

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:"",
            email:"",
            phno:""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        const {data,submit} = this.props
        return(
            <div className="container mt-5">
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={this.handleChange}/>
                    <label>Email: </label>
                    <input type="text" name="email" onChange={this.handleChange}/>
                    <label>Ph no: </label>
                    <input type="text" name="phno" onChange={this.handleChange}/>
                    <button className="btn btn-warning" onClick={() => submit({name:this.state.name,
                        email:this.state.email,
                        phno:this.state.phno,
                        data: data
                        })}>Submit</button>
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
                    data && data.map((ele,index)=>{
                        return(
                            <tr key={index}>
                                <th scope="row">{ele.id}</th>
                                <td>{ele.name}</td>
                                <td>{ele.category}</td>
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
        )
    }
}

const mapStateToProps = (state) => {
    return({
        data:state.cartArray
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        submit:(payload)=>dispatch(submit(payload))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);