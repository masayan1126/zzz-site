import { useState } from "react";

const usePurchaseForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const isFormValid = name.trim() !== "" && address.trim() !== "";

  return {
    name,
    setName,
    address,
    setAddress,
    isFormValid,
  };
};

export default usePurchaseForm;
