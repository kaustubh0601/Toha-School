import { useEffect, useState } from 'react'
import { CheckCircle, X } from 'lucide-react'

const Toast = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 50)
    const timer = setTimeout(() => {
      setVisible(false)
      setTimeout(onClose, 300)
    }, 3500)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl border-l-4 border-gold bg-navy text-white max-w-sm transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <CheckCircle className="w-5 h-5 text-gold shrink-0" />
      <p className="text-sm font-dm font-medium">{message}</p>
      <button onClick={onClose} className="ml-auto shrink-0 hover:opacity-70 transition-opacity">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

export default Toast
