import React, { useState, useEffect } from "react";

import { Box, Container } from "@material-ui/core";
import { firebaseFindClients } from "../../utils/FirebaseUtil";
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    buscarClients();
  }, []);

  const buscarClients = async (db) => {
    let clients = await firebaseFindClients("clientes"); // colección en Firebase
    setCustomers(clients);
  };

  return (
    <div className="customers">
      <h1>Customers</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {
            customers.map(item => (
              <tr>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
