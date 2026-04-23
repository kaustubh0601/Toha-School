import { useState, useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Badge from '../components/Badge'
import Course_page from '../assets/Course_page.png'

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

const categories = ['All Programs', 'Primary', 'Middle School', 'High School', 'Sports']

const coursesData = [
  { id: 1, emoji: '🧮', title: 'Foundational Mathematics', category: 'Primary', grade: 'Grade 1–5', desc: 'Build strong number sense and problem-solving skills with hands-on activities and games.', color: '#3b82f6' },
  { id: 2, emoji: '📖', title: 'Language Arts', category: 'Primary', grade: 'Grade 1–5', desc: 'Develop reading fluency, creative writing, and confident communication through stories.', color: '#22c55e' },
  { id: 3, emoji: '🔬', title: 'Integrated Sciences', category: 'Middle School', grade: 'Grade 6–8', desc: 'Explore the wonders of biology, chemistry, and physics through project-based experiments.', color: '#f59e0b' },
  { id: 4, emoji: '🎨', title: 'Visual Arts', category: 'Middle School', grade: 'Grade 6–8', desc: 'Express creativity through drawing, painting, sculpture, and digital media exploration.', color: '#8b5cf6' },
  { id: 5, emoji: '🤖', title: 'Computer Science & AI', category: 'High School', grade: 'Grade 9–12', desc: 'Master Python, machine learning, data structures, and build intelligent applications.', color: '#3b82f6' },
  { id: 6, emoji: '📊', title: 'Business & Economics', category: 'High School', grade: 'Grade 11–12', desc: 'Understand markets, entrepreneurship, accounting, and global economic systems.', color: '#f43f5e' },
  { id: 7, emoji: '🌍', title: 'Global Studies', category: 'High School', grade: 'Grade 9–12', desc: 'Study world history, international relations, geography, and cultural exchange.', color: '#f59e0b' },
  { id: 8, emoji: '⚽', title: 'Sports Academy', category: 'Sports', grade: 'All Grades', desc: 'Professional coaching in football, cricket, basketball, swimming, and athletics.', color: '#06b6d4' },
  { id: 9, emoji: '🎵', title: 'Music & Performing Arts', category: 'Sports', grade: 'All Grades', desc: 'Train in vocal music, instruments, theater, and dance with performance opportunities.', color: '#22c55e' },
]

const timetable = [
  { time: '8:00 AM', mon: 'Mathematics', tue: 'English', wed: 'Science', thu: 'Hindi', fri: 'Arts' },
  { time: '8:50 AM', mon: 'English', tue: 'Mathematics', wed: 'Computer Sc.', thu: 'Mathematics', fri: 'Science' },
  { time: '9:40 AM', mon: 'Science', tue: 'Hindi', wed: 'Mathematics', thu: 'English', fri: 'Social Studies' },
  { time: '10:30 AM', isBreak: true, label: '☕ Morning Break' },
  { time: '11:00 AM', mon: 'Social Studies', tue: 'Science', wed: 'English', thu: 'Arts', fri: 'Mathematics' },
  { time: '11:50 AM', mon: 'Computer Sc.', tue: 'Arts', wed: 'Hindi', thu: 'Science', fri: 'English' },
  { time: '12:40 PM', isBreak: true, label: '🍽️ Lunch Break' },
  { time: '1:30 PM', mon: 'Sports / PE', tue: 'Library', wed: 'Sports / PE', thu: 'Lab Work', fri: 'Club Activities' },
  { time: '2:20 PM', mon: 'Lab Work', tue: 'Sports / PE', wed: 'Club Activities', thu: 'Sports / PE', fri: 'Library' },
  { time: '3:10 PM', mon: 'Free Period', tue: 'Free Period', wed: 'Free Period', thu: 'Free Period', fri: 'Assembly' },
]

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('All Programs')
  const containerRef = useReveal()

  const filteredCourses = activeFilter === 'All Programs'
    ? coursesData
    : coursesData.filter(c => c.category === activeFilter)

  return (
    <div ref={containerRef}>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative page-hero-soft py-28 overflow-hidden border-b border-navy/10">
        <div className="absolute inset-0 page-hero-soft-grid" />
        <div className="absolute top-12 left-[8%] w-4 h-4 bg-[#ff3d5a] rounded-sm" />
        <div className="absolute top-12 right-[14%] text-navy/35 text-3xl tracking-widest">~~~</div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="mb-6">Programs</Badge>
            <h1 className="font-playfair text-5xl md:text-6xl font-black text-navy mb-6 leading-[1.05]">
              Our Courses & Programs
            </h1>
            <p className="text-navy/60 text-lg max-w-xl">
              Discover our comprehensive curriculum designed to nurture every student's unique potential.
            </p>
          </div>

          <div className="relative hidden lg:flex justify-center">
            <div className="absolute top-14 right-6 w-52 h-52 rounded-full border-[10px] border-gold/20" />
            <img
              src={Course_page}
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

      {/* ════════════════════ FILTER + GRID ════════════════════ */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14 reveal">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-navy text-white shadow-lg'
                    : 'bg-white text-navy/60 border border-gray-200 hover:border-navy/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-md card-hover reveal relative">
                <div className="h-1" style={{ backgroundColor: course.color }} />
                <div className="absolute top-5 right-5">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-navy/5 text-navy/60">
                    {course.grade}
                  </span>
                </div>
                <div className="p-7">
                  <span className="text-4xl mb-4 block">{course.emoji}</span>
                  <p className="text-xs font-mono uppercase tracking-wider mb-2" style={{ color: course.color }}>
                    {course.category}
                  </p>
                  <h3 className="font-playfair text-xl font-bold text-navy mb-3">{course.title}</h3>
                  <p className="text-navy/50 text-sm leading-relaxed mb-5">{course.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                      {['bg-blue-400', 'bg-emerald-400', 'bg-gold'].map((bg, j) => (
                        <div key={j} className={`w-7 h-7 rounded-full ${bg} border-2 border-white`} />
                      ))}
                      <div className="w-7 h-7 rounded-full bg-navy/10 border-2 border-white flex items-center justify-center">
                        <span className="text-[10px] font-bold text-navy/50">+8</span>
                      </div>
                    </div>
                    <button className="text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all" style={{ color: course.color }}>
                      Enroll <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ TIMETABLE ════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <Badge>Schedule</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy mt-4 mb-4">
              Class Timetable
            </h2>
            <p className="text-navy/50 text-lg">A balanced day designed for academic and personal growth.</p>
          </div>

          <div className="overflow-x-auto rounded-3xl shadow-lg reveal">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="px-6 py-4 text-left text-sm font-mono uppercase tracking-wider">Time</th>
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                    <th key={day} className="px-6 py-4 text-left text-sm font-mono uppercase tracking-wider">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timetable.map((row, i) => (
                  row.isBreak ? (
                    <tr key={i} className="bg-amber-50">
                      <td className="px-6 py-3 text-sm font-mono text-navy/60">{row.time}</td>
                      <td colSpan={5} className="px-6 py-3 text-center text-sm italic text-navy/50 font-medium">
                        {row.label}
                      </td>
                    </tr>
                  ) : (
                    <tr key={i} className="border-b border-gray-100 hover:bg-cream/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono text-navy/60 font-medium">{row.time}</td>
                      <td className="px-6 py-4 text-sm text-navy/70">{row.mon}</td>
                      <td className="px-6 py-4 text-sm text-navy/70">{row.tue}</td>
                      <td className="px-6 py-4 text-sm text-navy/70">{row.wed}</td>
                      <td className="px-6 py-4 text-sm text-navy/70">{row.thu}</td>
                      <td className="px-6 py-4 text-sm text-navy/70">{row.fri}</td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
