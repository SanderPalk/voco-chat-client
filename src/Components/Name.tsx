// App.tsx
// Kindacode.com
import React, { useState, useEffect, useRef } from "react";

const Name: React.FunctionComponent = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // The value of the textarea
  const [value, setValue] = useState<String>();

  // This function is triggered when textarea changes
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "85px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  return (
    <div className="name">
      <textarea
        ref={textareaRef}
        onChange={textAreaChange} >
        {value}
      </textarea>
    </div>
  );
};

export default Name;