import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const Price = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-400 rounded-md p-4 text-black flex flex-col">
      <h2 className="text-center">
        <span className="text-7xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h3 className="text-2xl text-center my-7">{name}</h3>
      <div className="pl-5 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-10 bg-green-700 w-full py-3 rounded-lg hover:bg-green-400">Buy Now</button>
    </div>
  );
};

Price.propTypes = {
  option: PropTypes.object,
};
export default Price;
