import React, { Component } from 'react';
import SingleItem from "./SingleItem";
import {addToCart} from "../redux/action";
import {connect} from "react-redux";

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        let {id}=this.props.match?this.props.match.params:''
        let {data}=this.props

        if(id){
            let item =data.find(item => item.id==id)
            this.setState({
                data:[item]
            })
        }
        else{
            this.setState({
                data:data
            })
        }
    }

    render() {
        return (
            <div className="container">
                <SingleItem addToCart={addToCart} filterData='test'  data={this.state.data}/>
            </div>
        )
    }
}

const mapStateToProps =state =>{
    return{
        data: state.data
    }
}

const mapDispatchToProps =dispatch =>{
    return{
        addToCart:(payload)=>dispatch(addToCart(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)