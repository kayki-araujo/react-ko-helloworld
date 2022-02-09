import React from "react";
import { useKnockout, bind } from "./react-ko";

const App = () => {
  const [nameId, nameValue] = useKnockout("observable", "World");
  const [inputId, inputValue] = useKnockout("observable", "");

  const [handleSubmitId] = useKnockout("fn", () => {
    if (!inputValue()) return;
    nameValue(inputValue());
    inputValue("");
  });

  return (
    <div>
      <form {...bind("submit", handleSubmitId)}>
        <input type="text" {...bind("value", inputId)} />
      </form>
      <h1>
        Hello <span {...bind("text", nameId)}></span>
      </h1>
    </div>
  );
};

export default App;
