const Badge = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-block px-4 py-1.5 rounded-full text-xs font-mono tracking-[0.15em] uppercase font-bold bg-blue-100 text-blue-700 ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
