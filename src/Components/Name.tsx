// App.tsx
import React, { useState, useEffect, useRef } from "react";

const Name: React.FunctionComponent = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // The value of the textarea
  const [value1, setValue] = useState<String>();

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
  }, [value1]);

  return (
    <div className="name">
      <textarea
        placeholder="Username"
        ref={textareaRef}
        onChange={textAreaChange} >
        {value1}
      </textarea>
    </div>
  );
};

export let value1: any;
export default Name;