import React from "react";
import EmployesList from "../components/EmployesList";

const Employes = () => {
  const EMPLOYES = [
    {
      id: "e1",
      name: "wendy Cordova",
      image:
        "https://hollywoodlife.com/wp-content/uploads/2022/07/Wendy-Williams-Describes-Her-Ideal-Love-Match-ss-embed.jpg",
      orders: 2,
    },
    {
        id: "e2",
        name: "kortney Cordova",
        image:
          "https://hollywoodlife.com/wp-content/uploads/2022/07/Wendy-Williams-Describes-Her-Ideal-Love-Match-ss-embed.jpg",
        orders: 3,
      }
  ];

  return <EmployesList items={EMPLOYES} />;
};

export default Employes;
