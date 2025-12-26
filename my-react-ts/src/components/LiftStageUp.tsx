function LiftStageUp() {
  const [text, setText] = useState("");

  return (
    <div>
      <TextInput text={text} setText={setText} />
      <Preview text={text} />
    </div>
  );
}

import { useState } from "react";
import TextInput from "./TextInput";
import Preview from "./Preview";

export default LiftStageUp;