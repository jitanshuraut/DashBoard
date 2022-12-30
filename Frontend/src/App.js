
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Adim from "scenes/Adim";
import Breakdown from "scenes/Breakdown";
import Customers from "scenes/Customers";

import Dashboard from "scenes/Dashboard";
import Geography from "scenes/Geography";
import Layout from "scenes/Layout";
import Login from "scenes/Login";
import Monthly from "scenes/Monthly";
import Overview from "scenes/Overview";
import Performance from "scenes/Performance";
import Products from "scenes/Products";
import Transactions from "scenes/Transactions";


function App() {
  return (
    <div className="App">
      <BrowserRouter>


        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/overview" element={<Overview />} />

            <Route path="/monthly" element={<Monthly />} />
            <Route path="/breakdown" element={<Breakdown />} />
            <Route path="/admin" element={<Adim />} />
            <Route path="/performance" element={<Performance />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
