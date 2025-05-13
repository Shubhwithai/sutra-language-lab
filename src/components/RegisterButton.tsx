
import { useState } from "react";
import { Button } from "@/components/ui/button";
import RegisterModal from "./RegisterModal";

type RegisterButtonProps = {
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

const RegisterButton = ({ 
  className, 
  variant = "default",
  size = "default" 
}: RegisterButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button
        className={className}
        variant={variant}
        size={size}
        onClick={() => setIsModalOpen(true)}
      >
        Register Now
      </Button>
      <RegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default RegisterButton;
