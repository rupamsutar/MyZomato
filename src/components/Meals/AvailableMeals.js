import React, {useEffect, useState} from "react"; 
import Classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasHTTPError, setHasHTTPError] = useState();

  useEffect(()=> {
    const fetchMeals = async () => {
      const response = await fetch("https://react-http-179c3-default-rtdb.firebaseio.com/meals.json");
      if(!response.ok) {
        throw new Error("Something went Wrong ! Try again after sometime...")
      }
      const data = await response.json();
  
      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id:key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setHasHTTPError(error.message);
    });
  }, []);

  if (hasHTTPError) {
    return <section className={Classes.mealsError}>
      <p>{hasHTTPError}</p>
    </section>
  }


  if (isLoading) {
    return <section className={Classes.mealsLoading}>
      <p>Loading...</p>
    </section>
  }




  const mealsList = meals.map(meal => {
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