import "./App.css";
import DateType from "./components/datetype/DateType";
import Cards from "./components/cards/Cards";
import Gradient from "./components/gradient/Gradient";
import { useState } from "react";

function App() {
  const [planType, setPlanType] = useState("monthly");

  const monthlyPlans = [
    {
      title: "Basic",
      price: "$125",
      date: "/Month",
      features: [
        "elit. Unde, quae",
        "Perspiciatis, deleniti",
        "elit. Asperiores, laborum",
        "Perspiciatis, deleniti",
      ],
    },
    {
      title: "proffesional",
      price: "$225",
      date: "/Month",
      features: [
        "elit. Unde, quae",
        "elit. Asperiores, laborum",
        "Perspiciatis, deleniti",
      ],
    },
    {
      title: "Custom",
      price: "$325",
      date: "/Month",
      features: [
        "elit. Unde, quae",
        "elit. Asperiores, laborum",
        "Perspiciatis, deleniti",
        "elit. Asperiores, laborum",
      ],
    },
  ];

  const annuallyPlans = [
    {
      title: "Basic",
      price: "$325",
      date: "/Annually",
      features: [
        "elit. Unde, quae",
        "elit. Asperiores, laborum",
        "elit. Unde, quae",
        "Perspiciatis, deleniti",
      ],
    },
    {
      title: "proffesional",
      price: "$425",
      date: "/Annually",
      features: [
        "elit. Unde, quae",
        "elit. Asperiores, laborum",
        "Perspiciatis, deleniti",
      ],
    },
    {
      title: "Custom",
      price: "$525",
      date: "/Annually",
      features: [
        "elit. Unde, quae",
        "Perspiciatis, deleniti",
        "elit. Asperiores, laborum",
        "Perspiciatis, deleniti",
      ],
    },
  ];

  return (
    <div className="container">
      <h1 className="title-pricing">Star Scalling Your Bussines Now</h1>
      <p className="text-below">
        Select from best plan,ensuring a perfect match
      </p>
      <DateType currentPlan={planType} onChangePlan={setPlanType} />
      <Cards plans={planType === "monthly" ? monthlyPlans : annuallyPlans} />
      <Gradient />
    </div>
  );
}

export default App;
