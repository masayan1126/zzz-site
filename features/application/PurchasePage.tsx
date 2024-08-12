"use client";

import React from "react";
import { useRouter } from "next/navigation";
import usePurchaseForm from "./usePurchaseForm";
import PageTitle from "@/shared/components/PageTitle";

const PurchasePage = () => {
  const { name, setName, address, setAddress, isFormValid } = usePurchaseForm();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      router.push("/purchasing-confirm");
    } else {
      alert("Please fill in both name and address.");
    }
  };

  return (
    <div>
      <PageTitle title="購入手続き" />

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default PurchasePage;
