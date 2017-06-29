import React, { Component } from 'react';
import {Tabs} from './view/Tabs';
import {ContentDetails} from './view/ContentDetails';
import './css/main.css';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      tabs: [],
      selectedTab: 0
    };
  }

  componentDidMount(){
    //TODO: should be loading from external service
    let tabs = [ 
      { id: 0, name: 'C-3PO', avatar: '/scripts/icons/C3P-0.svg', points: 100},
      { id: 1, name: 'BB-8', avatar: '/scripts/icons/bb-8.svg', points: 200},
      { id: 2, name: 'FETT', avatar: '/scripts/icons/fett.svg', points: 300},
      { id: 3, name: 'R2-D2', avatar: '/scripts/icons/r2-d2.svg', points: 400},
      { id: 4, name: 'VADER', avatar: '/scripts/icons/vader.svg', points: 500}
    ];

    this.setState({tabs});
  }

  nameChanged = (event) => {
    let tabs = this.state.tabs.map((tab) => {
      if(tab.id === this.state.selectedTab) {
        tab.name = event.currentTarget.value ? event.currentTarget.value.toUpperCase() : '   ';
      }
      return tab;
    });

    this.setState({tabs});
  }

  changeTab = (id) => {

    this.setState({
      selectedTab: id
    });
  }

  render() {
    let currentTab = this.state.tabs[this.state.selectedTab];
    return (
      // Add your component markup and other subcomponent references here.
      <div>
        <h1>Tabs</h1>
      <div className="App">
        <Tabs selectedTab={this.state.selectedTab}
                      tabs={this.state.tabs}
                      changeTab={this.changeTab} />
          {currentTab &&
            <ContentDetails tabContent={currentTab}
                                    makeEditable={this.makeEditable}
                        nameChanged={this.nameChanged}/>
            
         }
      </div>
      </div>
    );
  }
}
