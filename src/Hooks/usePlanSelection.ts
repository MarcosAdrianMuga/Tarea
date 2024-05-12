import { useEffect, useState } from "react";

export type Plan = {
  title: string;
  price: number | "Free";
  benefits: string[];
  currency: string;
  type: "monthly" | "daily" | "weekly";
};

export const usePlanSelection = () => {
  const staticPlans: Plan[] = [
    {
      title: "Free Plan",
      price: "Free",
      benefits: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      currency: "U$S",
      type: "monthly",
    },
    {
      title: "Standard Plan",
      price: 9,
      benefits: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
      ],
      currency: "U$S",
      type: "monthly",
    },
    {
      title: "Premium Plan",
      price: 12,
      benefits: [
        "Unlimited Bandwidth",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
        "Get New Features",
      ],
      currency: "U$S",
      type: "monthly",
    },
  ];

  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [plans, setPlans] = useState<Plan[]>(staticPlans); // Initialize with static data

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  useEffect(() => {
    fetch(
      "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/subscription"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result: Plan[]) => {
        setPlans(result);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setPlans(staticPlans); // Fallback to static data on error
      });
  }, []);

  return { selectedButton, handleButtonClick, plans };
};