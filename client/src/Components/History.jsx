import { useState, useContext } from 'react';
import { EmailContext } from '../App';
import useUser from '../utils/getUser';
import { Button, Modal } from 'flowbite-react';
import "../App.css"

const History = () => {
    const { email } = useContext(EmailContext);
    const user = useUser(email);

    const [searchQuery, setSearchQuery] = useState('');
    const [openModals, setOpenModals] = useState([]); // State to manage multiple modals

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

    const toggleModal = (index) => {
        const updatedModals = [...openModals];
        updatedModals[index] = !updatedModals[index];
        setOpenModals(updatedModals);
    };

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
                filteredTransactions.map((transaction, index) => (
                    <div className='flex justify-around border-2 border-solid border-red-500 bg-gradient-to-r from-pink-500 to-orange-500 text-white p-5 mt-4' key={transaction._id}>
                        <p className='hidden md:block'> {transaction.transactionType}</p>
                        <p>{transaction.amount}</p>
                        <p>{formatDate(transaction.date)}</p>
                        <Button gradientDuoTone="pinkToOrange" outline onClick={() => toggleModal(index)}>See details</Button>
                        <Modal show={openModals[index]} onClose={() => toggleModal(index)}>
                            <Modal.Header>Transaction Details</Modal.Header>
                            <Modal.Body>
                                <div key={transaction._id}>
                                    <p className='flex justify-center text-2xl underline bg-gradient-to-r from-pink-500 to-orange-500 p-10 text-white '><span>Transaction Type: {transaction.transactionType}</span></p>
                                    <p className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>Amount: {transaction.amount}</p>
                                    <p className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>Description: {transaction.description}</p>
                                    <p className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>Category: {transaction.category}</p>
                                    <p className='text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent'>Date: {formatDate(transaction.date)}</p>
                                </div>
                            </Modal.Body>
                        </Modal>
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}

export default History;



