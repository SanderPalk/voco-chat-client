// App.tsx
// Kindacode.com
import React, { useState, useEffect, useRef } from "react";

const Input: React.FunctionComponent = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // The value of the textarea
  const [value2, setValue] = useState<String>();

  // This function is triggered when textarea changes
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "86px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value2]);

  return (
    <div className="msg">
      <textarea
        placeholder="Write something..."
        ref={textareaRef}
        onChange={textAreaChange} >
        {value2}
      </textarea>
    </div>
  );
};

export let value2: any;
export default Input;