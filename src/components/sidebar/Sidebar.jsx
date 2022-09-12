import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{ textDecoration:"none" }}>
            <span className="logo">Admin Page</span>
            </Link>
        </div>
        <hr />
        <div className="container">
        <div className="center">
            <ul>
                <p className="title"></p>
                <Link to ="/" style={{ textDecoration:"none" }}>
                <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                </li>
                </Link>
                <Link to ="/users" style={{ textDecoration:"none" }}>
                <li>
                    <PermIdentityIcon className='icon'/>
                    <span>User</span>
                </li>
                </Link>
                {/* <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <li>
                    <AccountCircleIcon className='icon'/>
                    <span>Profile</span>
                </li> */}
                <li>
                    <LogoutIcon className='icon'/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Sidebar
