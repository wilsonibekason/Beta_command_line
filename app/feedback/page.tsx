"use client"

import { FormEvent, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";

const initialState = {
  name: "",
  email: "",
  message: " ",
};

export default async function Feedback() {
  const [data, setDate] = useState(initialState);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
    const { email, message, name } = data;

    // send data to Api Route
    const res = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message, name }),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <>
      <div></div>
    </>
  );
}
