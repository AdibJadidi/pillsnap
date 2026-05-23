import React from "react";
import UserForm from "./UserForm";
import PillForm from "./PillForm";

const AdminPanel = () => {
  return (
    <div className="space-y-2">
      <UserForm />

      <PillForm />
    </div>
  );
};

export default AdminPanel;
