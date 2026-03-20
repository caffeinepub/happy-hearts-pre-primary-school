import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  ChevronDown,
  GraduationCap,
  Heart,
  Instagram,
  MapPin,
  Menu,
  Palette,
  Phone,
  Shield,
  Star,
  Users,
  X,
  Youtube,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Admissions", href: "#admissions" },
  { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

const WHY_CHOOSE_US = [
  {
    emoji: "🛡️",
    title: "Safe & Caring Environment",
    desc: "A secure, nurturing space where every child feels loved, protected, and confident to explore.",
    icon: Shield,
  },
  {
    emoji: "📚",
    title: "Activity-Based Learning",
    desc: "Hands-on activities that make learning joyful, engaging, and effective for young minds.",
    icon: BookOpen,
  },
  {
    emoji: "👩‍🏫",
    title: "Friendly & Qualified Teachers",
    desc: "Experienced, passionate educators who guide children with patience and warmth.",
    icon: Users,
  },
  {
    emoji: "🎨",
    title: "Creative Development",
    desc: "Art, craft, music, and dance activities that nurture creativity and self-expression.",
    icon: Palette,
  },
  {
    emoji: "🎉",
    title: "Fun Celebrations & Events",
    desc: "Regular festivals, celebrations, and special events that create lasting memories.",
    icon: Star,
  },
];

const ACTIVITIES = [
  {
    title: "Art & Craft",
    desc: "Creative hands-on art projects that develop fine motor skills and self-expression.",
    img: "/assets/uploads/IMG-20250609-WA0012-10.jpg",
    emoji: "🎨",
  },
  {
    title: "Storytelling",
    desc: "Interactive stories that build language, imagination, and listening skills.",
    img: "/assets/uploads/IMG-20251112-WA0066-1.jpg",
    emoji: "📖",
  },
  {
    title: "Music & Dance",
    desc: "Rhythm, movement, and music to develop coordination and joyful expression.",
    img: "/assets/uploads/IMG-20260320-WA0023-2.jpg",
    emoji: "🎵",
  },
  {
    title: "Celebration Days",
    desc: "Festive celebrations of Indian culture and traditions with fun activities.",
    img: "/assets/uploads/IMG-20250715-WA0052-18.jpg",
    emoji: "🎉",
  },
  {
    title: "Play-Based Learning",
    desc: "Learning through play — the most natural and effective way for young children.",
    img: "/assets/uploads/IMG_20260315_121727-15.jpg",
    emoji: "🧸",
  },
  {
    title: "Kids Classroom Activities",
    desc: "Structured group activities that build social skills and cooperative learning.",
    img: "/assets/uploads/IMG_20260315_121751-4.jpg",
    emoji: "✏️",
  },
];

const GALLERY_PHOTOS = [
  {
    src: "/assets/uploads/IMG-20260320-WA0020-3.jpg",
    alt: "Group photo with balloon arch",
  },
  {
    src: "/assets/uploads/IMG-20260320-WA0022-5.jpg",
    alt: "Independence Day salute",
  },
  {
    src: "/assets/uploads/IMG-20250815-WA0050-6.jpg",
    alt: "Republic Day celebration",
  },
  {
    src: "/assets/uploads/IMG-20260320-WA0024-7.jpg",
    alt: "Certificate ceremony",
  },
  {
    src: "/assets/uploads/IMG-20250814-WA0314-8.jpg",
    alt: "Janmashtami celebration",
  },
  {
    src: "/assets/uploads/IMG-20250609-WA0012-10.jpg",
    alt: "Handprint art activity",
  },
  {
    src: "/assets/uploads/IMG-20260320-WA0025-11.jpg",
    alt: "Birthday celebration",
  },
  {
    src: "/assets/uploads/IMG_20260315_121727-15.jpg",
    alt: "Classroom sitting",
  },
  {
    src: "/assets/uploads/IMG-20250715-WA0052-18.jpg",
    alt: "Christmas celebration",
  },
  {
    src: "/assets/uploads/IMG-20250319-WA0131-20.jpg",
    alt: "Holi celebration",
  },
  {
    src: "/assets/uploads/IMG-20251112-WA0066-1.jpg",
    alt: "Classroom activity",
  },
  {
    src: "/assets/uploads/IMG-20260320-WA0023-2.jpg",
    alt: "Independence Day dance",
  },
];

const EVENTS = [
  {
    title: "Independence Day Celebration",
    date: "15 Aug",
    year: "2025",
    desc: "Students celebrated Independence Day with patriotic performances, flag hoisting, and cultural activities.",
    img: "/assets/uploads/IMG-20260320-WA0022-5.jpg",
    color: "from-orange-400 to-green-500",
  },
  {
    title: "Republic Day Celebration",
    date: "26 Jan",
    year: "2025",
    desc: "Colourful Republic Day celebrations with performances, crafts, and patriotic songs by our little stars.",
    img: "/assets/uploads/IMG-20250815-WA0050-6.jpg",
    color: "from-blue-400 to-orange-400",
  },
  {
    title: "Janmashtami Celebration",
    date: "14 Aug",
    year: "2025",
    desc: "Little Krishna and Radha stole hearts as children dressed up in traditional attire for Janmashtami.",
    img: "/assets/uploads/IMG-20250814-WA0314-8.jpg",
    color: "from-purple-400 to-yellow-400",
  },
  {
    title: "Annual Prize Distribution",
    date: "20 Mar",
    year: "2026",
    desc: "Proud moments as students received certificates and prizes celebrating their achievements and growth.",
    img: "/assets/uploads/IMG-20260320-WA0024-7.jpg",
    color: "from-yellow-400 to-blue-400",
  },
];

const CLASSES = [
  {
    name: "Playgroup",
    age: "2 – 2.5 yrs",
    emoji: "🧸",
    desc: "First step into structured play and social learning",
  },
  {
    name: "Nursery",
    age: "2.5 – 3.5 yrs",
    emoji: "🌱",
    desc: "Building foundational skills through fun activities",
  },
  {
    name: "Jr KG",
    age: "3.5 – 4.5 yrs",
    emoji: "📝",
    desc: "Introduction to letters, numbers, and creative arts",
  },
  {
    name: "Sr KG",
    age: "4.5 – 5.5 yrs",
    emoji: "🎓",
    desc: "School readiness with confidence and curiosity",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [lightboxImg, setLightboxImg] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = [
        "home",
        "about",
        "activities",
        "gallery",
        "events",
        "admissions",
        "contact",
      ];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const visibleGallery = showAllGallery
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.slice(0, 8);

  return (
    <div className="min-h-screen font-poppins">
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img
                src="/assets/uploads/IMG_20250312_190020-9.jpg"
                alt="Happy Hearts Pre Primary School Logo"
                className="h-12 w-12 lg:h-14 lg:w-14 rounded-full object-cover border-2 border-school-yellow shadow-sm"
              />
              <div className="hidden sm:block">
                <p className="font-bold text-school-blue text-sm leading-tight">
                  Happy Hearts
                </p>
                <p className="text-xs text-gray-500 leading-tight">
                  Pre Primary School
                </p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  data-ocid={`nav.${link.label.toLowerCase()}.link`}
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "bg-school-blue text-white"
                      : "text-gray-600 hover:text-school-blue hover:bg-blue-50"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              data-ocid="nav.mobile_menu.toggle"
              className="lg:hidden p-2 rounded-lg text-school-blue"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    type="button"
                    key={link.label}
                    data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                    onClick={() => scrollTo(link.href)}
                    className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-school-blue text-white"
                        : "text-gray-700 hover:bg-blue-50"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/uploads/IMG-20260320-WA0020-3.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/75 via-blue-900/65 to-blue-900/80" />

        {/* Admission badge */}
        <div className="absolute top-24 right-4 lg:top-28 lg:right-8">
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, type: "spring" }}
            className="bg-school-yellow text-school-blue font-bold text-xs lg:text-sm px-4 py-2 rounded-full shadow-lg border-2 border-white"
          >
            🎉 Admissions Open 2025-26
          </motion.div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/assets/uploads/IMG_20250312_190020-9.jpg"
              alt="School Logo"
              className="h-24 w-24 lg:h-32 lg:w-32 rounded-full object-cover border-4 border-school-yellow shadow-2xl mx-auto mb-6"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4"
          >
            Happy Hearts
            <span className="block text-school-yellow">Pre Primary School</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg lg:text-2xl text-white/90 font-medium mb-8 italic"
          >
            "Caring for Your Child and You"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              type="button"
              data-ocid="hero.admissions.primary_button"
              onClick={() => scrollTo("#contact")}
              className="bg-school-yellow text-school-blue font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:brightness-105 transition-all duration-200 hover:scale-105"
            >
              🎒 Admissions Open – Contact Now
            </button>
            <button
              type="button"
              data-ocid="hero.about.secondary_button"
              onClick={() => scrollTo("#about")}
              className="bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-lg border-2 border-white/50 hover:bg-white/30 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Learn More <ChevronDown className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-school-yellow/20 text-school-blue border-school-yellow/30 mb-4 font-semibold">
                ❤️ Welcome to Happy Hearts
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-black text-school-blue mb-6 leading-tight">
                About Our School
              </h2>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                Welcome to Happy Hearts Pre Primary School! We believe every
                child deserves a nurturing, joyful start to their educational
                journey. Our school provides a safe, caring, and fun learning
                environment where young children can explore, discover, and grow
                through activity-based learning.
              </p>
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
                At Happy Hearts, we focus on the holistic development of each
                child — emotionally, socially, and intellectually — guided by
                our experienced and loving teachers.
              </p>

              {/* Class badges */}
              <div className="mb-6">
                <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                  Classes Offered
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Playgroup", "Nursery", "Jr KG", "Sr KG"].map((cls) => (
                    <span
                      key={cls}
                      className="bg-school-blue text-white px-5 py-2 rounded-full font-semibold text-sm shadow-sm"
                    >
                      {cls}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                data-ocid="about.admissions.primary_button"
                onClick={() => scrollTo("#admissions")}
                className="bg-school-yellow text-school-blue font-bold px-8 py-3 rounded-full shadow-md hover:brightness-105 transition-all hover:scale-105"
              >
                🎓 Apply for Admission
              </button>
            </motion.div>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-school-yellow/30 rounded-full -z-10" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-school-blue/10 rounded-full -z-10" />
              <img
                src="/assets/uploads/IMG-20251112-WA0066-1.jpg"
                alt="Classroom activities at Happy Hearts"
                className="rounded-2xl shadow-2xl w-full object-cover h-80 lg:h-[500px]"
              />
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="bg-school-yellow/20 rounded-full p-2">
                  <Heart className="h-6 w-6 text-school-blue fill-school-yellow" />
                </div>
                <div>
                  <p className="font-bold text-school-blue text-sm">
                    Happy Learners
                  </p>
                  <p className="text-xs text-gray-500">
                    Activity-based curriculum
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 lg:py-24 bg-school-yellow/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-school-blue/10 text-school-blue border-school-blue/20 mb-4 font-semibold">
              ⭐ Why Choose Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-black text-school-blue">
              Why Happy Hearts?
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              We give your child the best start in life
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-school-blue text-sm lg:text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs lg:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES SECTION */}
      <section id="activities" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-school-yellow/20 text-school-blue border-school-yellow/30 mb-4 font-semibold">
              🎭 Our Activities
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-black text-school-blue">
              What We Do
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Engaging activities for holistic child development
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES.map((activity, i) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={activity.img}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-blue/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-3xl">
                    {activity.emoji}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-school-blue text-lg mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {activity.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="gallery" className="py-16 lg:py-24 bg-school-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-white/60 text-school-blue border-green-200 mb-4 font-semibold">
              📸 Our Gallery
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-black text-school-blue">
              Moments & Memories
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              A glimpse into our vibrant school life
            </p>
          </div>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {visibleGallery.map((photo, i) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
                className="break-inside-avoid"
              >
                <button
                  type="button"
                  data-ocid={`gallery.item.${i + 1}`}
                  className="w-full rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer block"
                  onClick={() => setLightboxImg(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto object-cover"
                  />
                </button>
              </motion.div>
            ))}
          </div>

          {!showAllGallery && GALLERY_PHOTOS.length > 8 && (
            <div className="text-center mt-8">
              <button
                type="button"
                data-ocid="gallery.show_more.button"
                onClick={() => setShowAllGallery(true)}
                className="bg-school-blue text-white font-bold px-8 py-3 rounded-full shadow-md hover:bg-school-blue/90 transition-all hover:scale-105"
              >
                Show All Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-ocid="gallery.lightbox.modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxImg(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightboxImg.src}
              alt={lightboxImg.alt}
              className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              data-ocid="gallery.lightbox.close_button"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* EVENTS SECTION */}
      <section id="events" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-school-yellow/20 text-school-blue border-school-yellow/30 mb-4 font-semibold">
              🎊 School Events
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-black text-school-blue">
              Our Celebrations
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              Creating cherished memories throughout the year
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVENTS.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`events.item.${i + 1}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {/* Date badge */}
                  <div className="absolute top-3 left-3 bg-white rounded-xl px-3 py-1.5 text-center shadow-md">
                    <p className="text-school-blue font-black text-sm leading-none">
                      {event.date}
                    </p>
                    <p className="text-gray-400 text-xs">{event.year}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-school-blue text-base mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSIONS SECTION */}
      <section
        id="admissions"
        className="py-16 lg:py-24 bg-gradient-to-br from-school-blue to-blue-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-school-yellow text-school-blue font-black px-6 py-2 rounded-full text-sm mb-4 shadow-md">
              🎒 Admissions Open 2025-26
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
              Enrol Your Child Today
            </h2>
            <p className="text-white/80 text-lg">
              Limited seats available — secure your child's future now
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {CLASSES.map((cls, i) => (
              <motion.div
                key={cls.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`admissions.class.item.${i + 1}`}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{cls.emoji}</div>
                <h3 className="text-white font-black text-xl mb-1">
                  {cls.name}
                </h3>
                <p className="text-school-yellow font-semibold text-sm mb-3">
                  {cls.age}
                </p>
                <p className="text-white/70 text-xs leading-relaxed">
                  {cls.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              type="button"
              data-ocid="admissions.enquire.primary_button"
              onClick={() => scrollTo("#contact")}
              className="bg-school-yellow text-school-blue font-black px-10 py-4 rounded-full text-lg shadow-2xl hover:brightness-105 transition-all hover:scale-105"
            >
              📞 Enquire Now
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="bg-school-blue/10 text-school-blue border-school-blue/20 mb-4 font-semibold">
              📞 Contact Us
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-black text-school-blue">
              Get In Touch
            </h2>
            <p className="text-gray-500 mt-3 text-lg">
              We'd love to hear from you — reach out today!
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-card border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-school-yellow/20 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-school-blue" />
                </div>
                <h3 className="font-bold text-school-blue text-xl">Call Us</h3>
              </div>
              <div className="space-y-4">
                {["9607398755", "9371129556", "9765668755"].map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    data-ocid="contact.phone.link"
                    className="flex items-center gap-3 text-gray-700 hover:text-school-blue transition-colors group"
                  >
                    <span className="bg-school-blue/10 group-hover:bg-school-yellow/30 p-2 rounded-lg transition-colors">
                      <Phone className="h-4 w-4 text-school-blue" />
                    </span>
                    <span className="font-semibold text-lg">{phone}</span>
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-400">
                  Monday – Saturday: 8:00 AM – 1:00 PM
                </p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-card border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-school-yellow/20 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-school-blue" />
                </div>
                <h3 className="font-bold text-school-blue text-xl">Visit Us</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="font-bold text-school-blue">
                  OMKARESHWAR ROW BUNGALOW NO.6
                </p>
                <p>Opp. Omkareshwar Malladem Mandir</p>
                <p>Mane Nagar, Nashik</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-400">
                  Near Omkareshwar Malladem Mandir
                </p>
              </div>
              <div className="mt-4">
                <a
                  href="https://maps.google.com?q=Mane+Nagar+Nashik"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.maps.link"
                  className="inline-flex items-center gap-2 bg-school-blue text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-school-blue/90 transition-colors"
                >
                  <MapPin className="h-4 w-4" /> Get Directions
                </a>
              </div>
            </motion.div>
          </div>

          {/* Enquiry note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mt-8 bg-school-yellow/20 border-2 border-school-yellow/40 rounded-2xl p-6 text-center"
          >
            <GraduationCap className="h-10 w-10 text-school-blue mx-auto mb-3" />
            <h3 className="font-bold text-school-blue text-xl mb-2">
              Admissions Open 2025-26
            </h3>
            <p className="text-gray-600 mb-4">
              Contact us on any of the above numbers to enquire about admissions
              for Playgroup, Nursery, Jr KG & Sr KG. We look forward to
              welcoming your child!
            </p>
            <a
              href="tel:9607398755"
              data-ocid="contact.call_now.primary_button"
              className="inline-block bg-school-blue text-white font-bold px-8 py-3 rounded-full shadow-md hover:bg-school-blue/90 transition-all hover:scale-105"
            >
              📞 Call Now: 9607398755
            </a>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL MEDIA SECTION */}
      <section className="py-16 bg-school-yellow/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Badge className="bg-school-blue/10 text-school-blue border-school-blue/20 mb-4 font-semibold">
            📱 Follow Us
          </Badge>
          <h2 className="text-2xl lg:text-3xl font-black text-school-blue mb-3">
            Stay Connected With Us
          </h2>
          <p className="text-gray-500 mb-8">
            Follow us for latest updates, events, and adorable moments!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtube.com/@happyheartspre-primaryschool?si=kMHsjNx_5UVq6wph"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="social.youtube.link"
              className="flex items-center gap-3 bg-red-600 text-white font-bold px-8 py-4 rounded-full shadow-md hover:bg-red-700 transition-all hover:scale-105 justify-center"
            >
              <Youtube className="h-6 w-6" />
              Subscribe on YouTube
            </a>
            <a
              href="https://www.instagram.com/happyhearts_preprimary_school?igsh=cjA2OHloZmh3ajBx"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="social.instagram.link"
              className="flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-bold px-8 py-4 rounded-full shadow-md hover:opacity-90 transition-all hover:scale-105 justify-center"
            >
              <Instagram className="h-6 w-6" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-school-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/uploads/IMG_20250312_190020-9.jpg"
                  alt="School Logo"
                  className="h-14 w-14 rounded-full object-cover border-2 border-school-yellow"
                />
                <div>
                  <p className="font-black text-lg leading-tight">
                    Happy Hearts
                  </p>
                  <p className="text-white/70 text-sm">Pre Primary School</p>
                </div>
              </div>
              <p className="text-white/70 text-sm italic">
                "Caring for Your Child and You"
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://youtube.com/@happyheartspre-primaryschool?si=kMHsjNx_5UVq6wph"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.youtube.link"
                  className="bg-white/10 hover:bg-red-600 p-2.5 rounded-full transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/happyhearts_preprimary_school?igsh=cjA2OHloZmh3ajBx"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.instagram.link"
                  className="bg-white/10 hover:bg-pink-500 p-2.5 rounded-full transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-school-yellow mb-4">Contact</h3>
              <div className="space-y-2 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-school-yellow shrink-0" />
                  <a href="tel:9607398755" className="hover:text-white">
                    9607398755
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-school-yellow shrink-0" />
                  <a href="tel:9371129556" className="hover:text-white">
                    9371129556
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-school-yellow shrink-0" />
                  <a href="tel:9765668755" className="hover:text-white">
                    9765668755
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="font-bold text-school-yellow mb-4">Address</h3>
              <div className="flex gap-2 text-white/80 text-sm">
                <MapPin className="h-4 w-4 text-school-yellow shrink-0 mt-0.5" />
                <div>
                  <p>OMKARESHWAR ROW BUNGALOW NO.6</p>
                  <p>Opp. Omkareshwar Malladem Mandir</p>
                  <p>Mane Nagar, Nashik</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/60 text-sm">
            <p>
              © {new Date().getFullYear()} Happy Hearts Pre Primary School. All
              Rights Reserved.
            </p>
            <p>
              Built with{" "}
              <Heart className="h-3.5 w-3.5 inline text-school-yellow fill-school-yellow" />{" "}
              using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-school-yellow hover:text-yellow-300 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
