import { useContext } from 'react';
import { EmailContext } from '../App';
import shopping from "../assets/shopping.svg"
import hospital from "../assets/hospital.svg"
import rent from "../assets/rent.svg"
import friend from "../assets/friend.svg"
import other from "../assets/other.svg"
import salary from "../assets/salary.svg"
import useUser from '../utils/getUser';

const CardsOfCat = () => {
    const { email } = useContext(EmailContext);
    const user = useUser(email);

    // Count occurrences of each category
    const categoryCounts = {};
    user?.transactions.forEach(transaction => {
        categoryCounts[transaction.category] = (categoryCounts[transaction.category] || 0) + 1;
    });

    return (
        <div className="flex flex-wrap justify-center gap-10 p-10 text-white">
            {Object.entries(categoryCounts).map(([category, count]) => (
                <div key={category} className="bg-gradient-to-r from-pink-500 to-orange-500 p-4 rounded-md shadow-md">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-lg font-bold">{category}</h3>
                        <img src={getCategoryLogo(category)} alt={category} className="w-8 h-8" />
                    </div>
                    <p className="">Transactions: {count}</p>
                </div>
            ))}
        </div>
    );
}

// Function to get logo based on category
const getCategoryLogo = (category) => {
    switch (category) {
        case 'shopping':
            return shopping;
        case 'salary':
            return salary;
        case 'rent':
            return rent;
        case 'friends give':
            return friend;
        case 'hospital':
            return hospital;
        default:
            return other;
    }
}

export default CardsOfCat;
