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
      <section className="relative page-hero-soft py-28 overflow-hidden border-b border-navy/10">
        <div className="absolute inset-0 page-hero-soft-grid" />
        <div className="absolute top-12 left-[8%] w-4 h-4 bg-[#ff3d5a] rounded-sm" />
        <div className="absolute top-12 right-[14%] text-navy/35 text-3xl tracking-widest">~~~</div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <Badge className="mb-6 reveal">About Us</Badge>
            <h1 className="font-playfair text-5xl md:text-6xl font-black text-navy mb-6 leading-[1.05] reveal">
              About The Heritage School
            </h1>
            <p className="text-navy/60 text-lg max-w-xl reveal">
              A quarter-century of shaping minds, building character, and creating global citizens.
            </p>
          </div>

          <div className="relative hidden lg:flex justify-center reveal">
            <div className="absolute top-14 right-6 w-52 h-52 rounded-full border-[10px] border-gold/20" />
            <img
              src="/images/page-hero-person.png"
              alt="Student visual"
              className="relative z-10 w-[360px] h-[320px] object-contain"
            />
            <div className="absolute left-2 bottom-10 bg-white/95 rounded-2xl shadow-xl border border-navy/10 px-5 py-4">
              <p className="text-2xl font-black text-navy">100K+</p>
              <p className="text-xs text-navy/50">Total Enrolled Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ MISSION / VISION / VALUES ════════════════════ */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {mvv.map((item, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 card-hover reveal ${
                  item.dark ? 'bg-navy text-white' : 'bg-white shadow-md'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  item.dark ? 'bg-gold/20' : 'bg-navy/5'
                }`}>
                  <item.icon className={`w-7 h-7 ${item.dark ? 'text-gold' : 'text-navy'}`} />
                </div>
                <h3 className={`font-playfair text-2xl font-bold mb-4 ${item.dark ? '' : 'text-navy'}`}>
                  {item.title}
                </h3>
                <p className={`leading-relaxed ${item.dark ? 'text-white/70' : 'text-navy/60'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ HISTORY TIMELINE ════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <Badge>Our Journey</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy mt-4">
              Milestones That Define Us
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line rounded-full" />

            {timeline.map((item, i) => (
              <div key={i} className={`relative flex items-start gap-6 md:gap-0 mb-12 last:mb-0 reveal ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Year circle */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-navy flex items-center justify-center z-10 shadow-lg">
                  <span className="text-gold text-xs font-mono font-bold">{item.year}</span>
                </div>

                {/* Card */}
                <div className={`ml-24 md:ml-0 md:w-[45%] ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-3xl p-6 shadow-md card-hover border border-gray-100">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-navy/5 text-navy/60 mb-3">
                      {item.date}
                    </span>
                    <h3 className="font-playfair text-xl font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-navy/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ FACILITIES GRID ════════════════════ */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <Badge>Campus</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy mt-4 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-navy/50 text-lg max-w-2xl mx-auto">
              Our 15-acre campus is equipped with everything students need to learn, grow, and excel.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {facilities.map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-6 text-center card-hover shadow-sm reveal">
                <span className="text-4xl mb-4 block">{f.icon}</span>
                <h3 className="font-playfair font-bold text-navy text-lg mb-1">{f.name}</h3>
                <p className="text-navy/40 text-sm font-mono">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
