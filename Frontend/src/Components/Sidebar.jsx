import React, { useState } from 'react';
import "../App.css";
import {SidebarData} from "../Data/SidebarData.js";

const Sidebar = () => {

  const [selectedKey, setSelectedKey] = useState(0);

  const handleClickOnSidebarItem = (key) => {
    window.location.pathname = SidebarData[key].link;
    setSelectedKey(key);
  }

  return (
    <div className="Sidebar">
        <ul className="SidebarItemsList">
          {SidebarData.map((val, key) => {
            return <li key = {key}  onClick={()=>handleClickOnSidebarItem(key)}>
              <div className="SidebarItem" id = {(selectedKey==key) ? "SelectedSideBarItem" : ""}>
                <div className="SidebarStrip" id = {(selectedKey==key) ? "SelectedSideStrip" : ""}></div>
                <div className="SidebarIcon">{val.icon}</div>
                <div className="SidebarItemText">{val.title}</div>
              </div>
            </li>
          })}
        </ul>
    </div>
  )
}

export default Sidebar
