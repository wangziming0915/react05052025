import { useState } from 'react';

const OPTIONS = ["Apple", "Banana", "Cherry", "Date"];

export default function SelectAllForm() {
  const [selected, setSelected] = useState<string[]>([]);

  const allSelected = selected.length === OPTIONS.length;

  const toggle = (option: string) =>
    setSelected(selected =>
      selected.includes(option)
        ? selected.filter(o => o !== option)
        : [...selected, option]
    );

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={allSelected}
          onChange={e => setSelected(e.target.checked ? OPTIONS : [])}
        />
        Select All
      </label>
      {OPTIONS.map(option => (
        <label key={option}>
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => toggle(option)}
          />
          {option}
        </label>
      ))}
      <div>Selected: {selected.join(", ") || "None"}</div>
    </div>
  );
}
