import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PaidIcon from '@mui/icons-material/Paid';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import ContactsIcon from '@mui/icons-material/Contacts';

const SideBar = () => {
  return (
   
       <div className="bg-white w-1/4">
        <ul className="m-2 p-2">
          <li className="m-2 p-2 cursor-pointer hover:bg-green-600"><DashboardIcon fontSize="small"></DashboardIcon> Dashboard</li>
          <li className="m-2 p-2 cursor-pointer hover:bg-green-600"> <AccountBalanceWalletIcon fontSize="small"></AccountBalanceWalletIcon> Account</li>
          <li className="m-2 p-2 cursor-pointer hover:bg-green-600"><PaidIcon fontSize="small" ></PaidIcon> Payroll</li>
          <li className="m-2 p-2 cursor-pointer hover:bg-green-600"><ArticleIcon fontSize="small"></ArticleIcon> Report</li>
          <li className="m-2 p-2 cursor-pointer hover:bg-green-600"> <PersonIcon fontSize="small"></PersonIcon> Advisor</li>
          <li className="m-2 p-2 cursor-pointer hover:bg-green-600"> <ContactsIcon fontSize="small"></ContactsIcon> Contacts</li>
    
        </ul>
      </div>
    
  )
}

export default SideBar
