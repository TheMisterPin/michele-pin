import React from 'react'
import './styles/atoms-styles.css'

export default function DarkModeSwitch() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  return (
    <div className="flex items-center">
      <label className="switch inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="switch__checkbox sr-only"
          checked={isDarkMode}
          onChange={() => setIsDarkMode(!isDarkMode)}
          aria-label="Toggle dark mode"
        />
        <span className="switch__toggle relative w-14 h-8 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out">
          <span className="sr-only">Toggle dark mode</span>
        </span>
      </label>
    </div>
  )
}
