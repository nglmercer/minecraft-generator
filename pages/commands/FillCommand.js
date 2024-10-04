// components/commands/FillCommand.js
import { useState, useEffect } from 'react';
import daminecraft from './contencraft.json'
import Select from 'react-select';

const FillCommand = ({player, setFinalCommand}) => {
  const [fromX, setFromX] = useState('~');
  const [fromY, setFromY] = useState('~');
  const [fromZ, setFromZ] = useState('~');
  const [toX, setToX] = useState('~');
  const [toY, setToY] = useState('~');
  const [toZ, setToZ] = useState('~');
  const [block, setBlock] = useState('minecraft:tnt');

  const blocks = daminecraft.bloques_colocables;
  const selectblocks = daminecraft.bloques_colocables.map(blk => ({ label: blk, value: blk }));

  useEffect(() => {
    const currentPlayer = player || '@a';
    setFinalCommand(`execute at ${currentPlayer} run fill ${fromX} ${fromY} ${fromZ} ${toX} ${toY} ${toZ} ${block}`.trim());
  }, [fromX, fromY, fromZ, toX, toY, toZ, block,player]);
  return (
    <div>
      <h2 className="text-xl font-bold mt-6">Fill Command:</h2>
      
      {/* Grupo de inputs "From" en una sola fila */}
      <div className="mb-4 flex justify-between">
        <div className="w-1/3 pr-2">
          <label className="block mb-1">From X</label>
          <input
            type="text"
            value={fromX}
            onChange={(e) => setFromX(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="w-1/3 px-2">
          <label className="block mb-1">From Y</label>
          <input
            type="text"
            value={fromY}
            onChange={(e) => setFromY(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="w-1/3 pl-2">
          <label className="block mb-1">From Z</label>
          <input
            type="text"
            value={fromZ}
            onChange={(e) => setFromZ(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
      </div>

      {/* Grupo de inputs "To" en una sola fila */}
      <div className="mb-4 flex justify-between">
        <div className="w-1/3 pr-2">
          <label className="block mb-1">To X</label>
          <input
            type="text"
            value={toX}
            onChange={(e) => setToX(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="w-1/3 px-2">
          <label className="block mb-1">To Y</label>
          <input
            type="text"
            value={toY}
            onChange={(e) => setToY(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="w-1/3 pl-2">
          <label className="block mb-1">To Z</label>
          <input
            type="text"
            value={toZ}
            onChange={(e) => setToZ(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
      </div>

      {/* Selección de bloque */}
      <div className="mb-4">
        <label className="block mb-1">Block</label>
        <Select
          options={selectblocks}
          onChange={(selected) => setBlock(selected.value)}
          className="basic-single"
          classNamePrefix="select"
          isSearchable
        />
      </div>
    </div>
  );

};

export default FillCommand;
