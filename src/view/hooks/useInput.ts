import React, { ChangeEvent } from "react";

export const useInput = (): {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} => {
  const [value, setValue] = React.useState<string>("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};
