import { useState, useEffect } from 'react';
import CategorySelector from './CategorySelector';
import { createExpence } from '../../services/ExpencesService';
import Cookies from 'js-cookie';

const TransactionsFillForm = ({ isExpense }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = Cookies.get('authToken');
    if (token) {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUserId(decodedToken.user_id);
      console.log(decodedToken.user_id)
    }
    
  }, []);



  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const amount = parseFloat(formData.get('amount'));
    const transactionData = {
      title: formData.get('title'),
      amount: isExpense ? -Math.abs(amount) : amount,
      description: formData.get('description'),
      userId,
      category: selectedCategory ? selectedCategory.value : null,
    };

    try {
      const response = await createExpence(transactionData);
      console.log('Transaction created:', response);
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
  };

  return (
    <form className='h-fit px-5 py-2' onSubmit={handleSubmit}>
      <label className='text-[18px] font-semibold flex flex-col pt-2 '>
        Title
        <input type="text" name='title' className='h-[50px] border-2 rounded-xl p-3' required />
        <div className='flex flex-row pt-5 justify-between'>
          <label className='text-[18px] font-semibold flex flex-col '>
            Amount
            <input type="number" name="amount" className='w-[160px] h-[50px] border-2 rounded-xl p-3' required />
          </label>
          <label className='text-[18px] font-semibold flex flex-col'>
            Category
            <CategorySelector onChange={setSelectedCategory} />
          </label>
        </div>
        <label className='pt-5'>
          Description 
          <textarea name="description" cols="31" rows="2" className='border-2 rounded-xl p-3 resize-none'></textarea>
        </label>
      </label> 
      <button type="submit" className='bg-blue-500 text-white px-4 py-2 mt-4 w-full'>Submit</button>
    </form>
  );
};

export default TransactionsFillForm;
