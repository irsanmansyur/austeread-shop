import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function CalenderArchive(props: { onChange: (value: Date) => any }) {
  const [value, onChange] = useState(new Date());
  const onChanges = (value: Date) => {
    onChange(value);
    props.onChange(value);
  };
  return (
    <div className="sticky top-0 mt-0 print:hidden flex flex-col">
      <h1 className="font-PublicSansMedium text-center text-[20px] mb-4 ">
        <span className="whitespace-nowrap relative after-border">Archive</span>
      </h1>
      <Calendar next2Label={null} prev2Label={null} onChange={onChanges} value={value} className="self-center !border-none" />
    </div>
  );
}
