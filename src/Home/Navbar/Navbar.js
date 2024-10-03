import "./Navbar.css";
import account from "./../../images/account.svg";
import accounts from "./../../images/accounts.svg";
import balance from "./../../images/balance.svg";
import bell from "./../../images/bell.svg";
import hosts from "./../../images/hosts.svg";
import leads from "./../../images/leads.svg";
import logout from "./../../images/logout.svg";
import order from "./../../images/order.svg";
import plus from "./../../images/plus.svg";
import send from "./../../images/send.svg";
import setting from "./../../images/setting.svg";
import webmail from "./../../images/webmail.svg";
import Logo from "./../../images/imgmain-white.png";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="Nav">
            <nav className="navbar navbar-expand-lg">
                <div className="collapse navbar-collapse collapse1" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item logo">
                            <Link className="nav-link active" aria-current="page" to='/home'><img src={Logo} alt="not found" /></Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar1">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={hosts} alt="not found" style={{ width: '16px' }} />
                            Hosts
                     </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to='/home/cpanels'>Cpanels <span>31332</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/shells'>Shells <span>1217</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/ssh'>SSH\WHM <span>1195</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/rdp'>RDP<span>570</span></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={send} alt="not found" style={{ width: '16px' }} />
                            Send
                     </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to='/home/smtp'>SMTP <span>20018</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/mailers'>Mailers <span>1632</span></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={leads} alt="not found" style={{ width: '12px' }} />
                            Leads
                     </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to='/home/emailOnly'>Email Only <span>251</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/compoEmail'>Combo Email:Password <span>10</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/emailAccess'>Email Access <span>11</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/phoneNumber'>Phone Number Only<span>7</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/fullData'>Full Data <span>7</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/socialMedia'>Social Media Data <span>4</span></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={webmail} alt="not found" style={{ width: '16px' }} />
                            Webmails
                     </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to='/home/cpanelWebmail'>Capnel Webmail <span>14829</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/godaddy'>Godaddy Webmail <span>5994</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/officeGoddady'>Office Godaddy Webmail <span>6151</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/office365'>Office365 Webmail <span>17137</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/rackspace'>Rackspace Webmail <span>15</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/lonos'>lonos Webmail <span>2194</span></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={accounts} alt="not found" style={{ width: '20px' }} />
                            Accounts
                     </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to='/home/emailMarketing'>Email Marketing <span>102</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/webmailBusiness'>Webmail Business <span>358</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/hosting'>Hosting/Domain <span>4</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/vpn'>VPN/Socks Proxy<span>22</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/shopping'>Shopping <span>6</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/stream'>Stream <span>25</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/learning'>Learning <span>30</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/torrent'>Torrent / File Host <span>100</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/socialAccount'>Social Media <span>3</span></Link></li>
                                <li><Link className="dropdown-item" to='/home/other'>Other <span>1</span></Link></li>

                            </ul>
                        </li>
                    </ul>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse collapse2 " id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle bell" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={bell} alt="not found" style={{ width: '14px' }} />
                                <span>0</span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">No Notifications <span>0</span></a></li>
                            </ul>
                        </li>
                        <li className="nav-item plus">
                            <Link className="nav-link active" aria-current="page" to='/pageBalance'>0.00 <img src={plus} style={{ width: '10px' }} alt="not found" /></Link>
                        </li>
                        <li className="nav-item dropdown ticket1">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tickets
                            <span>0</span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to='/tickets'>My Tickets <span>0</span></Link></li>
                                <li><Link className="dropdown-item" to='/reports' >My Reports<span>0</span></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown account1">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Account
                           <img src={account} alt="not found" style={{ width: '20px' }} />
                            </a>
                            <ul className="dropdown-menu submenu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className="dropdown-item" to={'/setting'}>Settings  <img src={setting} alt="not found" /></Link></li>
                                <li><Link className="dropdown-item" to={'/orders'}>Orders <span>0</span>  <img src={order} alt="not found" /></Link></li>
                                <li><Link className="dropdown-item" to={'/pageBalance'}>Add Balance  <img src={balance} alt="not found" /></Link></li>
                                <li><Link className="dropdown-item" to={'/'}>Logout  <img src={logout} alt="not found" /></Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
