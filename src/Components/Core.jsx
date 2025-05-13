import React from 'react'
import Card from './Card';
import'../App.css'
const coreEngineering = [
  { name: "Anushka Pal", company: "HPCL" },
  { name: "Debjani Das", company: "PharmaACE" },
  { name: "Deepanshi Maheshwari", company: "Battery Smart" },
  { name: "Sandeep Yadav", company: "Tata Motors" },
  { name: "Rohit Prakash", company: "L&T" },
  { name: "Aarti Kapoor", company: "Siemens" },
  { name: "Siddhi Agarwal", company: "Bosch" },
  { name: "Shubham Sharma", company: "Tata Steel" },
  { name: "Neha Rathi", company: "Reliance Industries" },
  { name: "Vinay Kumar", company: "GE Power" },
  { name: "Harsh Vardhan", company: "Jaguar Land Rover" },
  { name: "Rachit Jain", company: "Mahindra & Mahindra" },
  { name: "Anjali Desai", company: "Hyundai Motors" },
  { name: "Sahil Joshi", company: "Indian Oil Corporation (IOCL)" },
  { name: "Vandana Verma", company: "BHEL" },
  { name: "Gaurav Soni", company: "HPCL" },
  { name: "Sushmita Reddy", company: "Schneider Electric" },
  { name: "Aniket Agrawal", company: "ABB India" },
  { name: "Vishal Arora", company: "L&T Construction" },
  { name: "Nikhil Verma", company: "Tata Power" }
];

function Core() {
  return (
    <div>
      <h1>Core</h1>
      <div className="gr">
     {
 coreEngineering.map((person,index)=>{
      
        return <Card key={index} name={person.name} company={person.company} />;
    
 })

     }

      </div>


    </div>
  )
}


export default Core
