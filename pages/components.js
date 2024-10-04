// components/MinecraftCommandGenerator.js
import { useState } from 'react';
import SummonCommand from './commands/SummonCommand';
import GiveCommand from './commands/GiveCommand';
import TitleCommand from './commands/TitleCommand';
import FillCommand from './commands/FillCommand';
import TellrawCommand from './commands/TellrawCommand';

const MinecraftCommandGenerator = () => {
  const [selectedCommand, setSelectedCommand] = useState('summon');
  const [player, setPlayer] = useState('');
  const [finalCommand, setFinalCommand] = useState('');

  const renderCommandComponent = () => {
    switch (selectedCommand) {
      case 'summon':
        return <SummonCommand player={player} setFinalCommand={setFinalCommand} />;
      case 'give':
        return <GiveCommand player={player} setFinalCommand={setFinalCommand} />;
      case 'title':
        return <TitleCommand player={player} setFinalCommand={setFinalCommand} />;
      case 'fill':
        return <FillCommand player={player} setFinalCommand={setFinalCommand} />;
      case 'tellraw':
        return <TellrawCommand player={player} setFinalCommand={setFinalCommand} />;
      default:
        return null;
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(finalCommand);
      alert('Command copied to clipboard!');
    } catch (error) {
      if (error.name === 'NotAllowedError') {
        console.log('Permission to access clipboard denied. Please allow clipboard access and try again.');
      } else {
        console.log('Failed to copy command: ' + error.message);
      }
    }
  };
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Minecraft Command Generator</h1>
      <div className="mb-4">
        <label className="block mb-1">Player</label>
        <input
          type="text"
          value={player}
          onChange={(e) => setPlayer(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
      <select
        className="border rounded p-2 mb-4"
        value={selectedCommand}
        onChange={(e) => setSelectedCommand(e.target.value)}
      >
        <option value="summon">Summon</option>
        <option value="give">Give</option>
        <option value="title">Title</option>
        <option value="fill">Fill</option>
        <option value="tellraw">Tellraw</option>
      </select>
      {renderCommandComponent()}
      <h3 className="text-lg mt-6">Final Command:</h3>
      <textarea
        className="border rounded p-2 w-full h-24 mt-2 bg-gray-100"
        readOnly
        value={`/${finalCommand}`}
      />
      <button onClick={copyToClipboard} className="mt-2 p-2 bg-blue-500 text-white rounded">
        Copy to Clipboard
      </button>
    </div>
  );
};

export default MinecraftCommandGenerator;

