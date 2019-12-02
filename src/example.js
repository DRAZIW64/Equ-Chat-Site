//import Dependencies
import React from 'react'
import ReactDOM from "react-dom"
import { Menu, Segment } from 'semantic-ui-react'
import './App.css'
import App from "./App"
//import OperatorData NORWEGIAN 
import PostChatters from "./json/Operators.json"
import postData from "./json/transfer.json"
import PostDataTwo from "./json/standard.json"
import PostDataThree from "./json/transferchat.json"
import PostDataFour from "./json/common.json"
//import OperatorData ENGLISH
import postDataEng from "./json/transferEnglish.json"
import postDataTwoEng from "./json/standardEnglish.json"
import postDataThreeEng from "./json/transferchatEnglish.json"
import postDataFourEng from "./json/commonEnglish.json"
//import PERSONNEL FILES
import PostDataOperatorOne from "./json/PersonalReplies/NorwegianOne.json"
import PostDataOperatorTwo from "./json/PersonalReplies/NorwegianTwo.json"
import PostDataOperatorThree from "./json/PersonalReplies/NorwegianThree.json"
import PostDataOperatorFour from "./json/PersonalReplies/NorwegianFour.json"
import PostDataOperatorFive from "./json/PersonalReplies/NorwegianFive.json"
import PostDataOperatorSix from "./json/PersonalReplies/NorwegianSix.json"
import PostDataOperatorSeven from "./json/PersonalReplies/NorwegianSeven.json"
import PostDataOperatorEight from "./json/PersonalReplies/NorwegianEight.json"
import PostDataOperatorNine from "./json/PersonalReplies/NorwegianNine.json"
import PostDataOperatorTen from "./json/PersonalReplies/NorwegianTen.json"
//import PERSONNEL FILES ENG
import PostDataOperatorOneEnglish from "./json/PersonalReplies/EnglishOne.json"
import PostDataOperatorTwoEnglish from "./json/PersonalReplies/EnglishTwo.json"
import PostDataOperatorThreeEnglish from "./json/PersonalReplies/EnglishThree.json"
import PostDataOperatorFourEnglish from "./json/PersonalReplies/EnglishFour.json"
import PostDataOperatorFiveEnglish from "./json/PersonalReplies/EnglishFive.json"
import PostDataOperatorSixEnglish from "./json/PersonalReplies/EnglishSix.json"
import PostDataOperatorSevenEnglish from "./json/PersonalReplies/EnglishSeven.json"
import PostDataOperatorEightEnglish from "./json/PersonalReplies/EnglishEight.json"
import PostDataOperatorNineEnglish from "./json/PersonalReplies/EnglishNine.json"
import PostDataOperatorTenEnglish from "./json/PersonalReplies/EnglishTen.json"

//import images -- NB Transfer to public folder when building 
import image from "./img/image.jpg"

