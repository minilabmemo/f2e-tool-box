"use client"
import { ChangeEvent, useEffect, useState } from 'react'

import { useDebounce } from 'usehooks-ts'
import { useThrottle } from "@uidotdev/usehooks";

export default function Component() {
  const [value, setValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(value, 3000)


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  // Fetch API (optional)
  useEffect(() => {
    // Do fetch here...
    // Triggers when "debouncedValue" changes
  }, [debouncedValue])

  const [val, setVal] = useState("");
  const throttledValue = useThrottle(val, 3000);

  return (<>
    <section>
      <h1>useDebounce</h1>
      <div>
        <p>Value real-time: {value}</p>
        <p>Debounced value: {debouncedValue}</p>

        <input placeholder="Type some text" className="bg-gray-500" type="text" value={value} onChange={handleChange} />
      </div>
    </section>
    <section>
      <h1>useThrottle</h1>
      <input
        placeholder="Type some text"
        style={{ background: "var(--charcoal)" }}
        type="text"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
      <p>Val: {val}</p>
      <p>Throttled: {throttledValue}</p>
    </section>
  </>
  )
}