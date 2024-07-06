import React,{Component} from "react";
import './QuizApp.css'
class QuizApp extends Component{
  constructor(props){
  super(props);
 
  this.state={
       
       index:0,
       
  }}
   next(){
    
    
    this.setState((prevState)=>({
      index:this.state.index<14?this.state.index+1:0
    }));
  }
 prev(){
    
    this.setState((prevState)=>({
      index:this.state.index<=0?this.state.index-1:14
    }));
  }
 quit(){
  
  
  window.alert("Are you sure you want to quit");
 }
  
  render(){
    const {index}=this.state;
    const {quiz}=this.props;
    return(
      <div className="quiz">
<div className="innerQuiz">
   <div className="head">  <h1 className="heading">Questions</h1></div>
   <div className="index"> <h4>{index+1} of 15</h4></div>
   <div className="ques"> <h2>{quiz[index].question}</h2></div>
    <div className="answers">
      {['optionA','optionB','optionC','optionD'].map((items)=>(
       
        <button key={items}>{quiz[index][items]}</button>
      ))}
</div>
<div className="footer">
   <div><button className="next" onClick={()=>this.next()}>next</button></div>
   <div><button className="prev" onClick={()=>this.prev()}>previous</button></div>
   <div><button className="quit" onClick={()=>this.quit()}>quit</button></div>
</div>
    </div>
      </div>
    )
  }
}
export default QuizApp;