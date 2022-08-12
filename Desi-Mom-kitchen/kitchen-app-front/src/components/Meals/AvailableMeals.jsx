import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import "./AvailableMeals.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Butter Chicken",
    description: "Chiken with rich smooth gravy",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Chicken biryani",
    description: "Basmati rice with Chicken!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Veg. Kadhai",
    description: "Diced Vagitable with spicy gravy",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Dal Tadka",
    description: "Lantice soup with blended spices",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
