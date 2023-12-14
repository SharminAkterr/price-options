import { FaCircleCheck } from "react-icons/fa6";
import PropTypes from 'prop-types';

const Features = ({ feature }) => {
    return (
        <div>
            <p className="flex gap-3 items-center pb-3 "><FaCircleCheck className="text-lg" />{feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.string
};

export default Features;