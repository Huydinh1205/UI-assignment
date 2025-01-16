import React from "react";
import data from "../data.json";
import { Container, Grid } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import BasicCard from "../components/BasicCard";
function HomePage() {
  const [selectedButton, setSelectedButton] = useState(1);
  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };
  return (
    <Container
      sx={{
        mt: 4,
        display: "flex", // Sử dụng flexbox
        justifyContent: "center", // Căn giữa theo chiều ngang
        alignItems: "center", // Căn giữa theo chiều dọc nếu cần
        flexDirection: "column",
      }}
    >
      <Grid container spacing={2}>
        {data.slice(selectedButton * 5 - 5, selectedButton * 5).map((item) => (
          <Grid item xs={12} sm={4}>
            <BasicCard key={item.id} data={item} />
          </Grid>
        ))}
      </Grid>
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        sx={{ margin: 10 }}
      >
        <Button
          onClick={() => handleButtonClick(1)}
          sx={{
            backgroundColor: selectedButton === 1 ? "yellow" : "black", // Nền màu cam khi được chọn, đen khi không
            color: selectedButton === 1 ? "black" : "white", // Chữ đen khi được chọn, trắng khi không
            borderColor: selectedButton === 1 ? "white" : "yellow", // Viền trắng khi được chọn, cam khi không
            fontWeight: selectedButton === 1 ? "bold" : "normal", // Đậm khi chọn
          }}
        >
          1
        </Button>
        <Button
          onClick={() => handleButtonClick(2)}
          sx={{
            backgroundColor: selectedButton === 2 ? "yellow" : "black", // Nền màu cam khi được chọn, đen khi không
            color: selectedButton === 2 ? "black" : "white", // Chữ đen khi được chọn, trắng khi không
            borderColor: selectedButton === 2 ? "white" : "yellow", // Viền trắng khi được chọn, cam khi không
            fontWeight: selectedButton === 2 ? "bold" : "normal", // Đậm khi chọn
          }}
        >
          2
        </Button>
        <Button
          onClick={() => handleButtonClick(3)}
          sx={{
            backgroundColor: selectedButton === 3 ? "yellow" : "black", // Nền màu cam khi được chọn, đen khi không
            color: selectedButton === 3 ? "black" : "white", // Chữ đen khi được chọn, trắng khi không
            borderColor: selectedButton === 3 ? "white" : "yellow", // Viền trắng khi được chọn, cam khi không
            fontWeight: selectedButton === 3 ? "bold" : "normal", // Đậm khi chọn
          }}
        >
          3
        </Button>
      </ButtonGroup>
    </Container>
  );
}

export default HomePage;
