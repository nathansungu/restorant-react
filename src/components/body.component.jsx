import foodItems from "../fooditems";

const BodyItem = ({ src, alt, name, price, discount, description }) => {
  return (
    <div className="item">
      <img src={src} alt={alt} />
      <p className="item-name">{name}</p>
      <p className="description">{description}</p>
      <p>{discount >0 ?<><span className="price">{Math.ceil(price*(100 - discount)/100) } </span> <span className="originalprice">{price}</span></>:<span className="price">{price}</span>}</p>
    </div>
  );
};

const BodySection = () => {
  return (
    <>
      
        <div className="container">
          {foodItems.map((listing, indx) => {
            return (
              <BodyItem
                key={indx}
                src={listing.scr}
                alt={listing.alt}
                name={listing.name}
                price={listing.price}
                discount={listing.discount}
                description={listing.description}
              />
            );
          })}
        </div>
      
    </>
  );
};

export default BodySection;
