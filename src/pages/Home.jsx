import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import homePageImage  from '../assets/Home_page.png'
import section_2_1   from '../assets/section_2_1.png'
import section_2_2   from '../assets/section_2_2.png'
import {
  ArrowRight, BookOpen, Shield, Globe, Users,
  GraduationCap, Brain, FlaskConical, Palette,
  Star, ChevronDown,
} from 'lucide-react'

function useReveal() {
  const ref = useRef()
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    const el = ref.current
    if (el) el.querySelectorAll('.reveal').forEach((item) => io.observe(item))
    return () => io.disconnect()
  }, [])
  return ref
}

/* ─── DATA ─── */
const serviceCards = [
  {
    icon: GraduationCap,
    title: 'Graduation',
    desc: 'The Heritage School was established in 2001 and is recognised for academic distinction.',
  },
  {
    icon: Users,
    title: 'University Life',
    desc: 'The Heritage School was established in 2001 and is recognised for holistic growth.',
  },
  {
    icon: BookOpen,
    title: 'Education Services',
    desc: 'The Heritage School was established in 2001 and is recognised for global curriculum.',
  },
]

const courses = [
  { icon: Brain,       title: 'Computer Science & AI',   grade: 'Grade 11–12', desc: 'Build intelligent systems with Python, ML, and robotics.',         color: '#2563eb' },
  { icon: FlaskConical, title: 'Mathematics & Sciences', grade: 'Grade 9–12',  desc: 'Master calculus, physics, and advanced chemistry.',                color: '#16a34a' },
  { icon: Palette,     title: 'Humanities & Arts',        grade: 'Grade 6–12', desc: 'Explore literature, history, and creative expression.',            color: '#9333ea' },
]

const stats = [
  { number: '3+',   label: 'Years of Language Education Experience', icon: Globe },
  { number: '99+',  label: 'Innovative Foreign Online Courses',       icon: BookOpen },
  { number: '10+',  label: 'Qualified Teachers and Language Experts', icon: Users },
  { number: '11+',  label: 'Learners Enrolled in Heritage Courses',   icon: GraduationCap },
]

const testimonials = [
  { name: 'Priya Sharma',   role: 'Parent, Grade 10', quote: 'The Heritage School transformed my daughter\'s approach to learning. The faculty genuinely care about each student\'s growth.',       stars: 5 },
  { name: 'Rohan Mehta',    role: 'Alumni, Batch 2022', quote: 'The mentorship and exposure I received gave me the confidence to pursue my dream at IIT Bombay.',                                   stars: 5, featured: true },
  { name: 'Dr. Sunita Rao', role: 'Parent, Grade 7',  quote: 'A truly holistic institution. My son excels not just academically but in sports and arts too.',                                        stars: 5 },
]

const Home = () => {
  const containerRef = useReveal()

  return (
    <div ref={containerRef}>

      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={homePageImage}
          alt="The Heritage School campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-36 w-full">
          <p className="text-white/70 text-xs font-semibold tracking-[0.22em] uppercase mb-5">
            The Heritage School
          </p>
          <h1 className="font-bold text-4xl md:text-6xl lg:text-[4.2rem] text-white leading-[1.1] mb-6 max-w-2xl word-reveal">
            <span className="block">Together We'll</span>
            <span className="block">Explore New Things</span>
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-lg leading-relaxed mb-9">
            We believe everyone should have the opportunity to create progress through knowledge, character, and academic excellence.
          </p>
          <Link to="/courses" className="btn-gold text-sm">
            Find Courses
          </Link>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 scroll-indicator">
          <ChevronDown className="w-5 h-5 text-white/40" />
        </div>
      </section>

      {/* ════════════════════ SERVICE CARDS STRIP ════════════════════ */}
      <section className="bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-0 border border-gray-200 rounded-2xl shadow-xl -mt-10 overflow-hidden">
            {serviceCards.map((s, i) => (
              <div
                key={i}
                className={`reveal flex flex-col gap-4 p-8 bg-white transition-all duration-300 hover:bg-blue-50 group ${
                  i < serviceCards.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-white flex items-center justify-center transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base mb-1.5">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <Link to="/about" className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold mt-auto hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ ABOUT TEASER ════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image mosaic */}
          <div className="relative reveal">
            {/* Decorative circle */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-dashed border-green-300 opacity-60 pointer-events-none" />
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-52 h-52 rounded-full border border-pink-300 opacity-40 pointer-events-none" />

            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-md col-span-1">
                <img src={section_2_1} alt="Students" className="w-full h-56 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md col-span-1 mt-8">
                <img src={section_2_2} alt="Campus" className="w-full h-56 object-cover" />
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">About Heritage</p>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 leading-[1.15] mb-5">
              Degrees in Various Academic Disciplines
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              The Heritage School, established in 2001, is a unique endeavour of the Kalyan Bharti Trust. Nestled in the lap of nature, the school provides an ideal atmosphere for learners to acquire and imbibe skills necessary for their physical, mental, social and intellectual development.
            </p>
            <ul className="space-y-3 mb-8">
              {['Access to all our courses', 'Learn the latest skills', 'Upskill your organisation'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                  <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-gold">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ STATS ════════════════════ */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="reveal flex flex-col items-center text-center gap-3 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-extrabold text-gray-900">{s.number}</p>
                <p className="text-gray-500 text-xs leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ COURSES TEASER ════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Curriculum</p>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">Programs That Inspire</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              Our carefully designed curriculum balances academic excellence with practical skills and creative thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {courses.map((course, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 shadow-sm card-hover reveal overflow-hidden">
                <div className="h-1" style={{ backgroundColor: course.color }} />
                <div className="p-7">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: course.color + '15' }}>
                    <course.icon className="w-6 h-6" style={{ color: course.color }} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{course.grade}</p>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{course.desc}</p>
                  <Link to="/courses" className="text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all" style={{ color: course.color }}>
                    Enroll <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link to="/courses" className="btn-outline">
              View All Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ TESTIMONIALS ════════════════════ */}
      <section className="py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
            <h2 className="font-bold text-3xl md:text-4xl text-gray-900">Voices of Our Community</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <div key={i} className={`rounded-2xl p-7 card-hover reveal ${t.featured ? 'bg-primary text-white shadow-lg' : 'bg-white border border-gray-200 shadow-sm'}`}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className={`w-4 h-4 fill-current ${t.featured ? 'text-yellow-300' : 'text-yellow-400'}`} />
                  ))}
                </div>
                <p className={`text-sm leading-relaxed mb-6 italic ${t.featured ? 'text-white/85' : 'text-gray-500'}`}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${t.featured ? 'bg-white/20 text-white' : 'bg-blue-100 text-primary'}`}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${t.featured ? 'text-white' : 'text-gray-900'}`}>{t.name}</p>
                    <p className={`text-xs ${t.featured ? 'text-white/60' : 'text-gray-400'}`}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CTA ════════════════════ */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="font-bold text-3xl md:text-4xl text-white mb-5 reveal">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/75 text-base mb-10 reveal">
            Join a community that believes in every student's potential. Applications for 2025–26 are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal">
            <Link to="/contact" className="btn-ghost">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="bg-white text-primary font-semibold text-sm px-6 py-2.5 rounded-md hover:bg-blue-50 transition-colors inline-flex items-center gap-2">
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
