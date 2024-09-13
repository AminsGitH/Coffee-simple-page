const Product = (props) => {
  return (
    <div className="product">
          {props.popular && <p className="popular">Popular</p>}
          <img src={props.image} alt="" className="drink-image card-img-top" />
          <div className="d-flex justify-content-between"><h1 className="drink-h1">{props.name}</h1>
              <button className="btn price-btn">{props.price}</button>
          </div>
          
          <div className="">{props.rating ? <img src="/dccl--frontend-simple-coffee-listing/Star_fill.svg" alt="" /> :
          <span className="text-light">No Ratings Available</span>}
              <span className="drink-rating">{props.rating}</span></div>
          
          <span className="drink-votes">({props.votes} votes)</span>
          {props.available ? null : <span className="sold">Sold Out</span>}
          
    </div>
  );
};

export default Product;