export default class MenuExamplePointing extends  React.Component  {
  constructor(props){
    super(props);
    this.children = props.children;
    this.info = props.info;
  }  
  state = { activeItem: 'Transfer list' }
  value = { activeItem: '1'}
  bar(e){
      var equals = document.getElementById(e.currentTarget.value);
      console.log(equals)
      var range, selection;
  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(equals);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();        
    range = document.createRange();
    range.selectNodeContents(equals);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  function rendering() {
    const renderAlert =  (
      <div>
           <div className="close">
              <strong>Success!</strong> Your text has been copied
          </div>
      </div>
    );
      ReactDOM.render(renderAlert, document.getElementById("AlertRender"));
        setTimeout(() => {
      ReactDOM.unmountComponentAtNode(document.getElementById("AlertRender"));
    }, 750);
  }
  try {
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
        rendering();
    }
  catch (err) {
    alert('unable to copy text');
    }
  }
Wtest(state){
var prove = document.getElementById("languageCheck");
var cNo;
var test = false;
  if (state.value=== "1"){
    var proveto = prove.value;
      if (proveto === "true"){
        cNo = postData
        test = true;
        }
      else {
        cNo = postDataEng
        test = true;
        }
      }
else if (state.value=== "2"){
    var proveto = prove.value;
      if (proveto === "true"){
        cNo = PostDataTwo
        test = true;
        }
      else {
        cNo = postDataTwoEng
        test = true;          
      }
    }
else if (state.value=== "3"){
    var proveto = prove.value;
      if (proveto === "true"){
          cNo = PostDataThree
          test = true;
          }
      else {
          cNo = postDataThreeEng
          test = true;          
        }
      } 
else if (state.value=== "4"){
    var proveto = prove.value;
      if (proveto === "true"){
          cNo = PostDataFour
          test = true;
          }
      else {
          cNo = postDataFourEng
          test = true;          
        }
      }
if (state.value=== "5"){
    var selectedOp = document.getElementById("selector-chat").value;
      console.log(selectedOp)
        if (selectedOp === "1"){
          cNo = PostDataOperatorOne
          test = true;
          }
          else if(selectedOp === "2"){
            cNo = PostDataOperatorTwo
            test = true;
          }
          else if(selectedOp === "3"){
            cNo = PostDataOperatorThree
            test = true;
          }
          else if(selectedOp === "4"){
            cNo = PostDataOperatorFour
            test = true;
          }
          else if(selectedOp === "5"){
            cNo = PostDataOperatorFive
            test = true;
          }
          else if(selectedOp === "6"){
            cNo = PostDataOperatorSix
            test = true;
          }
          else if(selectedOp === "7"){
            cNo = PostDataOperatorSeven
            test = true;
          }
          else if(selectedOp === "8"){
            cNo = PostDataOperatorEight
            test = true;
          }
          else if(selectedOp === "9"){
            cNo = PostDataOperatorNine
            test = true;
          }
          else if(selectedOp === "10"){
            cNo = PostDataOperatorTen
            test = true;
          }
          else if(selectedOp === "11"){
            cNo = PostDataOperatorOneEnglish
            test = true;
          }
          else if(selectedOp === "12"){
            cNo = PostDataOperatorTwoEnglish
            test = true;
          }
          else if(selectedOp === "13"){
            cNo = PostDataOperatorThreeEnglish
            test = true;
          }
          else if(selectedOp === "14"){
            cNo = PostDataOperatorFourEnglish
            test = true;
          }
          else if(selectedOp === "15"){
            cNo = PostDataOperatorFiveEnglish
            test = true;
          }
          else if(selectedOp === "16"){
            cNo = PostDataOperatorSixEnglish
            test = true;
          }
          else if(selectedOp === "17"){
            cNo = PostDataOperatorSevenEnglish
            test = true;
          }
          else if(selectedOp === "18"){
            cNo = PostDataOperatorEightEnglish
            test = true;
          }
          else if(selectedOp === "19"){
            cNo = PostDataOperatorNineEnglish
            test = true;
          }
          else if(selectedOp === "20"){
            cNo = PostDataOperatorTenEnglish
            test = true;
          }
} 
if (test === true){
    return(  
      <div className="contentHolder">
         {cNo.map((cNo) => {
           return  <div> 
         <button 
           value={cNo.value.toString()}
           className="descriptive"
           onClick={this.bar}
         >{cNo.name}
         </button>
         <p id={cNo.value} value={cNo.value.toString()} className="insertText">             
          {cNo.content}
           </p>
           </div>
         })}  
     </div>           
    )
  }
}
  handleItemClick = (e, { name, value }) => {
    this.setState({ activeItem: name, value })};
  render() {
    const { activeItem } = this.state
    return (  
      <div className="ui-div-container"> 
        <Menu pointing>
          <Menu.Item
            name='Transfer List'
            active={activeItem === 'Transfer List'}
            onClick={this.handleItemClick}
            value = "1"
          />
          <Menu.Item
            name='Standard Replies'
            active={activeItem === 'Standard Replies'}
            onClick={this.handleItemClick}
            value= "2"
          />
          <Menu.Item
            name='Transfer'
            active={activeItem === 'Transfer'}
            onClick={this.handleItemClick}
            value= "3"
          />
           <Menu.Item
            name='Common Enquiries'
            active={activeItem === 'Common Enquiries'}
            onClick={this.handleItemClick}
            value= "4"
          />
           <Menu.Item
            name='Personal Favorites'
            active={activeItem === 'Personal Favorites'}
            onClick={this.handleItemClick}
            value= "5"
          />
            <Menu.Item>
            <div>
            {chatteroptions}
            </div>
            </Menu.Item>
            <Menu>
            <div>
            {language}
            </div> 
          </Menu>
        </Menu>
          <Segment className="renderTextArea">
          <section
            id="AlertRender">
          </section>
          <div>{this.Wtest(this.state)}</div>
          <section className="footerMain">
          <img id="logo"
            alt="Equinor Logo"
            src={image}/>
          </section>
          <App /> 
        </Segment> 
      </div>
    )
  } 
}
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked || false,};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({ isChecked: !this.state.isChecked })
      console.log(this.state)
  const loggedstate = this.state.isChecked
      console.log("..." + loggedstate)
    var prove = document.getElementById("languageCheck")
      console.log(prove.value) 
  }
  render () { 
    return (
      <label className="switch">
        <input id="languageCheck" type="checkbox" value={this.state.isChecked} onChange={this.handleChange} />
        <div className="slider"><p className="inline-switch">ENG ! NO</p></div>
      </label>
    );
  }
}
class Selectedoption extends React.Component {
  constructor(props){
    super(props);
    this.operator = "";
    this.value = "";
    }
  render() {
      return(    
        <div className="select-container">
        <select id="selector-chat" className="select-value" onChange={(e) => this.setState({value: e.target.value, operator: e.target.name})}>
          {PostChatters.map((PostChatters) => <option key={PostChatters.value.toString()} value={PostChatters.value }>{PostChatters.name}</option>)}
        </select>
      </div>
      );
  }
}
const language = <Toggle isChecked />
const chatteroptions = <Selectedoption />