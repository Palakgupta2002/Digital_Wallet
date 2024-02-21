import { useState, useContext } from 'react';
import { EmailContext } from '../App';
import useUser from '../utils/getUser';

const History = () => {
    const { email } = useContext(EmailContext);
    const user = useUser(email);

    const [searchQuery, setSearchQuery] = useState('');
    
  
    const transactions = user?.transactions?.reverse() || [];

   
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    
    const filteredTransactions = transactions.filter(transaction => {
        return (
            transaction.transactionType.toLowerCase().includes(searchQuery.toLowerCase()) ||
            transaction.amount.toString().includes(searchQuery) ||
            transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            transaction.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            formatDate(transaction.date).includes(searchQuery.toLowerCase()) // Apply formatting to date here
        );
    });

    return (
        <div className=''>
            <h2 className='flex justify-center text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent '><span>Transaction History</span></h2>
            <div className="flex justify-center mt-4">
                <input
                    type="text"
                    placeholder="Search transactions"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                />
            </div>
            {filteredTransactions.length === 0 ? (
                <div className="text-center mt-4 text-gray-600">No transactions found.</div>
            ) : (
                filteredTransactions.map(transaction => (
                    <div className='flex justify-around border-2 border-solid border-red-500 bg-gradient-to-r from-pink-500 to-orange-500 text-white p-5 mt-4' key={transaction._id}>
                        <p className='hidden md:block'> {transaction.transactionType}</p>
                        <p>{transaction.amount}</p>
                        <p>{formatDate(transaction.date)}</p> 
                        <p>See details</p>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}

export default History;
