
import { Button, Modal } from 'flowbite-react';
import { useState, useContext } from 'react';
import { EmailContext } from '../App';

const AddMoney = () => {
  const { email } = useContext(EmailContext)
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    money: 0,
  })
  const handleChange = (e) => {
    setFormData({
      money: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://digital-wallet-backend-falh.onrender.com/UpdateMoney/user/${email}/money`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Money is updated")
      } else {
        alert("might be some issue pls try again")
      }
    }

    catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <Button gradientDuoTone="pinkToOrange" onClick={() => setOpenModal(true)}>Add Money </Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add your Money</Modal.Header>
        <Modal.Body>
          <form action="" onSubmit={handleSubmit} >
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
              <input type="number" min={0} step={5} id="money" className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                onChange={handleChange} />
            </div>
            <Button gradientDuoTone="pinkToOrange" type='submit' >Add transaction</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AddMoney