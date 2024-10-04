// components/commands/TellrawCommand.js
import { useState, useEffect } from 'react';
import arraycolors from './colors.json'
const TellrawCommand = ({ player,setFinalCommand }) => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('white'); // Color por defecto

  useEffect(() => {
    setFinalCommand(`tellraw ${player} {"text":"${text}","color":"${color}"}`.trim());
  }, [player, text, color]);

  return (
    <div>
      <h2 className="text-xl font-bold mt-6">Tellraw Command:</h2>
      <div className="mb-4">
        <label className="block mb-1">Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Color</label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border rounded p-2 w-full"
        >
          {arraycolors.map((clr) => (
            <option key={clr} value={clr}>
              {clr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TellrawCommand;

