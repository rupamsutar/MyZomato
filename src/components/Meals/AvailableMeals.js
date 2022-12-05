import React from "react"; 
import Classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'RK Burger, Akurdi',
      description: 'Best Burger in Akurdi region !',
      price: 60,
    },
    {
      id: 'm2',
      name: 'A-1 PaniPuri, Pimpri',
      description: 'Sweet-Salty mixture with famous masalapuri!',
      price: 30,
    },
    {
      id: 'm3',
      name: 'Malvani Chicken Handi, Jagdamba (Khed Shivapur)',
      description: 'Gavran chicken with desi spices !',
      price: 599,
    },
    {
      id: 'm4',
      name: 'Sharma IceCream, Nigdi',
      description: 'Best seller in the region',
      price: 140,
    },
    {
      id: 'm5',
      name: 'Geeta Pavbhaji, Nigdi',
      description: 'Tastiest Masala-Pav and bhaji with variety of flavours !',
      price: 170,
    }
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => {
      return(
        <MealItem 
          id={meal.id}
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      )
    });

    return (
        <section className = {Classes.meals}>
          <Card>
            <ul>
              {mealsList}
            </ul>
          </Card>
        </section>
    )
}

export default AvailableMeals;