import React from 'react'

const Logo = ({ className = "", size = "default" }) => {
  const sizeClasses = {
    small: "w-20 h-8",
    default: "w-28 h-10", 
    large: "w-36 h-12"
  }

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/Shadman Shahriar-logo-transparent.png"
        alt="Shadman Shahriar Logo"
        className={`${sizeClasses[size]} transition-all duration-300 hover:scale-105 object-contain`}
        style={{ maxHeight: '100%' }}
      />
    </div>
  )
}

export default Logo 