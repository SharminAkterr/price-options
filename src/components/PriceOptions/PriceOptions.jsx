
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const gymPackages = [
        {
            id: 1,
            name: "Basic",
            price: 29.99,
            features: [
                "Access to cardio machines",
                "Free weights area access",
                "Locker room usage"
            ]
        },
        {
            id: 2,
            name: "Standard",
            price: 49.99,
            features: [
                "Full gym access",
                "Group fitness classes",
                "Sauna and steam room",
                "Personal locker"
            ]
        },
        {
            id: 3,
            name: "Premium",
            price: 79.99,
            features: [
                "All Standard features",
                "Personal training session (1/month)",
                "Nutritional consultation",
                "Towel and bathrobe service"
            ]
        },
        {
            id: 4,
            name: "Platinum",
            price: 99.99,
            features: [
                "All Premium features",
                "Unlimited personal training",
                "Exclusive VIP area access",
                "Spa and massage treatments"
            ]
        }
    ];
    return (
        <div>
            <h2 className='text-5xl font-bold text-center my-10 text-indigo-800 hover:text-blue-600'>Best Prices in the town !!!</h2>

            <div className='grid md:grid-cols-3 gap-5 my-10 mx-5 justify-center'>
                {
                    gymPackages.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};


export default PriceOptions;