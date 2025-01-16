import React from "react";
import { useParams } from "react-router";
import data from "../data.json";
function DetailPage() {
  const params = useParams();
  const detailData = data.find((item) => item.id === params.id);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{detailData.title}</h1>
      <p>{detailData.description}</p>
    </div>
  );
}

export default DetailPage;
