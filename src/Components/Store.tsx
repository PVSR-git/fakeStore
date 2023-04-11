import React, { useState, useEffect } from "react";
import axios from "axios";
const apidata = "https://fakestoreapi.com/products ";
export default function Store() {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    async function getStoreData() {
      const response = await axios.get(apidata);
      console.log(response);
      setTitle(response.data.title);
    }
    getStoreData();
  }, []);
  return (
    <>
      <h3 className="text-warning p-4">Hi...</h3>
      <div></div>
    </>
  );
}
