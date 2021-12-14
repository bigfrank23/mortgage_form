import React from 'react'
import PageImg from "../images/swedbank-logo.svg";
import '../components2/styles.css'
import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div className="container">
        <div className="pageHeader__wrapper">
          <img src={PageImg} alt="PGImg" className="pageHeaderImg" />
          <h4 className="page_HeaderTxt">Mortgage Loan</h4>
        </div>

        <hr />
        <div className="bG options">
          <p className="col options">Welcome and thanks for choosing us! </p>{" "}
          <br />
          <br />
          To start, we’ll collect some basic details about you. We ask these
          questions up front, so we have your details on record. <br />
          <br />
          Please fill the form carefully, and correctly follow
          our instructions as it is very iportant for the loan completion.
          <br />
          <br />
          By clicking the button below you are assuming financia obigations. Improper fulfilment
          or non-fulfilment of financial obligations may have negative impact on your credit history
          and make borrowing more expensive and almost impossible; you also risk ownership rights to the
          mortgaged real estate
        </div>

        <div className="navBtn__wrapper">
          <Link to="/quiz">
            <button className="start finishBtn">Enter Now</button>
          </Link>
        </div>
      </div>
    );
}
