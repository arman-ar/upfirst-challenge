import React, { useState } from 'react'
import { Button } from '../Button'

interface CardProps {
  status: string
  name: string
  subject: string
  time: string
  onRemove: () => void
}

export function Card({ status, name, subject, time, onRemove }: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const preventPropagation = (e: React.MouseEvent) => {
    isExpanded ? e.stopPropagation() : toggleExpand()
  }

  return (
    <div
      className={`no-scrollbar relative cursor-pointer rounded-lg bg-gray-100 p-4 shadow-md transition-all duration-100 ${
        isExpanded ? 'max-h-52 overflow-x-hidden' : 'max-h-32 overflow-hidden'
      }`}
      onClick={toggleExpand}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full flex-1 items-center justify-between">
          <span
            className={`rounded-lg px-3 py-1 text-xs text-white ${
              status === 'Active' ? 'bg-green-400' : 'bg-purple-400'
            }`}
            onClick={preventPropagation}
          >
            {status}
          </span>
          <h3
            className="w-1/2 flex-1 text-wrap p-2 font-semibold"
            onClick={preventPropagation}
          >
            {name}
          </h3>
        </div>
        <div
          className="self-start py-2 text-gray-500"
          onClick={preventPropagation}
        >
          {time}
        </div>
      </div>

      <div className="mb-4 mt-2 w-10/12">
        <p
          onClick={preventPropagation}
          className={`text-sm transition-all duration-300 ${
            isExpanded ? '' : 'truncate'
          }`}
        >
          {subject}
        </p>
      </div>
      {isExpanded ? (
        <div className="flex w-full justify-end">
          <Button onClick={onRemove} label="Remove" type="secondary" />
        </div>
      ) : null}
    </div>
  )
}
