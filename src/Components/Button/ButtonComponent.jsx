import { Button } from "@mui/material";

const ButtonComponent = ({ sx, text,onClick  }) => {
  return (
    <Button
      variant="contained"
      sx={sx} 
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
