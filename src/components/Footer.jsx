import { Link } from 'react-router-dom'
import { GraduationCap, Globe, MessageCircle, Share2, Video, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg leading-none">
              The <span className="text-blue-400">Heritage</span> School
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Nurturing brilliance since 2001. Shaping tomorrow's leaders with excellence in education, innovation, and character.
          </p>
          <div className="flex items-center gap-2.5">
            {[Globe, MessageCircle, Share2, Video].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center hover:bg-primary transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-sm tracking-wider uppercase text-gray-300 mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {[
              { to: '/about',   label: 'About Us' },
              { to: '/courses', label: 'Courses' },
              { to: '/faculty', label: 'Faculty' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-gray-400 text-sm hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-semibold text-sm tracking-wider uppercase text-gray-300 mb-5">Programs</h4>
          <ul className="space-y-3">
            {['Primary Education', 'Middle School', 'High School', 'Sports Academy', 'Arts & Music', 'STEM Programs'].map((item) => (
              <li key={item}>
                <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-sm tracking-wider uppercase text-gray-300 mb-5">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span className="text-gray-400 text-sm">123 Education Lane, Knowledge Park, Mumbai 400001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-gray-400 text-sm">+91 22 4000 1234</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="text-gray-400 text-sm">admissions@heritage.edu</span>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} The Heritage School. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
            <a key={item} href="#" className="text-gray-500 text-sm hover:text-white transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
