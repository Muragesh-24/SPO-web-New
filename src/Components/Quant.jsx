import React from 'react'
import './Components.css'
import Card from './Card';
import'../App.css'
const quantFinanceCompanies = [
  { name: "Advait Vashi", company: "Finmechanics" },
  { name: "Alok Kumar Thakur", company: "Navi" },
  { name: "Aryash Pateria", company: "Sprinklr" },
  { name: "Ashwin Agarwal", company: "Goldman Sachs" },
  { name: "Nikita Sharma", company: "JP Morgan" },
  { name: "Krishna Chaitanya", company: "ICICI Bank" },
  { name: "Prithvi Narayan", company: "Barclays" },
  { name: "Ankita Patil", company: "Morgan Stanley" },
  { name: "Rohan Mehra", company: "Bank of America" },
  { name: "Rajesh Kumar", company: "Citibank" },
  { name: "Vishal Gupta", company: "Fidelity Investments" },
  { name: "Jatin Sharma", company: "Deutsche Bank" },
  { name: "Rekha Kumari", company: "HSBC" },
  { name: "Nitin Kapoor", company: "Nomura" },
  { name: "Madhur Mittal", company: "Ernst & Young" },
  { name: "Kunal Mehta", company: "Wells Fargo" },
  { name: "Shivendra Kumar", company: "BlackRock" },
  { name: "Aparna Rao", company: "Macquarie" },
  { name: "Tanvi Joshi", company: "Standard Chartered" },
  { name: "Puneet Singh", company: "Bank of America Merrill Lynch" }
];

function Quant() {
  return (
    <div>
      <h1>Quant/Finance</h1>
      <div className="gr">

{
    quantFinanceCompanies.map((person,index)=>{
        return <Card key={index} name={person.name} company={person.company} />;
    })
}

      </div>
    </div>
  )
}

export default Quant
