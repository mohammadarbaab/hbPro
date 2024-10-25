import React from "react";
import "./Supplier.css";
// import { Link } from "react-router-dom";

function SupplierFind() {
  return (
    <div className="supp-container">
      <div class="supp-left">
        <h1>
          Let Suppliers <span>Find You</span>
        </h1>
      </div>
      <div className="supp-right">
        <a href="/signup">
          <button>Get Verified</button>
        </a>
      </div>
    </div>
  );
}

export default SupplierFind;