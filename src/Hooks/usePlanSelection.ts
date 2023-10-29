import { useEffect, useState } from "react";

export type Plan = {
  title: string;
  price: number | "Free";
  benefits: string[];
  currency: "U$S";
  type: "monthly" | "daily" | "weekly";
};

export const usePlanSelection = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [plans, setPlans] = useState<Plan[]>([]);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  useEffect(() => {
    fetch(
      "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/subscription"
    )
      .then((response) => response.json())
      .then((result: Plan[]) => {
        setPlans(result);
      });
  }, []);

  return { selectedButton, handleButtonClick, plans };
};
