import { useState, useEffect, useRef } from 'react'
import { Clock, MapPin } from 'lucide-react'
import Badge from '../components/Badge'

function useReveal() {
  const ref = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    const el = ref.current
    if (el) el.querySelectorAll('.reveal').forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
  return ref
}

const galleryCategories = ['All', 'Events', 'Sports', 'Academics', 'Arts']

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80', category: 'Academics', span: 'col-span-2 row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80', category: 'Academics', span: '' },
  { id: 3, src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80', category: 'Sports', span: '' },
  { id: 4, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80', category: 'Academics', span: 'row-span-2' },
  { id: 5, src: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=600&q=80', category: 'Events', span: '' },
  { id: 6, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80', category: 'Academics', span: 'col-span-2' },
  { id: 7, src: 'https://images.unsplash.com/photo-1461280360983-bd93eaa5051b?w=600&q=80', category: 'Arts', span: '' },
  { id: 8, src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80', category: 'Sports', span: '' },
  { id: 9, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80', category: 'Academics', span: 'col-span-2' },
  { id: 10, src: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=600&q=80', category: 'Arts', span: '' },
  { id: 11, src: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?w=600&q=80', category: 'Events', span: '' },
  { id: 12, src: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?w=600&q=80', category: 'Arts', span: 'row-span-2' },
  { id: 13, src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80', category: 'Sports', span: '' },
  { id: 14, src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80', category: 'Events', span: '' },
  { id: 15, src: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=600&q=80', category: 'Events', span: '' },
  { id: 16, src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80', category: 'Academics', span: '' },
]

const events = [
  {
    day: '15', month: 'May', title: 'Science & Innovation Fair',
    desc: 'Annual showcase of student research projects and experiments across all grades.',
    category: 'Academics', time: '9:00 AM – 4:00 PM', location: 'Main Auditorium',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    day: '22', month: 'May', title: 'Inter-School Athletics',
    desc: 'Regional athletics meet featuring track, field, and swimming events.',
    category: 'Sports', time: '7:00 AM – 5:00 PM', location: 'Sports Complex',
    gradient: 'from-emerald-500 to-emerald-700',
  },
  {
    day: '01', month: 'Jun', title: 'Cultural Festival "Tarang"',
    desc: 'Three-day cultural extravaganza with music, dance, drama, and art exhibitions.',
    category: 'Events', time: '10:00 AM – 8:00 PM', location: 'Campus-wide',
    gradient: 'from-amber-500 to-amber-700',
  },
]

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const containerRef = useReveal()

  const filteredPhotos = activeCategory === 'All'
    ? photos
    : photos.filter(p => p.category === activeCategory)

  return (
    <div ref={containerRef}>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-36 pb-20 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 page-hero-soft-grid pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Campus Life</p>
            <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-5 leading-[1.1]">Life at The Heritage School</h1>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">Moments that capture the spirit, energy, and joy of our vibrant school community.</p>
          </div>
          <div className="relative hidden lg:flex justify-center reveal">
            <div className="absolute top-10 right-4 w-56 h-56 rounded-full border-[10px] border-blue-100" />
            <img src="/images/page-hero-person.png" alt="Student visual" className="relative z-10 w-[340px] h-[300px] object-contain" />
            <div className="absolute left-0 bottom-8 bg-white rounded-2xl shadow-lg border border-gray-200 px-5 py-4">
              <p className="text-2xl font-extrabold text-gray-900">5000+</p>
              <p className="text-xs text-gray-400 mt-0.5">Students in Our Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ GALLERY GRID ════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-14 reveal">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-white text-navy/60 border border-gray-200 hover:border-navy/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className={`rounded-2xl overflow-hidden group cursor-pointer ${photo.span}`}
              >
                <img
                  src={photo.src}
                  alt={`${photo.category} at The Heritage School`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ UPCOMING EVENTS ════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <Badge>Events</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy mt-4 mb-4">
              Upcoming Events
            </h2>
            <p className="text-navy/50 text-lg max-w-2xl mx-auto">
              Join us for these exciting upcoming events and celebrations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md card-hover reveal">
                {/* Gradient top area */}
                <div className={`h-32 bg-gradient-to-br ${event.gradient} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <p className="text-4xl font-playfair font-black">{event.day}</p>
                    <p className="text-sm font-mono uppercase tracking-wider opacity-80">{event.month}</p>
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-navy/5 text-navy/60 mb-3">
                    {event.category}
                  </span>
                  <h3 className="font-playfair text-xl font-bold text-navy mb-2">{event.title}</h3>
                  <p className="text-navy/50 text-sm leading-relaxed mb-4">{event.desc}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-navy/40 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-navy/40 text-xs">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
