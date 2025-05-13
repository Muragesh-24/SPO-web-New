import React from 'react';
import Card from './Card';
import './Components.css'
import'../App.css'
const employees = [
  { name: "Abhay Gupta", company: "OLA" },
  { name: "Abhishek Pardhi", company: "Google" },
  { name: "Aishwarya Srivastava", company: "Navi" },
  { name: "Aryan Garg", company: "Uniorbit Technologies" },
  { name: "Dinesh Kumar", company: "Accenture" },
  { name: "Amit Kumar", company: "Microsoft" },
  { name: "Ravi Mishra", company: "Amazon" },
  { name: "Nidhi Yadav", company: "SAP" },
  { name: "Pooja Patel", company: "Infosys" },
  { name: "Rahul Mehta", company: "Cognizant" },
  { name: "Ananya Verma", company: "TCS" },
  { name: "Siddharth Rao", company: "Tech Mahindra" },
  { name: "Neha Rajput", company: "Wipro" },
  { name: "Karthik Nair", company: "Nvidia" },
  { name: "Priya Sharma", company: "Oracle" },
  { name: "Aditya Singh", company: "ZS Associates" },
  { name: "Vikram Soni", company: "IBM" },
  { name: "Akash Jain", company: "HCL Technologies" },
  { name: "Ritika Singh", company: "L&T Infotech" },
  { name: "Sumit Gupta", company: "Mindtree" }
];

function Software() {
  return (
    <div>
      <h1>Software-Tech</h1>
      <div className="gr">
      {
        employees.map((employee, index) => {
          return <Card key={index} name={employee.name} company={employee.company} />;
        })
      }
      </div>
    </div>
  );
}

export default Software;
