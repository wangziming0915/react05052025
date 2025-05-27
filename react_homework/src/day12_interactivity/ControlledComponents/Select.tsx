import { useState } from "react";

export default function Select() {
  const options = ["Apple", "Banana", "Cherry"];
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <select value={selected} onChange={e => setSelected(e.target.value)}>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <div>Selected: {selected}</div>
    </div>
  
}
