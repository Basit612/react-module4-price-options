import { AiFillCloseCircle } from "react-icons/ai";

const Feature = ({feature}) => {
  return (
    <div>
      <p className="flex items-center"> <AiFillCloseCircle className="text-green-300 mr-3"></AiFillCloseCircle> {feature}</p>
    </div>
  );
};

export default Feature;