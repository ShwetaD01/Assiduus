import React from 'react';
import Card from './Card';

const Account = () => {
  return (
    <div className="grid  grid-flow-col p-4 m-4">
     
   
      <table>
  <tr className="text-gray-300">
 
  <th>Account</th>
    <th>This Month</th>
    <th>YTD</th>
    
  </tr>
  <tr className="justify-evenly">
    <td>Sales</td>
    <td>1194.58</td>
    <td>11,418.29</td>
  </tr>
  <tr>
    <td>Advertising</td>
    <td>6879.02</td>
    <td>9,271.36</td>
  </tr>
  <tr>
    <td>Inventory</td>
    <td>4692.26</td>
    <td>9768.09</td>
  </tr>
  <tr>
    <td>Entertainment</td>
    <td>00.00</td>
    <td>00.00</td>
  </tr>
  <tr>
    <td>Product</td>
    <td>4652.10</td>
    <td>2529.90</td>
  </tr>
</table>



      
    </div>
  )
}

export default Account;
