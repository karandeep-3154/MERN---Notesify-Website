import { useNavigate } from "react-router-dom";
import React, { useState, useRef } from "react";
import { SidebarData } from "../Data/SidebarData";
const Sidebar = () => {
  // const [selectedKey, setSelectedKey] = useState(0);
  const navigate = useNavigate();

  //Useref is used such that our value persists on the re-renders of the component when state changes and in this case selectedKey is state which changes on clicking particular sidebar component

  // const SelectedSidebarButtonRef = useRef(null);

  const handleClickOnSidebarItem = (key) => {
    // window.location.pathname = SidebarData[key].link;
    navigate(SidebarData[key].link);
  };

  return (
    <div className="Sidebar">
      <ul className="SidebarItemsList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                // ref = {SelectedSidebarButtonRef}
                handleClickOnSidebarItem(key);
              }}
            >
              <div
                className="SidebarItem"
                id={
                  window.location.pathname == val.link
                    ? "SelectedSideBarItem"
                    : ""
                }
              >
                <div
                  className="SidebarStrip"
                  id={
                    window.location.pathname == val.link
                      ? "SelectedSideStrip"
                      : ""
                  }
                ></div>
                <div className="SidebarIcon">{val.icon}</div>
                <div className="SidebarItemText">{val.title}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
