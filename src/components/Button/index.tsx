interface ButtonProps {
  onClick?: () => void
  label: string
  type?: 'primary' | 'secondary'
  disabled?: boolean
  className?: string
}

export function Button({
  onClick,
  label,
  type = 'primary',
  disabled = false,
  className
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative cursor-pointer rounded-lg px-4 py-1 text-sm text-white shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        type === 'primary'
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'bg-gray-400 hover:bg-gray-500'
      } ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className || ''}`}
    >
      {label}

      <span className="absolute inset-0 rounded-lg opacity-0 shadow-lg transition-opacity duration-300 hover:opacity-20" />
    </button>
  )
}
