
import { Button, Modal } from 'flowbite-react';
import { useState,useContext } from 'react';
import {EmailContext} from "../App"
const AddTransaction = () => {
  const [openModal, setOpenModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const { email } = useContext(EmailContext);
  const [formData, setFormData] = useState({
    transactionType: 'income',
    amount: 0,
    description: '',
    category: '',
    date: ''
  });
  console.log(errorMessage)


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.amount || !formData.category || !formData.date) {
      return setErrorMessage("All fields are required");
    }
    try {
      const res = await fetch(`http://localhost:3000/addTransaction/users/${email}/transactions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSuccessMessage('Transaction added successfully!');
        alert("Your Transaction added")
      } else {
        alert("might be some issue pls try again")
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <Button gradientDuoTone="pinkToOrange" onClick={() => setOpenModal(true)}>Add Transaction</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add Transaction</Modal.Header>
        <Modal.Body>
          <div className="container mx-auto ">
            <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="transactionType" className="block text-sm font-medium text-gray-700">Transaction Type</label>
                <select id="transactionType" className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={handleChange}>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>

              </div>

              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                <input type="number" min={0} step={5} id="amount" className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={handleChange} />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                <input type="text" id="description" className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={handleChange} />
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select id="category" className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={handleChange}>
                  <option value="rent">Rent</option>
                  <option value="salary">Salary</option>
                  <option value="friends give">Friends Give</option>
                  <option value="hospital">Hospital</option>
                  <option value="shopping">Shopping</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" id="date" className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  onChange={handleChange} />

              </div>

              <div className="mt-6">
                <Button type="submit" gradientDuoTone="pinkToOrange" >Add Transaction</Button>
              </div>
            </form>
            {successMessage && <p className="mt-4 text-green-600">{successMessage}</p>}
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        <Button color="gray" onClick={() => setOpenModal(false)}>
          Cancel
        </Button>
      </Modal.Footer> */}
      </Modal>
    </>
  )
}

export default AddTransaction