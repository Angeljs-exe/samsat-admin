import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Widget = ({ type }) => {
    let data;
    
  return (
    <div className="widget">
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">401</span>
            <span className="link">See all users</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon />
                20%
            </div>
            <PersonOutlinedIcon className="icon" />
        </div>
    </div>
  )
}

export default Widget
