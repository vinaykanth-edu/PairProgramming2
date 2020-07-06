import React, {Component} from 'react';
import SingleItem from './SingleItem';
import {connect} from 'react-redux';
import {addToCart} from "../redux/action";

class Home extends Component{
    constructor(props){
        super(props)

    }

    render(){
        const {data,addToCart}=this.props
        return(
            <div>
               <SingleItem data={data} addToCart={addToCart} />
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        data:state.data
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(payload)=>dispatch(addToCart(payload))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);