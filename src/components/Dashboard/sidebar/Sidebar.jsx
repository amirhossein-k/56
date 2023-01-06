import "./sidebar.scss";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
const Sidebar = () => {
  const [expantnav, setExpantnav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [clickbutton, setClickbutton] = useState(false);
  const lg = 992;

  function myFunction() {
    if (window.innerWidth < 991) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }
  // function myFunction2() {
  //   if (window.innerWidth <= 576) {
  //     setExpantnav(true);
  //   } else {
  //     setExpantnav(false);
  //   }
  // }
  window.onresize = function () {
    myFunction();
  };
  //////////
  const menuItem = [
    {
      path: "/dashboard",
      name: "dashboard",
      icon: <DashboardIcon className="icon" />,
    },
    {
      path: "/dashboard/about",
      name: "About",
      icon: <ContactPhoneIcon className="icon" />,
    },
    {
      path: "/dashboard/products",
      name: "Product",
      icon: <StoreIcon className="icon" />,
    },

    {
      path: "/dashboard/products/new",
      name: "New Post",
      icon: <NoteAltIcon className="icon" />,
    },
    {
      path: "/dashboard/status",
      name: "Status",
      icon: <InsertChartIcon className="icon" />,
    },
    {
      path: "/dashboard/notification",
      name: "Notification",
      icon: <NotificationsNoneIcon className="icon" />,
    },
    {
      path: "/",
      name: "Site",
      icon: <HomeIcon className="icon" />,
    },
  ];
  return (
    <div
      className="sidebar navbar navbar-expand-md"
      style={{ width: isOpen ? null : null, minHeight: "100%" }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setClickbutton(!clickbutton)}
        style={{ marginRight: 5 }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse  ${
          clickbutton ? "d-none" : "d-block"
        } `}
        id="navbarSupportedContent"
      >
        <Row
          className="top"
          style={{ height: 50, marginLeft: 0, marginRight: 0 }}
        >
          <Col>
            <span
              className="logo d-flex align-items-center justify-content-center"
              style={{ display: isOpen ? "block" : "none" }}
            >
              outo Amir
            </span>
          </Col>
        </Row>
        <hr />
        <Row className="center" style={{ marginLeft: 0, marginRight: 0 }}>
          <ul>
            {menuItem.map((item, index) => (
              <li key={index} id={item.name}>
                <NavLink
                  to={item.path}
                  className="link"
                  onClick={(e) => console.log("click")}
                >
                  <div className="icon">{item.icon}</div>
                  <div
                    className="link_text"
                    style={{ display: isOpen ? "block" : "none" }}
                  >
                    {item.name}
                  </div>
                </NavLink>
                <ReactTooltip
                  anchorId={item.name}
                  place="bottom"
                  content={item.name}
                  className="d-xxl-none d-xl-none d-lg-none"
                />
              </li>
            ))}
          </ul>
          {/* {menuItem.map((item, index) => (
                       <ReactTooltip
                              anchorId={item.name}
                              place="bottom"
                              content="Hello world! I'm a Tooltip"
                            />
                     ))} */}
        </Row>
        {/* //// */}
        <Row className="bottom" style={{ marginLeft: 0, marginRight: 0 }}>
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </Row>
      </div>
    </div>
  );
};

export default Sidebar;
