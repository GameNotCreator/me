'use client'

import React, { useState, createContext, useContext } from 'react'

const ActiveSectionContext = createContext(null)

export default function ActiveSectionContextProvider({ children }) {
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext)

  if (context === null) {
    throw new Error(
      'useActiveSectionContext must be used within an ActiveSectionContextProvider'
    )
  }

  return context
}
