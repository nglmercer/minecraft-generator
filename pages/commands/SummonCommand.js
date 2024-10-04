// components/commands/SummonCommand.js
import { useState, useEffect } from 'react';
import daminecraft from './contencraft.json';
import Select from 'react-select';

const SummonCommand = ({ player, setFinalCommand }) => {
  const [entity, setEntity] = useState('minecraft:zombie');
  const [x, setX] = useState('~');
  const [y, setY] = useState('~');
  const [z, setZ] = useState('~');

  const entities = daminecraft.entidades_invocables;
  const selectentities = daminecraft.entidades_invocables.map(ent => ({ label: ent, value: ent }));
  useEffect(() => {
    const currentPlayer = player || '@a';
    const command = `execute at ${currentPlayer} run summon ${entity} ${x} ${y} ${z}`.trim();
    setFinalCommand(command); // Actualizar el comando final en el componente padre
  }, [entity, x, y, z, player, setFinalCommand]);

  return (
    <div>
      <h2 className="text-xl font-bold mt-6">Summon Command:</h2>
      <div className="mb-4">
        <label className="block mb-1">Entity</label>
        <Select
          options={selectentities}
          onChange={(selected) => setEntity(selected.value)}
          className="basic-single"
          classNamePrefix="select"
          isSearchable={true}
          placeholder="Select an entity"
        />
      </div>
      <div className="mb-4 flex justify-between">
        <label className="block mb-1">X</label>
        <input
          type="text"
          value={x}
          onChange={(e) => setX(e.target.value)}
          className="border rounded p-2 w-full"
        />

        <label className="block mb-1">Y</label>
        <input
          type="text"
          value={y}
          onChange={(e) => setY(e.target.value)}
          className="border rounded p-2 w-full"
        />
        <label className="block mb-1">Z</label>
        <input
          type="text"
          value={z}
          onChange={(e) => setZ(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>
    </div>
  );
};

export default SummonCommand;

