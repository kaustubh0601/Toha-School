import { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Badge from '../components/Badge'

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

const facultyData = [
  {
    name: 'Dr. Ananya Iyer',
    initials: 'Dr',
    subject: 'Mathematics',
    color: '#3b82f6',
    gradient: 'from-blue-500 to-blue-700',
    experience: '18 years • Ph.D. IIT Bombay',
    skills: ['Calculus', 'Linear Algebra', 'Statistics'],
  },
  {
    name: 'Mr. Kabir Nath',
    initials: 'Mr',
    subject: 'Physics',
    color: '#22c55e',
    gradient: 'from-emerald-500 to-emerald-700',
    experience: '14 years • M.Sc. Delhi University',
    skills: ['Mechanics', 'Optics', 'Quantum'],
  },
  {
    name: 'Ms. Prerna Singh',
    initials: 'Ms',
    subject: 'English',
    color: '#f59e0b',
    gradient: 'from-amber-500 to-amber-700',
    experience: '12 years • MA Cambridge University',
    skills: ['Literature', 'Creative Writing', 'Debate'],
  },
  {
    name: 'Dr. Rahul Desai',
    initials: 'Dr',
    subject: 'Computer Science',
    color: '#8b5cf6',
    gradient: 'from-purple-500 to-purple-700',
    experience: '16 years • Ph.D. Stanford',
    skills: ['AI/ML', 'Python', 'Algorithms'],
  },
  {
    name: 'Ms. Deepa Kulkarni',
    initials: 'Ms',
    subject: 'Biology',
    color: '#f43f5e',
    gradient: 'from-rose-500 to-rose-700',
    experience: '11 years • M.Sc. AIIMS',
    skills: ['Genetics', 'Ecology', 'Anatomy'],
  },
  {
    name: 'Mr. Vivek Joshi',
    initials: 'Mr',
    subject: 'History',
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-cyan-700',
    experience: '15 years • MA JNU',
    skills: ['World History', 'Civics', 'Archaeology'],
  },
  {
    name: 'Ms. Naina Arora',
    initials: 'Ms',
    subject: 'Art',
    color: '#84cc16',
    gradient: 'from-lime-500 to-lime-700',
    experience: '9 years • BFA NID Ahmedabad',
    skills: ['Painting', 'Sculpture', 'Digital Art'],
  },
  {
    name: 'Mr. Aditya Rane',
    initials: 'Mr',
    subject: 'Sports',
    color: '#f97316',
    gradient: 'from-orange-500 to-orange-700',
    experience: '13 years • National Athlete',
    skills: ['Athletics', 'Football', 'Swimming'],
  },
]

const Faculty = () => {
  const containerRef = useReveal()

  return (
    <div ref={containerRef}>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white pt-36 pb-20 overflow-hidden border-b border-gray-200">
        <div className="absolute inset-0 page-hero-soft-grid pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Our Team</p>
            <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-5 leading-[1.1]">Meet Our Faculty</h1>
            <p className="text-gray-500 text-lg max-w-xl leading-relaxed">Passionate educators dedicated to inspiring the next generation of thinkers and leaders.</p>
          </div>
          <div className="relative hidden lg:flex justify-center reveal">
            <div className="absolute top-10 right-4 w-56 h-56 rounded-full border-[10px] border-blue-100" />
            <img src="/images/page-hero-person.png" alt="Student visual" className="relative z-10 w-[340px] h-[300px] object-contain" />
            <div className="absolute left-0 bottom-8 bg-white rounded-2xl shadow-lg border border-gray-200 px-5 py-4">
              <p className="text-2xl font-extrabold text-gray-900">150+</p>
              <p className="text-xs text-gray-400 mt-0.5">Expert Faculty Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ FACULTY GRID ════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyData.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 card-hover reveal group">
                <div className={`relative h-44 bg-gradient-to-br ${f.gradient} flex items-center justify-center overflow-hidden`}>
                  <span className="font-bold text-6xl text-white/25">{f.initials}</span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3"
                    style={{ backgroundColor: f.color + '15', color: f.color }}
                  >
                    {f.subject}
                  </span>
                  <h3 className="font-playfair text-lg font-bold text-navy mb-1">{f.name}</h3>
                  <p className="text-navy/40 text-xs mb-4">{f.experience}</p>
                  <div className="flex flex-wrap gap-2">
                    {f.skills.map((skill, j) => (
                      <span key={j} className="px-2.5 py-1 rounded-lg bg-navy/5 text-navy/50 text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ JOIN CTA ════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy via-navy-mid to-navy rounded-3xl p-12 md:p-16 text-center relative overflow-hidden reveal">
            <div className="absolute top-10 right-10 w-48 h-48 border border-white/5 rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 border border-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <h2 className="font-playfair text-3xl md:text-4xl font-black text-white mb-4">
                Join Our Faculty
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
                We're always looking for passionate educators who share our vision of transformative learning.
              </p>
              <button className="btn-gold text-base flex items-center gap-2 mx-auto">
                View Open Positions <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Faculty
