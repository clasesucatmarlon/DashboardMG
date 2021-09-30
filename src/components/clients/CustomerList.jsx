import React, { useState, useEffect } from "react";
import { Box, Container } from "@material-ui/core";
import { firebaseFindClients } from "../../utils/FirebaseUtil";

import CustomerListResults from "./CustomerListResults";
import CustomerListToolbar from "./CustomerListToolbar";

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
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
        >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          
          <h1>CUSTOMERS</h1>
          <Box sx={{ pt: 3 }}>
            <CustomerListResults customers={customers} />
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default CustomerList;
