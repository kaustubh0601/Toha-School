import { useEffect, useRef } from 'react'
import Badge from '../components/Badge'
import {
  Eye, Target, Heart, FlaskConical, Monitor, BookOpen,
  Waves, Palette, Theater, Trophy, Coffee, Landmark
} from 'lucide-react'

function useReveal() {
  const ref = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    const el = ref.current
    if (el) el.querySelectorAll('.reveal').forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
  return ref
}

const mvv = [
  { icon: Eye, title: 'Our Mission', desc: 'To ignite curiosity and empower students with knowledge, skills, and values to thrive in a rapidly changing world.', dark: false },
  { icon: Target, title: 'Our Vision', desc: 'To be a globally recognized institution that shapes compassionate leaders and innovative thinkers for a sustainable future.', dark: true },
  { icon: Heart, title: 'Our Values', desc: 'Integrity, Excellence, Inclusivity, Innovation, and Compassion are the pillars that guide every decision we make.', dark: false },
]

const timeline = [
  { year: '1998', date: 'March 1998', title: 'The Foundation', desc: 'The Heritage School was founded with just 120 students and a vision to redefine education in India.' },
  { year: '2005', date: 'August 2005', title: 'New Campus Inauguration', desc: 'Moved to our 15-acre campus with state-of-the-art infrastructure, labs, and sports facilities.' },
  { year: '2012', date: 'January 2012', title: 'National Award for Excellence', desc: 'Recognized by the Ministry of Education as one of India\'s top 50 schools for holistic development.' },
  { year: '2020', date: 'April 2020', title: 'Digital Leap', desc: 'Pioneered hybrid learning with our proprietary LMS, ensuring uninterrupted education during the pandemic.' },
  { year: '2024', date: 'November 2024', title: 'Global Partnerships', desc: 'Partnered with Cambridge Assessment and 12 international schools for student exchange programs.' },
]

const facilities = [
  { icon: '🔬', name: 'Science Labs', detail: '6 Fully Equipped' },
  { icon: '💻', name: 'Computer Lab', detail: '200+ Workstations' },
  { icon: '📚', name: 'Library', detail: '40,000+ Books' },
  { icon: '🏊', name: 'Swimming Pool', detail: 'Olympic-Size' },
  { icon: '🎨', name: 'Art Studios', detail: '3 Dedicated Spaces' },
  { icon: '🎭', name: 'Auditorium', detail: '800 Seat Capacity' },
  { icon: '⚽', name: 'Sports Ground', detail: '4 Multi-Sport' },
  { icon: '☕', name: 'Cafeteria', detail: 'Nutritious Meals' },
]

const About = () => {
  const containerRef = useReveal()

  return (
    <div ref={containerRef}>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-36 pb-20 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 page-hero-soft-grid pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">About Us</p>
            <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-5 leading-[1.1]">
              About The Heritage School
            </h1>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
              A quarter-century of shaping minds, building character, and creating global citizens.
            </p>
          </div>
          <div className="relative hidden lg:flex justify-center reveal">
            <div className="absolute top-10 right-4 w-56 h-56 rounded-full border-[10px] border-blue-100" />
            <img src="/images/page-hero-person.png" alt="Student visual" className="relative z-10 w-[340px] h-[300px] object-contain" />
            <div className="absolute left-0 bottom-8 bg-white rounded-2xl shadow-lg border border-gray-200 px-5 py-4">
              <p className="text-2xl font-extrabold text-gray-900">5000+</p>
              <p className="text-xs text-gray-400 mt-0.5">Total Enrolled Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ MISSION / VISION / VALUES ════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Our Foundation</p>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900">Mission, Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {mvv.map((item, i) => (
              <div key={i} className={`rounded-2xl p-8 card-hover reveal border ${item.dark ? 'bg-primary border-primary text-white' : 'bg-white border-gray-200 shadow-sm'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.dark ? 'bg-white/15' : 'bg-blue-50'}`}>
                  <item.icon className={`w-6 h-6 ${item.dark ? 'text-white' : 'text-primary'}`} />
                </div>
                <h3 className={`font-bold text-xl mb-3 ${item.dark ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={`text-sm leading-relaxed ${item.dark ? 'text-white/75' : 'text-gray-500'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ HISTORY TIMELINE ════════════════════ */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Our Journey</p>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900">Milestones That Define Us</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line rounded-full" />

            {timeline.map((item, i) => (
              <div key={i} className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 reveal ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Year circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-primary flex items-center justify-center z-10 shadow-md">
                  <span className="text-white text-xs font-bold">{item.year}</span>
                </div>

                {/* Card */}
                <div className={`ml-20 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-200">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-primary mb-3">
                      {item.date}
                    </span>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ FACILITIES GRID ════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Campus</p>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">World-Class Facilities</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Our 15-acre campus is equipped with everything students need to learn, grow, and excel.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {facilities.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center card-hover border border-gray-200 reveal">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{f.name}</h3>
                <p className="text-gray-400 text-xs">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
