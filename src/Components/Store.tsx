import React, { useState, useEffect } from "react";
import axios from "axios";
import Button, { Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";

const apidata = "https://fakestoreapi.com/products";
export default function Store() {
  const [title, setTitle] = useState([]);
  const [image, setImage] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    async function getStoreData() {
      const response = await axios.get(`${apidata}/3`);
      console.log(response);
      setTitle(response.data.title);
      setImage(response.data.image);
      setPrice(response.data.price);
    }
    getStoreData();
  }, []);
  return (
    <>
      <h2 className="text-warning p-4">Hi...</h2>
      <div className=" ">
        <Card
          className=" border border-success d-flex align-items-center justify-content-between  "
          style={{ width: "18rem" }}
        >
          <Card.Body>
            <Card.Title>
              <h2>{title}</h2>
            </Card.Title>
            <Card.Img
              src={image}
              style={{ width: "150px", height: "150px" }}
              className="card-img-top"
              alt="..."
            />
          </Card.Body>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
          <Card.Footer className="bg-transparent border-success">
            <p> {formatCurrency(price)}</p>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}
