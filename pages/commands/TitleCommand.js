// components/commands/TitleCommand.js
import { useState, useEffect } from 'react';
import arraycolors from './colors.json'

const TitleCommand = ({player, setFinalCommand}) => {
  const [text, setText] = useState('');
  const [commandType, setCommandType] = useState('title'); // 'title' o 'subtitle'
  const [color, setColor] = useState('white'); // Color por defecto

  useEffect(() => {
    const currentPlayer = player || '@a';
    setFinalCommand(`tittle ${currentPlayer} ${commandType} {\"text\":\"${text}\",\"color\":\"${color}\"}`.trim());
  }, [player, text, commandType, color]);

  return (
    <div>
      <h2 className="text-xl font-bold mt-6">Title/Subtitle Command:</h2>
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
        <label className="block mb-1">Command Type</label>
        <select
          value={commandType}
          onChange={(e) => setCommandType(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="title">Title</option>
          <option value="subtitle">Subtitle</option>
        </select>
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

export default TitleCommand;
