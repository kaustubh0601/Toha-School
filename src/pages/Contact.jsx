import { useState, useEffect, useRef } from 'react'
import { Send, Phone, Mail, MapPin, Clock, ChevronDown, ArrowRight } from 'lucide-react'
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

const faqs = [
  { q: 'What is the admission process?', a: 'The admission process includes an online application, entrance assessment, parent-student interaction, and document verification. Applications open in January each year for the next academic session.' },
  { q: 'Are scholarships available?', a: 'Yes, we offer merit-based scholarships covering up to 100% tuition for academically outstanding students. Sports and arts scholarships are also available. Contact admissions for eligibility criteria.' },
  { q: 'Is bus facility available?', a: 'We operate a fleet of 25+ GPS-tracked buses covering all major routes across the city. AC and non-AC options are available with trained attendants on every bus.' },
  { q: 'Which board does the school follow?', a: 'The Heritage School is affiliated with both CBSE and Cambridge Assessment International Education (CAIE), giving students the flexibility to choose their examination board.' },
  { q: 'Is hostel accommodation available?', a: 'Yes, we have separate hostel facilities for boys and girls with 24/7 wardens, nutritious meals, study hours, and recreational activities. Limited seats available.' },
  { q: 'Can we visit the campus?', a: 'Absolutely! We encourage campus visits. You can schedule a guided tour through our website or by calling the admissions office. Visits are available Monday to Saturday, 9 AM to 4 PM.' },
]

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '123 Education Lane, Knowledge Park, Mumbai 400001', color: 'bg-blue-100 text-blue-600' },
  { icon: Phone, label: 'Phone', value: '+91 22 4000 1234', color: 'bg-emerald-100 text-emerald-600' },
  { icon: Mail, label: 'Email', value: 'admissions@luminary.edu', color: 'bg-amber-100 text-amber-600' },
  { icon: Clock, label: 'Office Hours', value: 'Mon–Sat: 8:00 AM – 5:00 PM', color: 'bg-purple-100 text-purple-600' },
]

const Contact = ({ showToast }) => {
  const containerRef = useReveal()
  const [openFaq, setOpenFaq] = useState(null)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', enquiry: '', message: '' })
  const [quickForm, setQuickForm] = useState({ studentName: '', parentContact: '', grade: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    showToast('Thank you! Your message has been sent successfully.')
    setForm({ firstName: '', lastName: '', email: '', phone: '', enquiry: '', message: '' })
  }

  const handleQuickSubmit = (e) => {
    e.preventDefault()
    showToast('Callback requested! Our team will reach out within 24 hours.')
    setQuickForm({ studentName: '', parentContact: '', grade: '' })
  }

  return (
    <div ref={containerRef}>
      {/* ════════════════════ HERO ════════════════════ */}
      <section className="relative page-hero-soft py-28 overflow-hidden border-b border-navy/10">
        <div className="absolute inset-0 page-hero-soft-grid" />
        <div className="absolute top-12 left-[8%] w-4 h-4 bg-[#ff3d5a] rounded-sm" />
        <div className="absolute top-12 right-[14%] text-navy/35 text-3xl tracking-widest">~~~</div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Badge className="mb-6">Get in Touch</Badge>
            <h1 className="font-playfair text-5xl md:text-6xl font-black text-navy mb-6 leading-[1.05]">
              Let's Start a Conversation
            </h1>
            <p className="text-navy/60 text-lg max-w-xl">
              Have questions about admissions, programs, or campus life? We'd love to hear from you.
            </p>
          </div>

          <div className="relative hidden lg:flex justify-center">
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

      {/* ════════════════════ FORM + SIDEBAR ════════════════════ */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* LEFT — Main Form */}
            <div className="lg:col-span-3 reveal">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-md">
                <h2 className="font-playfair text-2xl font-bold text-navy mb-2">Send us a Message</h2>
                <p className="text-navy/40 text-sm mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy/70 mb-2">First Name</label>
                      <input
                        type="text"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream/50 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy/70 mb-2">Last Name</label>
                      <input
                        type="text"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream/50 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy/70 mb-2">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream/50 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy/70 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream/50 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy/70 mb-2">Enquiry Type</label>
                    <div className="relative">
                      <select
                        value={form.enquiry}
                        onChange={(e) => setForm({ ...form, enquiry: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream/50 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all appearance-none cursor-pointer"
                        required
                      >
                        <option value="">Select an option</option>
                        <option value="admission">Admission Enquiry</option>
                        <option value="fees">Fee Structure</option>
                        <option value="transport">Transport Facility</option>
                        <option value="academic">Academic Programs</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-navy/30 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy/70 mb-2">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-cream/50 text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all resize-none"
                      placeholder="Tell us how we can help..."
                      required
                    />
                  </div>

                  <button type="submit" className="btn-navy w-full flex items-center justify-center gap-2 text-base !py-4 !rounded-2xl">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* RIGHT — Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Info Card */}
              <div className="bg-white rounded-3xl p-7 shadow-md reveal">
                <h3 className="font-playfair text-xl font-bold text-navy mb-5">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl ${info.color} flex items-center justify-center shrink-0`}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider text-navy/40 mb-0.5">{info.label}</p>
                        <p className="text-navy text-sm font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Admission Card */}
              <div className="bg-gradient-to-br from-navy via-navy-mid to-navy rounded-3xl p-7 reveal">
                <h3 className="font-playfair text-xl font-bold text-white mb-2">Quick Admission Enquiry</h3>
                <p className="text-white/50 text-sm mb-6">Get a callback from our admissions team.</p>

                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <input
                    type="text"
                    value={quickForm.studentName}
                    onChange={(e) => setQuickForm({ ...quickForm, studentName: e.target.value })}
                    placeholder="Student Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/30"
                    required
                  />
                  <input
                    type="tel"
                    value={quickForm.parentContact}
                    onChange={(e) => setQuickForm({ ...quickForm, parentContact: e.target.value })}
                    placeholder="Parent Contact"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-gold/30"
                    required
                  />
                  <div className="relative">
                    <select
                      value={quickForm.grade}
                      onChange={(e) => setQuickForm({ ...quickForm, grade: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 appearance-none cursor-pointer"
                      required
                    >
                      <option value="" className="text-navy">Select Grade</option>
                      {['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map(g => (
                        <option key={g} value={g} className="text-navy">{g}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                  </div>
                  <button type="submit" className="btn-gold w-full text-sm !py-3">
                    Request Callback
                  </button>
                </form>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl p-7 shadow-md reveal">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Find Us on Map</p>
                    <p className="text-navy/40 text-xs">123 Education Lane, Mumbai</p>
                  </div>
                </div>
                <div className="h-36 rounded-2xl bg-navy/5 flex items-center justify-center mb-4">
                  <span className="text-4xl">📍</span>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-navy flex items-center gap-1 hover:gap-2 hover:text-gold transition-all"
                >
                  Open in Maps <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════ FAQ ════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <Badge>FAQ</Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-navy mt-4 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden reveal"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-cream/50 transition-colors"
                >
                  <span className="font-semibold text-navy text-sm pr-4">{faq.q}</span>
                  <span className={`text-navy/30 text-xl transition-transform duration-300 shrink-0 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 text-navy/50 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
