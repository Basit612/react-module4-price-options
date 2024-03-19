import Price from "../Price/Price";


const Prices = () => {

  const membershipOptions = [
    {
      id: 1,
      name: "Basic",
      price: "$30/month",
      features: [
        "Access to gym facilities",
        "Limited group classes",
        "No personal trainer sessions",
        "Online workout plans",
        "Locker access"
      ]
    },
    {
      id: 2,
      name: "Standard",
      price: "$50/month",
      features: [
        "Access to gym facilities",
        "Unlimited group classes",
        "Limited personal trainer sessions",
        "Online workout plans",
        "Locker access",
        "Sauna access"
      ]
    },
    {
      id: 3,
      name: "Premium",
      price: "$80/month",
      features: [
        "Access to gym facilities",
        "Unlimited group classes",
        "Unlimited personal trainer sessions",
        "Nutritional guidance",
        "Online workout plans",
        "Locker access",
        "Sauna access",
        "Swimming pool access"
      ]
    }
  ];
  
  

  return (
    <div className="m-12">
      <h2 className="text-4xl">Best Prices</h2>
       <div className="grid md:grid-cols-3 gap-5">
       {
       membershipOptions.map(option => <Price key={option.id} option={option}></Price>)
      }
       </div>
    </div>
  );
};

export default Prices;