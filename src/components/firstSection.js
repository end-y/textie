import React from "react"
import {connect} from "react-redux"
class FirstSection extends React.Component {
    state={
        value:"",
        disabled:false
    }
    addHandler = (e) => {
        e.preventDefault()
        this.props.addMethod(this.state.value);
        this.setState({
            value: "",
            disabled:true
        })
    }
    deleteHandler = () => {
        if(this.state.disabled){
            this.props.deleteMethod()
            this.setState({
                value: "",
                disabled:false
            })
        }else{
            alert("Lütfen metin giriniz")
        }
    }
    changeHandler = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render(){
        return(
            <div class="mb-4">
               <div class="d-flex align-items-center justify-content-center text-white" style={{height:"50vh"}}>
        <div className="d-flex flex-column m-3 p-3 mt-5">
            <textarea className="t-area text-white" type="text" id="name" onChange={this.changeHandler} value={this.state.value}></textarea>
            <div className="buttons mt-3 d-flex justify-content-center">
            <button className="raise" onClick={this.addHandler}>Analiz et</button>
            <button className= "raise"onClick={this.deleteHandler}>Verileri Sil</button>
        </div>
        </div>
        </div>
        </div>
        )
    }
}
const mapMethod = (dispatch) => {
    return {
        addMethod: (value) =>{dispatch({type:"ADD_VALUE",value:value})},
        deleteMethod:() => {dispatch({type:"DELETE_VALUE",value:"Metin Bekleniyor"})}
    }
}
export default connect(null,mapMethod)(FirstSection)