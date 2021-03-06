import React from 'react';
import './Tabs.css';

export const ContentDetails = (props) => {
  return (
    <div className="TabDetails">
      <span className="currentTabContent">
        <span className="avatar">
          <img alt={props.tabContent.name} src={props.tabContent.avatar} />
        </span>
        <span className="details">
          <input className="inputBox" value={props.tabContent.name} onChange={props.nameChanged} maxLength='15' />
          <div className="points">{props.tabContent.points} points</div>
        </span>
      </span>
    </div>
  )
}
