import React from 'react'
import './results.css'

export default function Results() {
    const txt = localStorage.getItem("user");
    const obj = JSON.parse(txt);
    //
    const add = localStorage.getItem("userAddress");
    const add1 = JSON.parse(add);
    //
    const jStatus = localStorage.getItem("userJob");
    const jStatus1 = JSON.parse(jStatus);
    //
    const jStat = localStorage.getItem("employment");
    // const jStatus2 = JSON.parse(jStat);
    //
    const workAdd = localStorage.getItem("userWorkAddress");
    const workAdd1 = JSON.parse(workAdd);
    //
    const userIncome = localStorage.getItem("userIncome");
    const userIncome1 = JSON.parse(userIncome);
    //
    const reqLoan = localStorage.getItem("userRequestedLoan");
    const reqLoan1 = JSON.parse(reqLoan);
    //
    const int = localStorage.getItem("userInterest");
    const int1 = JSON.parse(int);
    //
    const repay = localStorage.getItem("userLoanRepay");
    const repay1 = JSON.parse(repay);
    //
    const repayFreq = localStorage.getItem("userLoanRepayFreq");
    const repayFreq1 = JSON.parse(repayFreq);
    //
    const bank = localStorage.getItem("userBankName");
    const bank1 = JSON.parse(bank);
    //
    const branch = localStorage.getItem("userBranchName");
    const branch1 = JSON.parse(branch);
    //
    const acc = localStorage.getItem("userAccountNo");
    const acc1 = JSON.parse(acc);
    //
    const coS = localStorage.getItem("coSigner");
    const coS1 = JSON.parse(coS);
    //
    const cosAd = localStorage.getItem("coSignerDT");
    const cosAd1 = JSON.parse(cosAd);
    //
    return (
      <div className="resultWrapper">
        <div className="card1">
          <div className="row1">
            <div className="col1">
              <h3>Your Details</h3>
              <ul>
                <li>{obj.firstname}</li>
                <li>{obj.lastname}</li>
                <li>{obj.doB}</li>
                <li>{obj.iD}</li>
                <li>{obj.phone}</li>
                <li>{obj.email}</li>
              </ul>
            </div>
            <div className="col2">
              <h3>Your Address</h3>
              <ul>
                <li>{add1.address}</li>
                <li>{add1.street_adress}</li>
                <li>{add1.adress2}</li>
                <li>{add1.state1}</li>
                <li>{add1.city}</li>
                <li>{add1.postal}</li>
              </ul>
            </div>
            <div className="col3">
              <h3>Job Status</h3>
              <ul>
                {/* <li>Not Employed</li> */}
                <li>{jStat}</li>
              </ul>
            </div>
          </div>

          <div className="row1">
            <div className="col1">
              <h3>Your Place of Work</h3>
              <ul>
                <li>{obj.firstname}</li>
                <li>{obj.lastname}</li>
                <li>{obj.doB}</li>
                <li>{obj.iD}</li>
                <li>{obj.phone}</li>
                <li>{obj.email}</li>
              </ul>
            </div>
            <div className="col2">
              <h3>Your Address</h3>
              <ul>
                <li>{workAdd1.workplace}</li>
                <li>{workAdd1.jobtitle}</li>
                <li>{workAdd1.workaddress}</li>
                <li>{workAdd1.streetaddress}</li>
                <li>{workAdd1.streetaddress2}</li>
                <li>{workAdd1.state1}</li>
                <li>{workAdd1.city}</li>
                <li>{workAdd1.postal}</li>
              </ul>
            </div>
            <div className="col3">
              <h3>Monthly Net Income</h3>
              <ul>
                <li>{userIncome1.income}</li>
              </ul>
              <h3>Do you own or rent your house?</h3>
              <ul>
                <li>{localStorage.getItem("houseCheck")}</li>
              </ul>
              <h3>Proof of Assets & Income</h3>
              <ul>
                <li className="imgWrapper">
                  <img src={localStorage.getItem("fileBase64")} alt="img" />{" "}
                </li>
              </ul>
              {/* <h3>Proof ID Card</h3> */}
              <ul>
                <li className="imgWrapper">
                  {/* <img src={localStorage.getItem("fileID")} alt="img" />{" "} */}
                </li>
              </ul>
            </div>
          </div>

          <div className="row1">
            <div className="col1">
              <h3>Type of purchase</h3>
              <ul>
                <li>{localStorage.getItem("typeOfPurchaseCheck")}</li>
              </ul>
              <h3>Terms</h3>
              <ul>
                <li>{localStorage.getItem("termsCheck")}</li>
              </ul>
            </div>
            <div className="col2">
              <h3>Requested Loan Amount</h3>
              <ul>
                <li>{reqLoan1.requestedloan}</li>
              </ul>
              <h3>Interest Amount</h3>
              <ul>
                <li>{int1.interest}</li>
              </ul>
              <h3>Loan Repayment Amount</h3>
              <ul>
                <li>{repay1.loanrepay}</li>
              </ul>
              <h3>Loan Repayment Frequency</h3>
              <ul>
                <li>{repayFreq1.loanrepayfreq}</li>
              </ul>
            </div>
            <div className="col3">
              <h3>Bank Name</h3>
              <ul>
                <li>{bank1.bankname}</li>
              </ul>
              <h3>Branch Name</h3>
              <ul>
                <li>{branch1.branchname}</li>
              </ul>
              <h3>Account Number</h3>
              <ul>
                <li>{acc1.accountno}</li>
              </ul>
            </div>
          </div>

          <div className="row1">
            <div className="col1">
              <h3>Co-signer Detail</h3>
              <ul>
                <li>{coS1.firstname}</li>
                <li>{coS1.lastname}</li>
                <li>{coS1.iD}</li>
                <li>{coS1.phone}</li>
              </ul>
            </div>
            <div className="col2">
              <h3>Co-signer's Current Address</h3>
              <ul>
                <li>{cosAd1.address}</li>
                <li>{cosAd1.street_adress}</li>
                <li>{cosAd1.street_adress2}</li>
                <li>{cosAd1.state1}</li>
                <li>{cosAd1.city}</li>
                <li>{cosAd1.postal}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}
