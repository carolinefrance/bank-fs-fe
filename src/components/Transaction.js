// Transaction.js based on Deposit.js, has Deposit and Withdraw functionality
import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import Card from "react-bootstrap/Card";
import "./styles/Card.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { baseUrl } from "../App";

export function Transaction({loggedInUser, setLoggedInUser}) {
  const [amount, setAmount] = useState("");
  // const ctx = useContext(UserContext); <-- error, never used
  const [status, setStatus] = useState("");

  const handleDeposit = async() => {
    if (!validate(amount, "amount")) return;
    /* FE VERSION --- const updatedUser = { ...loggedInUser, balance: loggedInUser.balance + Number(amount) }; */
    try {
    const response = await fetch(`${baseUrl}/users/${loggedInUser._id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({balance: loggedInUser.balance + Number(amount)}),
    });
    await response.json();
    setLoggedInUser({ ...loggedInUser, balance: loggedInUser.balance + Number(amount) });
    /* FE VERSION --- updateUser(updatedUser);
    updateUserBalance(updatedUser); */
    showDepositSuccess();
    }
    catch (err) {
      console.log(err);
    }
  };

const handleWithdraw = async() => {
    if (!validate(amount, "amount")) return;
    if (Number(amount) > loggedInUser.balance) {
      setStatus("Error: You cannot withdraw more than your current balance.");
      reset();
      return;
    }
    /* FE VERSION ---- const updatedUser = { ...loggedInUser, balance: loggedInUser.balance - Number(amount) };
    updateUser(updatedUser);
    updateUserBalance(updatedUser);
    showWithdrawSuccess();*/
    try {
      const response = await fetch(`${baseUrl}/users/${loggedInUser._id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({balance: loggedInUser.balance - Number(amount)}),
      });
      await response.json();
      setLoggedInUser({ ...loggedInUser, balance: loggedInUser.balance - Number(amount) });
      /* FE VERSION --- updateUser(updatedUser);
      updateUserBalance(updatedUser); */
      showWithdrawSuccess();
      }
      catch (err) {
        console.log(err);
      }
  };

  function reset() {
    setTimeout(() => {
      setStatus("");
      setAmount("");
    }, 4000);
  }

  function showDepositSuccess() {
    setStatus(`Your deposit of $${amount} was successful!`)
    reset();
  }

  function showWithdrawSuccess() {
    setStatus(`Your withdrawl of $${amount} was successful!`)
    reset();
  }

  function validate(field, label) {

    if (isNaN(field)) {
      setStatus("Error: " + label + " should be a number.");
      reset();
      return false;
    } else if (Number(field) < 0) {
      setStatus("Error: " + label + " cannot be negative.");
      reset();
      return false;
    }
    else if (!field) {
      setStatus("Error: " + label + " cannot be empty.");
      reset();
      return false;
    }
    return true;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ width: "35rem" }}>
        <Card.Img
          variant="top"
          src={`${process.env.PUBLIC_URL}/images/image-transaction.jpg`}
          alt="card image cap"
        />
        <Card.Body>
          <Card.Title>Transaction</Card.Title>
          <Card.Text>Your current balance is ${loggedInUser?.balance}</Card.Text>
          <Form>
            <input
              type="text"
              className="form-control"
              id="amount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            {status && <p>{status}</p>}
            <Button type="button" className="btn btn-light" onClick={handleDeposit} disabled={status !== "" || amount === ""}>
            Deposit
            </Button>
            <Button type="button" className="btn btn-light" onClick={handleWithdraw} disabled={status !== "" || amount === ""}>
            Withdraw
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Transaction;