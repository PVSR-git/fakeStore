import React, { useState, useEffect } from "react";
import axios from "axios";

const apidata = "https://fakestoreapi.com/products";
export default function Store() {
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState([]);

  useEffect(() => {
    async function getStoreData() {
      const response = await axios.get(`${apidata}/9`);
      console.log(response);
      setTitle(response.data.title);
      setImage(response.data.image);
      setDescription(response.data.description);
    }
    getStoreData();
  }, []);
  return (
    <>
      <h2 className="text-warning p-4">Hi...</h2>
      <div>
        <h2>{title}</h2>
        <span>
          <img src={image} style={{ width: "150px", height: "150px" }} />
        </span>
        <p>{description}</p>
      </div>
    </>
  );
}
