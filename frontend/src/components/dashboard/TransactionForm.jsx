import { useState } from 'react';
import ExpenceSavingSwitch from './ExpenceSavingSwitch';
import TransactionsFillForm from './TransactionsFillForm';

const TransactionForm = () => {
  const [isExpense, setIsExpense] = useState(true);

  return (
    <div className="w-[400px] h-[460px] border-2 border-zinc-200 rounded-[10px] flex flex-col overflow-hidden mt-4">
      <div className="pl-5">
        <ExpenceSavingSwitch isExpense={isExpense} setIsExpense={setIsExpense} />
      </div>
      <div>
        <TransactionsFillForm isExpense={isExpense} />
      </div>
    </div>
  );
};

export default TransactionForm;
