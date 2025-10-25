import React from 'react'

const FullPageLoader = () => {
  return (
    <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/90"
          role="status"
          aria-live="polite"
          aria-busy="true"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 rounded-full border-4 border-gray-300 border-t-gray-600 animate-spin" />
            <span className="text-gray-700">Loading...</span>
          </div>
    </div>
  )
}

export default FullPageLoader