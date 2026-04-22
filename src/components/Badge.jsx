const Badge = ({ children, className = '' }) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-widest uppercase bg-blue-50 text-blue-600 border border-blue-100 ${className}`}>
    {children}
  </span>
)

export default Badge
