import React from "react";
import Card from "../../shared/components/UIElements/Card";
import EmployeItem from "./EmployeItem";
import "./EmployesList.css";

const EmployesList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Server is Available</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className="users-list">
      {props.items.map((employee) => {
        return (
          <EmployeItem
            key={employee.id}
            id={employee.id}
            image={employee.image}
            name={employee.name}
            orderCount={employee.orders}
          />
        );
      })}
    </ul>
  );
};

export default EmployesList;
