import React, { useState } from "react";

const Counter = () => {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  const handleChangeCount = (event) => {
    setCount(Number(event.target.value));
  };

  return (
    <div>
      <input
        id="change"
        type="text"
        name="valeur"
        placeholder="Initialiser la valeur du compteur"
        onChange={handleChangeCount}
      />
      <p>Le compteur est à : {count} </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};

export default Counter;
