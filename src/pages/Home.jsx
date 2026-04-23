import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Badge from '../components/Badge'
import homePageImage from '../assets/Home_page.png'
import section_2_1 from "../assets/section_2_1.png"
import section_2_2 from "../assets/section_2_2.png"


import {
  ArrowRight, ChevronDown, BookOpen, Shield, Globe, Users,
  Sparkles, GraduationCap, Award, Star, Play,
  Brain, FlaskConical, Palette
} from 'lucide-react'

/* ─── Scroll Reveal Hook ─── */
function useReveal() {
  const ref = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    const el = ref.current
    if (el) {
      el.querySelectorAll('.reveal').forEach((item) => observer.observe(item))
    }
    return () => observer.disconnect()
  }, [])
  return ref
}

/* ─── DATA ─── */
const quickInfo = [
  { icon: BookOpen, color: 'bg-blue-100 text-blue-600', title: 'Admissions Open', sub: '2025–26 batch enrollment active' },
  { icon: Users, color: 'bg-emerald-100 text-emerald-600', title: 'Small Batch Sizes', sub: 'Max 30 students per class' },
  { icon: Shield, color: 'bg-amber-100 text-amber-600', title: 'Safe Campus', sub: 'CCTV & trained security 24/7' },
  { icon: Globe, color: 'bg-purple-100 text-purple-600', title: 'Global Curriculum', sub: 'Cambridge & CBSE affiliated' },
]

const courses = [
  { icon: Brain, title: 'Computer Science & AI', grade: 'Grade 11–12', desc: 'Build intelligent systems with Python, ML, and robotics.', color: '#3b82f6' },
  { icon: FlaskConical, title: 'Mathematics & Sciences', grade: 'Grade 9–12', desc: 'Master calculus, physics, and advanced chemistry.', color: '#f59e0b' },
  { icon: Palette, title: 'Humanities & Arts', grade: 'Grade 6–12', desc: 'Explore literature, history, and creative expression.', color: '#8b5cf6' },
]

const testimonials = [
  { name: 'Priya Sharma', role: 'Parent, Grade 10', quote: 'The Heritage School transformed my daughter\'s approach to learning. The faculty genuinely care about each student\'s growth.', stars: 5 },
  { name: 'Rohan Mehta', role: 'Alumni, Batch 2022', quote: 'The mentorship and exposure I received at The Heritage School gave me the confidence to pursue my dream at IIT Bombay.', stars: 5, dark: true },
  { name: 'Dr. Sunita Rao', role: 'Parent, Grade 7', quote: 'A truly holistic institution. My son excels not just academically but in sports and arts too.', stars: 5 },
]

const stats = [
  { number: '5000+', label: 'Students Enrolled', gold: false },
  { number: '98%', label: 'Placement Rate', gold: true },
  { number: '150+', label: 'Expert Faculty', gold: false },
  { number: '47', label: 'National Awards', gold: true },
]

