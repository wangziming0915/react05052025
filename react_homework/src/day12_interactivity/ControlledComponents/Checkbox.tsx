import { useState } from "react";

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      {checked ? "Checked" : "Unchecked"}
    </label>
  );
}
