import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router";

export default function BasicCard({ data }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ height: "100%", width: "100%" }}>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            textAlign: "center",
          }}
        >
          {data.title}
        </Typography>
        <hr />
        {data.skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            sx={{ margin: "3px", backgroundColor: "red" }}
          />
        ))}
        <Typography variant="body2">
          {data.description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          size="small"
          sx={{
            backgroundColor: "yellow", // Nền vàng
            color: "black", // Chữ đen
            "&:hover": {
              backgroundColor: "darkorange", // Màu nền khi hover
              color: "white", // Chữ đổi màu khi hover
            },
          }}
          onClick={() => {
            navigate(`/${data.id}`);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
