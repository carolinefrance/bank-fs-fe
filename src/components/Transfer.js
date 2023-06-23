// Transfer.js
import React, { useState, useContext, useEffect } from "react";
import { UserContext, baseUrl } from "../App";
import { Card, Button, Form } from "react-bootstrap";
import "./styles/Card.css";

export function Transfer({loggedInUser, setLoggedInUser, updateUser, updateUserBalance}) {
  const [amount, setAmount] = useState("");
  const ctx = useContext(UserContext);
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const recipient = users.find(user => user._id === selectedUser);
  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    fetch(`${baseUrl}/users`)
      .then(res => res.json())
      .then(users => setUsers(users))
      .catch(err => console.log(err));
  }

  const handleTransfer = () => {
    if (!validate(amount, "amount")) return;
    if (!selectedUser) {
      setStatus("Error: select a recipient.");
      reset();
      return;
    }
    
    fetch (`${baseUrl}/users/${loggedInUser._id}/${recipient._id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({transferAmount: Number(amount), senderBalance: loggedInUser.balance, recipientBalance: recipient.balance}),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            showSuccess();
            setLoggedInUser({...loggedInUser, balance: loggedInUser.balance - Number(amount)});
        })
  };

  function reset() {
    setTimeout(() => {
      setStatus("");
      setAmount("");
    }, 4000);
  }

  function showSuccess() {
    setStatus(`Your transfer of $${amount} to ${recipient.name} was successful!`)
    reset();
  }

  function validate(field, label) {

    if (isNaN(field)) {
      setStatus("Error: enter numerical values only.");
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
    else if (loggedInUser.balance - Number(amount) < 0) {
      setStatus("Transaction failed: must be less than your current balance.");
      reset();
      return false;
    }
    return true;
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card className="white" style={{ width: "35rem" }}>
        <Card.Img variant="top"
          src={`${process.env.PUBLIC_URL}/images/image-transfer.jpeg`} alt="card image cap"
        />
        <Card.Body>
          <Card.Title>Transfer</Card.Title>
          <Card.Text>Your current balance is ${loggedInUser?.balance}</Card.Text>
          <Form>
            <input type="text" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            <select onChange={(e)=>setSelectedUser(e.target.value)}>
                <option value="">Select recipient</option>
                {users.map((user, index) => (
                    <option key={index} value={user._id}>{user.name}-{user.email}</option>
                ))}
            </select>
            {status && <p>{status}</p>}
            <Button type="button" className="btn btn-light" onClick={handleTransfer} disabled={status !== "" || amount === ""}
            >
              Transfer
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Transfer;