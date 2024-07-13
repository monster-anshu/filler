"use client";
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import AddModal from "./AddModal";

function AddButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <AddModal onHide={() => setOpen(false)} />}
      <button
        className="fixed bottom-4 border p-3 right-4 shadow-lg rounded-full"
        onClick={() => setOpen(true)}
      >
        <GoPlus size={30} />
      </button>
    </>
  );
}

export default AddButton;
