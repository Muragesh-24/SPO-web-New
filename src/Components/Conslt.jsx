import React from 'react'
import Card from './Card';
import './Components.css'
import'../App.css'
const consultingRoles = [
  { name: "Gauri G Menon", company: "Publicis Sapient" },
  { name: "Debdeep Paul Chaudhuri", company: "United Airlines" },
  { name: "Aryan Garg", company: "Uniorbit Technologies" },
  { name: "Neelam Gupta", company: "Deloitte" },
  { name: "Aman Mittal", company: "McKinsey & Co." },
  { name: "Priya Patel", company: "Boston Consulting Group (BCG)" },
  { name: "Akash Sharma", company: "Bain & Co." },
  { name: "Ruchi Singh", company: "Accenture" },
  { name: "Ishaan Khurana", company: "KPMG" },
  { name: "Arjun Agarwal", company: "PwC" },
  { name: "Saanvi Sharma", company: "EY (Ernst & Young)" },
  { name: "Aakash Singhania", company: "ZS Associates" },
  { name: "Shalini Kumar", company: "Cognizant Consulting" },
  { name: "Varun Chopra", company: "Oliver Wyman" },
  { name: "Kiran Joshi", company: "Roland Berger" },
  { name: "Dinesh Agarwal", company: "Capgemini" },
  { name: "Tanushree Roy", company: "AT Kearney" },
  { name: "Sanjay Reddy", company: "Aon Hewitt" },
  { name: "Ritika Agarwal", company: "Oliver Wyman" },
  { name: "Meher Zaveri", company: "Accenture Strategy" }
];
const otherIndustries = [
  { name: "Aritra", company: "Accenture Solutions Pvt Ltd" },
  { name: "Chaithanya V", company: "Microsoft India" },
  { name: "Gudelli Shivakumar", company: "Hitachi" },
  { name: "Gaurav Shukla", company: "Sprinklr" },
  { name: "Disha Patel", company: "Deloitte India" },
  { name: "Karan Prakash", company: "ZS Associates" },
  { name: "Meenal Mishra", company: "Cleartrip" },
  { name: "Shreya Kapoor", company: "UrbanClap" },
  { name: "Sandeep Agarwal", company: "Swiggy" },
  { name: "Amit Kumar", company: "Byju’s" },
  { name: "Tanmay Gupta", company: "OYO Rooms" },
  { name: "Riya Desai", company: "Snapdeal" },
  { name: "Siddharth Chaturvedi", company: "OLA Cabs" },
  { name: "Madhuri Singh", company: "Tata Consultancy Services (TCS)" },
  { name: "Kritika Bhagat", company: "Unilever" },
  { name: "Rashmi Sharma", company: "Nielsen" },
  { name: "Shivani Choudhary", company: "Accenture Consulting" },
  { name: "Sanjay Kumar", company: "Nielsen" },
  { name: "Akash Yadav", company: "RedSeer Consulting" },
  { name: "Rupesh Ranjan", company: "Baidu" }
];

function Conslt() {
  return (
    <div>
      <h1>Consulting</h1>
      <div className="gr">
        {
            consultingRoles.map((person,index)=>{
                return  <Card key={index} name={person.name} company={person.company} />;
            })
        }
      </div>
      <h1>Other Industries</h1>
      <div className="gr">
        {
           
            otherIndustries.map((person,index)=>{
                return  <Card key={index} name={person.name} company={person.company} />;
            })
        }  
        
      </div>
    </div>
  )
}

export default Conslt
