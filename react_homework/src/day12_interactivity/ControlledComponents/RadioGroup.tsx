import { useState } from "react";

export default function RadioGroup() {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {options.map(option => (
        <label key={option} style={{ display: "block" }}>
          <input
            type="radio"
            name="radioGroup"
            value={option}
            checked={selected === option}
            onChange={() => setSelected(option)}
          />
          {option}
        </label>
      ))}
      <div>Selected: {selected}</div>
    </div>
  );
}