const Home = () => {
  const containerRef = useReveal()

  return (
    <div ref={containerRef}>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Hero background image */}
        <img
          src={homePageImage}
          alt="School campus background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/45 to-black/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="max-w-2xl">
            <Badge className="mb-5">✨ Admissions Open 2025–26</Badge>

            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight mb-5 word-reveal drop-shadow-[0_6px_26px_rgba(0,0,0,0.65)]">
              <span className="block">Where</span>
              <span className="gradient-text block">Brilliance</span>
              <span className="block">Meets Purpose</span>
            </h1>

            <p className="text-white/95 text-base md:text-xl max-w-xl leading-relaxed mb-8 font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
              A premier institution nurturing future leaders through innovation,
              character, and academic excellence since 1998.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/courses" className="btn-gold flex items-center gap-2 text-base">
                Explore Courses <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="btn-ghost flex items-center gap-2 text-base">
                <Play className="w-4 h-4" /> Watch Story
              </button>
            </div>
          </div>

          {/* RIGHT — Stats card */}
          {/* <div className="hidden lg:flex justify-end relative">
            <div className="glass rounded-3xl p-8 w-full max-w-md">
              <h3 className="font-playfair text-white text-xl font-bold mb-6">Why The Heritage School?</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { num: '25+', label: 'Years Legacy', icon: Award },
                  { num: '98%', label: 'Placements', icon: Sparkles },
                  { num: '150+', label: 'Faculty', icon: Users },
                  { num: '5K+', label: 'Alumni Network', icon: GraduationCap },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <s.icon className="w-8 h-8 text-gold mx-auto mb-2" />
                    <p className="text-2xl font-playfair font-bold text-white">{s.num}</p>
                    <p className="text-white/50 text-xs font-mono uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating mini card */}
            <div className="absolute -bottom-4 -left-6 glass rounded-2xl px-5 py-3 flex items-center gap-3 animate-float">
              <div className="pulse-dot" />
              <div>
                <p className="text-white text-sm font-semibold">New Enrollment</p>
                <p className="text-white/50 text-xs">12 students joined today</p>
              </div>
            </div>
          {/* </div> */} 
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
          <ChevronDown className="w-6 h-6 text-white/40" />
        </div>
      </section>

      {/* ════════════════════ ABOUT TEASER ════════════════════ */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — images */}
          <div className="relative reveal">
            <div className="rounded-3xl overflow-hidden shadow-2xl w-[70%]">
              <img
                src={section_2_1}
                alt="Students collaborating in classroom"
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="absolute top-16 right-0 rounded-3xl overflow-hidden shadow-2xl w-[55%] border-4 border-cream">
              <img
                src={section_2_2}
                alt="Campus aerial view"
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-8 glass bg-white/90 backdrop-blur-md rounded-2xl px-5 py-3 shadow-xl animate-float">
              <p className="text-3xl font-playfair font-black text-navy">25+</p>
              <p className="text-navy/60 text-xs font-mono uppercase tracking-wider">Years of Excellence</p>
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal">
            <Badge>Our Story</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy mt-4 mb-6">
              A Legacy of Nurturing Futures
            </h2>
            <p className="text-navy/60 text-lg leading-relaxed mb-6">
             
The Heritage School, established in 2001, is a unique endeavour of the Kalyan Bharti Trust to recreate the ancient Gurukul tradition of India. Nestled in the lap of nature, the school provides an ideal atmosphere for learners to acquire and imbibe skills necessary for their physical, mental, social and intellectual development.
            </p>
            <ul className="space-y-3 mb-8">
              {[ 'State-of-the-art laboratories', 'Award-winning sports program', '100% college acceptance rate'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-navy/70">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn-navy inline-flex items-center gap-2">
              Read Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ QUICK INFO BAR ════════════════════ */}
      <section className="bg-cream pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative bg-navy-deep rounded-3xl overflow-hidden shadow-2xl">
            <div className="h-1.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {quickInfo.map((item, i) => (
                <div key={i} className="reveal flex items-center gap-4 px-5 py-6 md:px-6 md:py-7">
                  <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-gold-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm leading-tight">{item.title}</p>
                    <p className="text-white/55 text-xs">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ COURSES TEASER ════════════════════ */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <Badge>Curriculum</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy mt-4 mb-4">
              Programs That Inspire
            </h2>
            <p className="text-navy/50 text-lg max-w-2xl mx-auto">
              Our carefully designed curriculum balances academic excellence with practical skills and creative thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-md card-hover reveal">
                <div className="h-1" style={{ backgroundColor: course.color }} />
                <div className="p-7">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ backgroundColor: course.color + '15' }}>
                    <course.icon className="w-7 h-7" style={{ color: course.color }} />
                  </div>
                  <p className="text-xs font-mono uppercase tracking-wider text-navy/40 mb-2">{course.grade}</p>
                  <h3 className="font-playfair text-xl font-bold text-navy mb-3">{course.title}</h3>
                  <p className="text-navy/50 text-sm leading-relaxed mb-5">{course.desc}</p>
                  <Link to="/courses" className="text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all" style={{ color: course.color }}>
                    Enroll <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl border-2 border-navy/20 text-navy font-semibold hover:bg-navy hover:text-white transition-all duration-300"
            >
              View All 12 Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════ STATS BAR ════════════════════ */}
      <section className="bg-navy-deep py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="reveal">
                <p className={`text-5xl md:text-6xl font-playfair font-black mb-2 ${s.gold ? 'gradient-text' : 'text-white'}`}>
                  {s.number}
                </p>
                <p className="text-white/40 text-sm font-mono uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ TESTIMONIALS ════════════════════ */}
      <section className="bg-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <Badge>Testimonials</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy mt-4 mb-4">
              Voices of Our Community
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 card-hover reveal ${
                  t.dark ? 'bg-navy text-white' : 'bg-white shadow-md'
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className={`italic leading-relaxed mb-6 ${t.dark ? 'text-white/80' : 'text-navy/60'}`}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-playfair font-bold text-sm ${t.dark ? 'bg-gold/20 text-gold' : 'bg-navy/10 text-navy'}`}>
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${t.dark ? 'text-white' : 'text-navy'}`}>{t.name}</p>
                    <p className={`text-xs ${t.dark ? 'text-white/50' : 'text-navy/40'}`}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════ CTA SECTION ════════════════════ */}
      <section className="bg-cream pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-4xl bg-navy-deep overflow-hidden shadow-2xl">
            <div className="h-1.5 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400" />
            <div className="absolute top-10 right-10 w-72 h-72 border border-white/5 rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 border border-white/5 rounded-full -translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-20">
              <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mb-6 reveal">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-white/65 text-lg mb-10 reveal">
                Join a community that believes in every student's potential.
                Applications for 2025–26 are now open.
              </p>
              <div className="flex flex-wrap justify-center gap-4 reveal">
                <Link to="/contact" className="btn-gold text-base flex items-center gap-2">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-ghost text-base">
                  Schedule a Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
