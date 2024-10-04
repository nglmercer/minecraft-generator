import Select from 'react-select';
import { useState, useEffect } from 'react';
import daminecraft from './contencraft.json';

const GiveCommand = ({ player, setFinalCommand }) => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');

  const items = daminecraft.items_otorgables.map(itm => ({ label: itm, value: itm }));

  useEffect(() => {
    const currentPlayer = player || '@a';
    setFinalCommand(`give ${currentPlayer} ${item} ${amount}`.trim());
  }, [player, item, amount]);

  return (
    <div>
      <h2 className="text-xl font-bold mt-6">Give Command:</h2>
      <div className="mb-4">
        <label className="block mb-1">Item</label>
        <Select
          options={items}
          onChange={(selected) => setItem(selected.value)}
          className="basic-single"
          classNamePrefix="select"
          isSearchable
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Amount</label>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
    </div>
  );
};

export default GiveCommand;
