"use client";
import Image from "next/image";
import rulesImage from "../../public/images/image-rules.svg";
import { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1rem",
    display: "grid",
    gap: "2rem",
    paddingInline: "2rem",
  },
};

const Rules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <button
        className="ease absolute bottom-10 right-20 rounded-lg border border-white bg-transparent px-10 py-3 font-Barlow300 text-xl leading-3 tracking-wider text-white transition hover:bg-white hover:font-Barlow600 hover:text-blue-800"
        onClick={showModal}
      >
        RULES
      </button>
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h2 className="px-2 font-Barlow700 text-4xl  tracking-tighter text-gray-700">
          RULES
        </h2>
        <Image
          src={rulesImage}
          alt="rules"
          width={300}
          height={300}
          className="px-5"
        ></Image>
      </Modal>
    </>
  );
};

export default Rules;
