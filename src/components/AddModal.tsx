import Modal from "@/ui/modal/Modal";
import { useState } from "react";
import { Template } from "./Card";

type AddModalProps = {
  onHide: () => void;
};

function AddModal({ onHide }: AddModalProps) {
  const [text, setText] = useState("");
  const [title, settitle] = useState("");

  const handleAdd = () => {
    const str = localStorage.getItem("templates") || "[]";
    const arr = JSON.parse(str) as Template[];
    arr.push({
      template: text,
      title,
    });
    localStorage.setItem("templates", JSON.stringify(arr));
  };

  return (
    <Modal open onHide={onHide}>
      <Modal.Header>Add Template</Modal.Header>
      <Modal.Body className="space-y-2">
        <input
          type="text"
          className="bg-slate-100 w-full border rounded py-1.5 px-2"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
        <textarea
          value={text}
          rows={12}
          className="w-full block bg-slate-100 border p-2 rounded-lg text-sm"
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={handleAdd}
          className="px-2 py-2 rounded text-xs bg-gray-300"
        >
          Add Template
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddModal;
