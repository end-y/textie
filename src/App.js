import React from "react"
import FirstSection from "./components/firstSection"
import SecondSection from "./components/secondSection"
import {connect} from "react-redux"
import Header from "./components/Header";

class App extends React.Component {
  render() {
    const {value,cls} = this.props
    
    return (
    <div>
      <div className="row b" style={{ margin:"auto"}}>
        <div className="col-md-6">
          <Header/>
          <FirstSection />
        </div>
        <div className="col-md-6"> 
          <SecondSection data={value} clas={cls} />
        </div>
      </div>
    </div> 
      );
  }
}

const mapState = (state) => {
  return state 
}

export default connect(mapState)(App);
