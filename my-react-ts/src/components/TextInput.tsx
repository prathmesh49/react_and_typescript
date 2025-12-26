function TextInput({
  text,
  setText,
}: {
  text: string;
  setText: (value: string) => void;
}) {
  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default TextInput;