import React from 'react';
import './quizDataStyles.css'
import UploadImg from '../images/downloadUopload.svg'
import Button from './Button';
import FullNameInput from "./FullNameInput";
import UserAddress from './UserAddress';
import JobStatus from './JobStatus';
import HouseCheck from './HouseCheck';
import Agree from './Agree';
import TypeOfPurchase from './TypeOfPurchase';
import Terms from './Terms';
import RequestedLoan from './RequestedLoan';
import WorkPlace from './WorkPlace';
import MonthlyIncome from './MonthlyIncome';
import Interest from './Interest';
import LoanRepayFreq from './LoanRepayFreq';
import LoanRepayment from './LoanRepayment';
import BankName from './BankName';
import BranchName from './BranchName';
import AccountNo from './AccountNo';
import Cosigner from './Cosigner';
import CosignerDT from './CosignerDT';
import Proof from './Proof'



  const QuizData = [
    {
      id: 0,
      question: "Fill in your details",
      options: [<FullNameInput />],
      answer: "rererre",
    },
    {
      id: 1,
      question: "Address",
      options: [<UserAddress />],
      answer: "rererre",
    },
    {
      id: 2,
      question: "Job Status",
      options: [<JobStatus />],
      answer: "rererre",
    },
    {
      id: 3,
      question: "Where do you work?",
      options: [<WorkPlace />],
      answer: "rererre",
    },
    {
      id: 4,
      question: "Monthly Net Income",
      options: [<MonthlyIncome />],
      answer: "rererre",
    },
    {
      id: 5,
      question: "Do you own or rent your house?",
      options: [<HouseCheck />],
      answer: "rererre",
    },
    {
      id: 6,
      question: "Proof of Assets & Income",
      options: [
        <Proof/>
      ],
      answer: "rererre",
    },
    {
      id: 7,
      question: "Type of purchase",
      options: [<TypeOfPurchase />],
      answer: "rererre",
    },
    {
      id: 8,
      question: "Terms",
      options: [<Terms />],
      answer: "rererre",
    },
    {
      id: 9,
      question: "Requested Loan Amount",
      options: [<RequestedLoan />],
      answer: "rererre",
    },
    {
      id: 10,
      question: "Interest Amount",
      options: [
        <Interest/>
      ],
      answer: "rererre",
    },
    {
      id: 11,
      question: "Loan Repayment Amount",
      options: [
        <LoanRepayment/>
      ],
      answer: "rererre",
    },
    {
      id: 12,
      question: "Loan Repayment Frequency",
      options: [
        <LoanRepayFreq/>
      ],
      answer: "rererre",
    },
    {
      id: 13,
      question: "Bank Name",
      options: [
        <BankName/>
      ],
      answer: "rererre",
    },
    {
      id: 14,
      question: "Branch Name",
      options: [
        <BranchName/>
      ],
      answer: "rererre",
    },
    {
      id: 15,
      question: "Account Number",
      options: [
        <AccountNo/>
      ],
      answer: "rererre",
    },
    {
      id: 16,
      question: "Co-signer Detail",
      options: [
        <Cosigner/>
      ],
      answer: "rererre",
    },
    {
      id: 17,
      question: "Co-signer's Current Address",
      options: [
        <CosignerDT/>
      ],
      answer: "rererre",
    },
    {
      id: 18,
      question: "",
      options: [<Agree />],
      answer: "rererre",
    },
    {
      id: 19,
      question: "Date",
      options: [
        <div>
          <input type="date" />
        </div>,
      ],
      answer: "rererre",
    },
    {
      id: 20,
      question: "Applicant Signature",
      options: [
        <div>
          <Button />
        </div>,
      ],
      answer: "rererre",
    },
    {
      id: 21,
      question: "Date",
      options: [
        <div>
          <input type="date" />
        </div>,
      ],
      answer: "rererre",
    },
    {
      id: 22,
      question: "Co-signer's Signature",
      options: [
        <div>
          <Button />
        </div>,
      ],
      answer: "rererre",
    },
  ];

export default QuizData