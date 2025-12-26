import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>You typed: {name}</p>
    </>
  );
}

export default NameInput;