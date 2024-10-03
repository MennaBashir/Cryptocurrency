import Signin from "./Account/Signin";
import { Routes, Route } from "react-router-dom";
import ResetPassword from "./Account/ResetPassword";
import Signup from "./Account/Signup";
import Homepage from "./Home/Homepage/Homepage";
import Hosts from "./Home/Pages/Hosts/Hosts";
import Send from "./Home/Pages/Send/Send";
import Leads from "./Home/Pages/Leads/Leads";
import Webmails from "./Home/Pages/Webmails/Webmails";
import Accounts from "./Home/Pages/Accounts/Accounts";
import PageBalance from "./Home/Balance/PageBalance";
import Payment from "./Home/Balance/Payment";
import MyTickets from "./Home/Tickets/MyTickets";
import MyReports from "./Home/Tickets/MyReports";
import CreateTicket from "./Home/Tickets/CreateTicket";
import MyOrders from "./Home/Tickets/MyOrders";
import BecomeSeller from "./Home/Homepage/BecomeSeller";
import Terms from "./Home/Homepage/Terms";
import Setting from "./Account/Setting";
import OneTicket from "./Home/Tickets/OneTicket";
import { useSelector } from "react-redux";
function App() {
  const state = useSelector(state => state.Ticket);
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/home/*" element={<Homepage />} />
        <Route path="/home/cpanels" element={<Hosts category="cpanels" />} />
        <Route path="/home/shells" element={<Hosts category="shells" />} />
        <Route path="/home/ssh" element={<Hosts category="ssh" />} />
        <Route path="/home/rdp" element={<Hosts category="rdp" />} />
        <Route path="/home/smtp" element={<Send category="smtp" />} />
        <Route path="/home/mailers" element={<Send category="mailers" />} />
        <Route path="/home/emailOnly" element={<Leads category="emailOnly" />} />
        <Route path="/home/compoEmail" element={<Leads category="compoEmail" />} />
        <Route path="/home/emailAccess" element={<Leads category="emailAccess" />} />
        <Route path="/home/phoneNumber" element={<Leads category="phoneNumber" />} />
        <Route path="/home/fullData" element={<Leads category="fullData" />} />
        <Route path="/home/socialMedia" element={<Leads category="socialMedia" />} />
        <Route path="/home/cpanelWebmail" element={<Webmails category="cpanelWebmail" />} />
        <Route path="/home/godaddy" element={<Webmails category="godaddy" />} />
        <Route path="/home/officeGoddady" element={<Webmails category="officeGoddady" />} />
        <Route path="/home/office365" element={<Webmails category="office365" />} />
        <Route path="/home/rackspace" element={<Webmails category="rackspace" />} />
        <Route path="/home/lonos" element={<Webmails category="lonos" />} />
        <Route path="/home/emailMarketing" element={<Accounts category="emailMarketing" />} />
        <Route path="/home/webmailBusiness" element={<Accounts category="webmailBusiness" />} />
        <Route path="/home/hosting" element={<Accounts category="hosting" />} />
        <Route path="/home/vpn" element={<Accounts category="vpn" />} />
        <Route path="/home/shopping" element={<Accounts category="shopping" />} />
        <Route path="/home/stream" element={<Accounts category="stream" />} />
        <Route path="/home/learning" element={<Accounts category="learning" />} />
        <Route path="/home/torrent" element={<Accounts category="torrent" />} />
        <Route path="/home/socialAccount" element={<Accounts category="socialAccount" />} />
        <Route path="/home/other" element={<Accounts category="other" />} />
        <Route path="/pageBalance" element={<PageBalance />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/tickets" element={<MyTickets />} />
        <Route path="/reports" element={<MyReports />} />
        <Route path="/createTicket/:useId" element={<CreateTicket />} />
        <Route path="/orders" element={<MyOrders />} />
        <Route path="/becomeSeller" element={<BecomeSeller />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/specificTicket/:elementtitl" element={<OneTicket />} />
      </Routes>
    </>
  );
}

export default App;
