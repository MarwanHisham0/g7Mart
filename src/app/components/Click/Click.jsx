"use client"
import React, { useState } from 'react'

export default function Click() {
  const [showText, setShowText] = useState(false)

  const handleClick = () => {
    setShowText(true)
  }

  return (
    <div>
        {
            showText?
             <h1 className="mt-4 text-6xl font-bold text-sky-600">
          ممكن تعقل بالله عليك؟
        </h1>:
      <button
        onClick={handleClick}
        className="inline-block hover:cursor-pointer transition rounded-sm border border-sky-600 bg-sky-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-sky-600"
      >
        دوس علي الزرار
      </button>
        }

    </div>
  )
}
