import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";

const Landing = () => {
  const [drinks, setDrink] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => setDrink(data));
  }, []);

  return (
    <section className="main-section">
      <div>
        <img src="/dccl--frontend-simple-coffee-listing/bg-cafe.jpg" alt="" />
      </div>
      <div className="product-container ">
        <div className="">
          <h1>Our Collection</h1>
          <p className="description">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
                  </p>
                  <button className="btn btn-secondary m-4"> All Products</button>
                  <button className="btn btn-dark m-4"> Available now</button>
              </div>
              <div className="container">
                  <div className="row gap">
          {drinks.map((drink) => (
                    <> <div className="col-lg-4 col-md-6 col-sm-12">
            <Product
              key={drink.id}
              image={drink.image}
              name={drink.name}
              price={drink.price}
              rating={drink.rating}
              votes={drink.votes}
              popular={drink.popular}
              available={drink.available}
            /></div></> 
          ))}
        </div></div>
      </div>
    </section>
  );
};

export default Landing;
