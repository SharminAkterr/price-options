
import PropTypes from 'prop-types';
import Features from "../Features/Features";

const PriceOption = ({ option }) => {
    // console.log(option)
    const { price, features, name } = option;
    return (
        <div className='bg-indigo-800 text-white p-5 rounded-lg space-y-4 flex flex-col'>
            <h2>
                <span className='text-5xl'>{price}$</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl'>{name}</h4>
           
           <div className="flex-grow">
           {
                features.map((feature, idx) =><Features key={idx} feature={feature}></Features>)
            }
           </div>
           <button className="btn w-full text-lg font-bold text-indigo-800 hover:text-blue-600 bg-white">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
};

export default PriceOption;