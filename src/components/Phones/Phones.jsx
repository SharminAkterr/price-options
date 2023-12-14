import axios from "axios";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect, useState } from "react";
import { RingLoader, CircleLoader } from "react-spinners";


const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loader, setLoader] = useState(true);

    // useEffect(() => {
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //         .then(res => res.json())
    //         // .then(data => setPhones(data.data))
    //         .then(data => console.log(data.data));
    // }, []);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            // .then(data => console.log(data.data.data))
            // .then(data => setPhones(data.data.data))
            .then(data => {
                const phonesData = data.data.data;
                const PhonesFakeData = phonesData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(PhonesFakeData);
                setLoader(false);
                // console.log(PhonesFakeData);
            })
    }, [])

    return (
        <div>

            {loader &&
                <div>
                    <RingLoader color="#36d7b7" className="mx-auto mb-3" />
                    <CircleLoader color="#36d7b7"  className="mx-auto" />
                </div>

            }
            <h1 className="text-5xl mx-5 mt-10 mb-8 font-bold text-center">Phones: {phones.length}</h1>


            <BarChart
                width={1300}
                height={400}
                data={phones}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis dataKey={'price'} />
                <Tooltip />
                <Legend />
                <Bar dataKey="name" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="price" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
        </div>
    );
};

export default Phones;