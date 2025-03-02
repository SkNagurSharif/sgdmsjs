import { Button } from "@mui/material";

interface CustomButtonProps {
    label: string;
    variant?: "text" | "outlined" | "contained";
    color?: "inherit" | "primary" | "secondary" | "success" | "error";
    onclick: (event: React.MouseEvent<HTMLElement>) => void;
    fullWidth?: boolean;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label,
    variant = "contained",
    color = "primary",
    onclick,
    fullWidth = false,
    disabled = false
}) => {
    return (
        <Button
            variant={variant}
            color={color}
            onClick={onclick}
            fullWidth={fullWidth}
            disabled={disabled}
    sx={{
        borderRadius: '8px',
        padding: '10px 20px',
        fontWeight: "bold",
        textTransform: "none",
    }}
>
    { label }
        </Button >
    );
}
export default CustomButton;