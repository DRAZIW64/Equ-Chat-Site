import './index.css';
import helpOne from "./img/Explanation-edit-favorites.JPG"
import helpTwo from "./img/Explanation-edit-Operators.JPG"
import helpThree from "./img/Explanation-edittsadd-alltopics.JPG"
import helpFour from "./img/Explanation-editadd-linebreak.JPG"
import React from 'react'

class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
          <h2 className="help-topic">So you need some assistance?</h2>
              <br />
            <button className="help-button" onClick={this.props.closePopup}>Close</button>
              <br />
            <div className="help-divsep">
              <h3 className="help-topic">Overview over files:</h3>
              <p className="help-paragraph"> 1) Standard replies: standard.json, standardEnglish.json. <br/> 2) Transfers: transferchat.json, transferChatEnglish.json. <br/> 3) Common Inquiries: common.json, commonEnglish.json. <br/> 4) Personal favorites: Inside the Personal Replies folder: Norwegian 1-10 and English 1-10  </p>
            </div>
            <br/>
            <div className="help-divsep"> 
            <h3 className="help-topic"> Connecting to the files via fileZilla </h3>
            <p className="help-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <br/>
            <div className="help-divsep">
            <h3 className="help-topic"> Edit names of chat-operators </h3>
            <p className="help-paragraph">In the json-folder:<br/>Open "Operators.json" and edit / change the name you want.<br/><strong>Do not edit value!</strong><br/>There may be up to 10 operators on this site for each language, so edit existing or remove those whom does not chat alot.<br/><img src={helpTwo} alt="JSON filestructure"></img> </p>
            </div>
            <br/>
            <div className="help-divsep">
            <h3 className="help-topic"> Edit your personal favorite messages </h3>
            <p className="help-paragraph">In the json-folder: Open "Operators.json" and see the corresponding "value" to your name.<br/> If your value is "1", Open the "PersonalReplies"-folder and open corresponding .json (example: EnglishOne).<br/>Edit content of already created info or add a new one by:<br/>1: adding a "," to bracket above.<br/>2: duplicating the setup above. <br/>3: giving changing value to one more then the one above like shown in the photo beneath: <br/><img src={helpOne} alt="JSON filestructure"></img> <br/><strong>Remember: The last bracket does NOT contain a comma</strong> </p>
            </div>
            <br/>
            <button className="help-button" onClick={this.props.closePopup}>Close</button>
            <br/>
            <div className="help-divsep">
            <h3 className="help-topic"> Edit/add/remove Standard replies, transfers or common enquiries </h3>
            <p className="help-paragraph">Editing: <br />Open the file you want to edit and edit text in either the Norwegian or English version. Save and quit. </p>
            <p className="help-paragraph">Adding: <br />Add a comma to the bracket above. <br /> duplicate content of value above <br /> remove text. <br /> add unique value(above+1) and fill in what you need like photo below:<img src={helpThree} alt="JSON filestructure"></img> <br/>If you want a linebreak, add \n to the code as this image shows:<br/><img src={helpFour} alt="JSON filestructure"></img> </p>
            </div>
            <br/>
            <button className="help-button" onClick={this.props.closePopup}>Close</button>
            <br/>
          </div>
        </div>
      );
    }
  }
  class App extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false
      };
    }
    togglePopup() {
      this.setState({
        showPopup: !this.state.showPopup
      });
    }
    render() {
      return (
        <div className='app'>
          <button onClick={this.togglePopup.bind(this)}>Help</button>
          {this.state.showPopup ? 
            <Popup
             closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      );
    }
  };
export default App;
  