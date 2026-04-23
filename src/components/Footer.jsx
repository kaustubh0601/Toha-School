import { Link } from 'react-router-dom'
import { GraduationCap, Globe, MessageCircle, Share2, Video, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Socials */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="font-playfair text-xl font-bold">
              The <span className="text-gold">Heritage</span> School
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Nurturing brilliance since 1998. Shaping tomorrow's leaders with excellence in education, innovation, and character.
            </p>
            <div className="flex items-center gap-3">
              {[Globe, MessageCircle, Share2, Video].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-gold/20 hover:text-gold transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/courses', label: 'Courses' },
                { to: '/faculty', label: 'Faculty' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/60 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-5">Programs</h4>
            <ul className="space-y-3">
              {[
                'Primary Education',
                'Middle School',
                'High School',
                'Sports Academy',
                'Arts & Music',
                'STEM Programs',
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/60 text-sm hover:text-gold transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-5">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/60 text-sm">123 Education Lane, Knowledge Park, Mumbai 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/60 text-sm">+91 22 4000 1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span className="text-white/60 text-sm">admissions@luminary.edu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()}  The Heritage School. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-white/40 text-sm hover:text-gold transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
