import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


var apiKey = "e97df6ff7dd1456c830df3f968c40940";

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
xhr.setRequestHeader("X-API-Key", apiKey);

xhr.onreadystatechange = function(){
 if(this.readyState === 4 && this.status === 200){
  var json = JSON.parse(this.responseText);
  console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
 }
}

xhr.send();


class App extends Component {
  render() {
    return (
      <div className="">
        <div className="">
          <h2>Your Destiny Manifest</h2>
        </div>
      </div>
    );
  }
}

export default App;
