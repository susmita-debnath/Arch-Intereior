import React from "react";
import Header from "../components/Dashboard/Header";
import "../CSS/DashboardPage.css";
import img from "../Assets/Images/quote_image.jpg";
import CardElement from "../components/Dashboard/CardElement";
import { CardText } from "../components/Dashboard/CardText";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="Header">
        <Header></Header>
      </div>

      <div className="Quote">
        <div className="cardText">
          <CardText></CardText>
        </div>
        <div className="card">
          <CardElement></CardElement>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
