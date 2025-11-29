import React, { useState } from 'react';
import { 
  Stethoscope, 
  Video, 
  MapPin, 
  Search, 
  Calendar, 
  Star, 
  CheckCircle, 
  ChevronRight, 
  ShieldCheck, 
  Activity, 
  Beaker, 
  User, 
  Menu,
  X,
  Phone,
  Clock,
  Brain,
  Heart,
  Eye,
  Bone
} from 'lucide-react';

// --- DATA: DUMMY DOCTORS & TESTS ---

const doctors = [
  {
    id: 1,
    name: "Dr. S. van der Meer",
    title: "Neuroloog",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400",
    specialties: ["Migraine", "Hernia", "Duizeligheid"],
    rating: 4.9,
    reviews: 124,
    big: "19023456789",
    location: "Medisch Centrum Amstelveen",
    priceVideo: 120,
    pricePoli: 165,
    nextSlot: "Vandaag, 14:00",
    bio: "Als neuroloog focus ik mij op snelle diagnostiek bij onbegrepen hoofdpijnklachten. Ik luister naar uw verhaal en kijk verder dan de standaardprotocollen."
  },
  {
    id: 2,
    name: "Dr. J. de Vries",
    title: "Cardioloog",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400",
    specialties: ["Hartritmestoornissen", "Preventieve screening", "Hoge bloeddruk"],
    rating: 4.8,
    reviews: 89,
    big: "49023411234",
    location: "Kliniek Oud-Zuid",
    priceVideo: 130,
    pricePoli: 180,
    nextSlot: "Morgen, 09:30",
    bio: "Preventie is beter dan genezen. Ik help u inzicht te krijgen in uw hartgezondheid met moderne technieken."
  },
  {
    id: 3,
    name: "Dr. E. Bakker",
    title: "Dermatoloog",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400",
    specialties: ["Eczeem", "Moedervlek check", "Acne"],
    rating: 4.7,
    reviews: 210,
    big: "29099887766",
    location: "Huidcentrum Utrecht",
    priceVideo: 95,
    pricePoli: 140,
    nextSlot: "Vandaag, 16:15",
    bio: "Een gezonde huid geeft zelfvertrouwen. Samen zoeken we naar de beste behandeling voor uw huidtype."
  },
  {
    id: 4,
    name: "Drs. M. Jansen",
    title: "Algemeen Arts (Triage)",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400",
    specialties: ["Algemene klachten", "Second opinion", "Doorverwijzing"],
    rating: 4.9,
    reviews: 432,
    big: "69011223344",
    location: "Online",
    priceVideo: 45,
    pricePoli: null,
    nextSlot: "Direct beschikbaar",
    bio: "Weet u niet zeker welke specialist u nodig heeft? Ik help u met een eerste analyse en verwijs u direct door."
  }
];

const labTests = [
  {
    id: 1,
    title: "Algemeen Bloedbeeld XL",
    price: 89,
    desc: "Complete check van 25 waarden inclusief nier- en leverfunctie.",
    image: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 2,
    title: "Vitamine & Mineralen",
    price: 65,
    desc: "Check op o.a. Vitamine D, B12, IJzer en Magnesium.",
    image: "https://images.unsplash.com/photo-1600091392652-32b5d4df4d2d?auto=format&fit=crop&q=80&w=500"
  },
  {
    id: 3,
    title: "Cholesterol Profiel",
    price: 49,
    desc: "Inzicht in uw HDL, LDL en triglyceriden gehalte.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=500"
  }
];

// --- COMPONENTS ---

const Navigation = ({ setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => setPage('home')}>
            <div className="bg-blue-900 text-white p-2 rounded-lg mr-3">
              <Stethoscope size={24} />
            </div>
            <div>
              <span className="font-bold text-xl text-slate-800 tracking-tight block">Prive-arts.nl</span>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Exclusieve Zorg</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setPage('home')} className="text-slate-600 hover:text-blue-900 font-medium">Home</button>
            <button onClick={() => setPage('specialists')} className="text-slate-600 hover:text-blue-900 font-medium">Specialisten</button>
            <button onClick={() => setPage('tests')} className="text-slate-600 hover:text-blue-900 font-medium">Onderzoek & Lab</button>
            <button className="text-slate-600 hover:text-blue-900 font-medium">Over ons</button>
            <button className="bg-blue-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-800 transition shadow-lg shadow-blue-900/20">
              Inloggen
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-4">
          <button onClick={() => {setPage('home'); setIsOpen(false)}} className="block w-full text-left py-2 font-medium text-slate-700">Home</button>
          <button onClick={() => {setPage('specialists'); setIsOpen(false)}} className="block w-full text-left py-2 font-medium text-slate-700">Specialisten</button>
          <button onClick={() => {setPage('tests'); setIsOpen(false)}} className="block w-full text-left py-2 font-medium text-slate-700">Onderzoek</button>
        </div>
      )}
    </nav>
  );
};

const Hero = ({ setPage }) => (
  <div className="relative bg-slate-50 overflow-hidden">
    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
      <div className="lg:w-2/3">
        <div className="inline-flex items-center bg-white px-3 py-1 rounded-full border border-blue-100 shadow-sm mb-6">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          <span className="text-xs font-semibold text-blue-900 tracking-wide uppercase">Geen wachtlijsten, direct contact</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
          Zorg op uw voorwaarden.<br/>
          <span className="text-blue-900">Directe toegang tot specialisten.</span>
        </h1>
        <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
          Videobellen met een neuroloog, dermatoloog of internist wanneer het u uitkomt. 
          Of bezoek direct de poli zonder verwijsbrief. Uw gezondheid wacht niet.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div 
            onClick={() => setPage('specialists')}
            className="group cursor-pointer bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:border-blue-500 transition-all duration-300 w-full sm:w-1/2 flex items-start"
          >
            <div className="bg-blue-50 p-3 rounded-xl text-blue-600 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Search size={28} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">Ik zoek een specialist</h3>
              <p className="text-sm text-slate-500">Kies zelf uw arts (bijv. Neuroloog) en boek direct.</p>
            </div>
          </div>

          <div className="group cursor-pointer bg-blue-900 p-6 rounded-2xl shadow-xl shadow-blue-900/20 hover:bg-blue-800 transition-all duration-300 w-full sm:w-1/2 flex items-start">
            <div className="bg-white/10 p-3 rounded-xl text-white mr-4">
              <Stethoscope size={28} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white mb-1">Ik weet het niet precies</h3>
              <p className="text-sm text-blue-100">Start triage consult met onze algemene arts (€45).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CategoryIcon = ({ icon: Icon, label, color }) => (
  <div className="flex flex-col items-center cursor-pointer group">
    <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform duration-300`}>
      <Icon size={32} className="text-white" />
    </div>
    <span className="font-medium text-slate-700">{label}</span>
  </div>
);

const Categories = () => (
  <div className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-slate-900">Populaire Specialismen</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        <CategoryIcon icon={Heart} label="Cardiologie" color="bg-rose-500" />
        <CategoryIcon icon={Brain} label="Neurologie" color="bg-indigo-500" />
        <CategoryIcon icon={Activity} label="Dermatologie" color="bg-amber-500" />
        <CategoryIcon icon={Bone} label="Orthopedie" color="bg-emerald-500" />
        <CategoryIcon icon={Eye} label="Oogheelkunde" color="bg-sky-500" />
      </div>
    </div>
  </div>
);

const SpecialistCard = ({ doctor, onSelect }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
    <div className="p-6 flex-1">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <img src={doctor.image} alt={doctor.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md mr-4" />
          <div>
            <h3 className="font-bold text-slate-900 text-lg">{doctor.name}</h3>
            <p className="text-blue-600 font-medium">{doctor.title}</p>
          </div>
        </div>
        <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
          <Star size={14} className="text-yellow-500 mr-1" fill="currentColor" />
          <span className="text-xs font-bold text-slate-700">{doctor.rating}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {doctor.specialties.map((spec, i) => (
            <span key={i} className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
              {spec}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2 text-sm text-slate-500 mb-4">
        <div className="flex items-center">
          <ShieldCheck size={16} className="text-green-500 mr-2" />
          <span>BIG: {doctor.big}</span>
        </div>
        <div className="flex items-center">
          <Clock size={16} className="text-blue-500 mr-2" />
          <span>Eerstvolgende: <span className="text-slate-900 font-medium">{doctor.nextSlot}</span></span>
        </div>
      </div>
    </div>

    <div className="bg-slate-50 p-4 border-t border-gray-100 flex gap-3">
      <button 
        onClick={() => onSelect(doctor)}
        className="flex-1 bg-white border border-slate-200 text-slate-700 py-2 rounded-lg font-medium hover:bg-slate-50 transition text-sm flex items-center justify-center"
      >
        <User size={16} className="mr-2" />
        Profiel
      </button>
      <button 
        onClick={() => onSelect(doctor)}
        className="flex-1 bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition text-sm flex items-center justify-center"
      >
        <Calendar size={16} className="mr-2" />
        Boeken
      </button>
    </div>
  </div>
);

const DoctorProfile = ({ doctor, onBack }) => {
  const [bookingType, setBookingType] = useState('video');

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button onClick={onBack} className="flex items-center text-slate-500 hover:text-blue-900 transition">
            <ChevronRight className="rotate-180 mr-1" size={20} />
            Terug naar overzicht
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Profile Info */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <img src={doctor.image} className="w-32 h-32 rounded-2xl object-cover shadow-lg" alt={doctor.name} />
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-1">{doctor.name}</h1>
                <p className="text-xl text-blue-600 font-medium mb-3">{doctor.title}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center"><ShieldCheck size={16} className="text-green-500 mr-1"/> BIG Geregistreerd</span>
                  <span className="flex items-center"><MapPin size={16} className="text-gray-400 mr-1"/> {doctor.location}</span>
                  <span className="flex items-center"><Star size={16} className="text-yellow-400 mr-1"/> {doctor.rating} ({doctor.reviews} reviews)</span>
                </div>
                <div className="flex flex-wrap gap-2">
                   {doctor.specialties.map((tag, i) => (
                     <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{tag}</span>
                   ))}
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-100" />

            <div className="prose prose-slate">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Over de specialist</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {doctor.bio}
              </p>
              
              <h3 className="text-lg font-bold text-slate-900 mb-3">Behandelingen</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {['Second Opinion', 'Behandelplan opstellen', 'Medicatie review', 'Diagnostiek'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex items-start gap-4">
             <div className="bg-white p-3 rounded-full shadow-sm text-blue-600">
               <ShieldCheck size={24} />
             </div>
             <div>
               <h4 className="font-bold text-blue-900">Privacy & Veiligheid</h4>
               <p className="text-sm text-blue-800 mt-1">
                 Uw gesprek vindt plaats via een beveiligde verbinding. Data wordt versleuteld opgeslagen volgens NEN 7510 normen.
               </p>
             </div>
          </div>
        </div>

        {/* Right Column: Booking Widget */}
        <div className="lg:w-96">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
            <div className="p-6 bg-slate-900 text-white">
              <h3 className="font-bold text-lg">Maak een afspraak</h3>
              <p className="text-slate-300 text-sm">Geen wachttijd, direct plek.</p>
            </div>
            
            <div className="p-6">
              {/* Type Selector */}
              <div className="flex bg-slate-100 p-1 rounded-lg mb-6">
                <button 
                  onClick={() => setBookingType('video')}
                  className={`flex-1 flex items-center justify-center py-2 text-sm font-medium rounded-md transition ${bookingType === 'video' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-500'}`}
                >
                  <Video size={16} className="mr-2" />
                  Video
                </button>
                {doctor.pricePoli && (
                  <button 
                    onClick={() => setBookingType('poli')}
                    className={`flex-1 flex items-center justify-center py-2 text-sm font-medium rounded-md transition ${bookingType === 'poli' ? 'bg-white text-blue-900 shadow-sm' : 'text-slate-500'}`}
                  >
                    <MapPin size={16} className="mr-2" />
                    Poli
                  </button>
                )}
              </div>

              {/* Price */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-600">Tarief (20 min)</span>
                <span className="text-2xl font-bold text-slate-900">
                  € {bookingType === 'video' ? doctor.priceVideo : doctor.pricePoli},00
                </span>
              </div>

              {/* Date & Time Mockup */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-2">Beschikbaarheid</label>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <button className="bg-blue-50 text-blue-700 border border-blue-200 py-2 rounded-lg text-sm font-bold hover:bg-blue-100">09:00</button>
                  <button className="bg-white text-slate-600 border border-gray-200 py-2 rounded-lg text-sm hover:border-blue-300">11:30</button>
                  <button className="bg-white text-slate-600 border border-gray-200 py-2 rounded-lg text-sm hover:border-blue-300">14:00</button>
                </div>
                <div className="text-center">
                  <a href="#" className="text-xs text-blue-600 font-medium hover:underline">Meer tijden weergeven</a>
                </div>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-amber-500/20 mb-3">
                Afspraak Bevestigen
              </button>
              
              <p className="text-xs text-center text-slate-400">
                U betaalt veilig vooraf via iDeal. Gratis annuleren tot 24u van tevoren.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const TestStore = () => (
  <div className="bg-slate-50 py-12 min-h-screen">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Medische zelftesten & Laboratorium</h2>
        <p className="text-slate-600">
          Bestel een test voor thuis of maak een afspraak bij een prikpost. De uitslag wordt beoordeeld door onze artsen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {labTests.map(test => (
          <div key={test.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="h-48 overflow-hidden">
              <img src={test.image} alt={test.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-2">{test.title}</h3>
              <p className="text-slate-500 text-sm mb-4 min-h-[40px]">{test.desc}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-blue-900">€ {test.price}</span>
                <button className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition">
                  Toevoegen
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Uitslag bespreken met een arts?</h3>
          <p className="text-slate-600">Zodra uw uitslag binnen is, kunt u direct een videoconsult boeken voor uitleg.</p>
        </div>
        <button className="bg-blue-50 text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-100 transition">
          Meer informatie
        </button>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center text-white mb-4">
          <Stethoscope size={24} className="mr-2" />
          <span className="font-bold text-xl">Prive-arts.nl</span>
        </div>
        <p className="text-sm leading-relaxed">
          Premium gezondheidszorg, toegankelijk voor iedereen. Wij geloven in preventie en snelle diagnostiek.
        </p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Diensten</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white">Video Consult</a></li>
          <li><a href="#" className="hover:text-white">Poli Afspraak</a></li>
          <li><a href="#" className="hover:text-white">Preventieve Scans</a></li>
          <li><a href="#" className="hover:text-white">Bloedonderzoek</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Specialismen</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-white">Neurologie</a></li>
          <li><a href="#" className="hover:text-white">Cardiologie</a></li>
          <li><a href="#" className="hover:text-white">Dermatologie</a></li>
          <li><a href="#" className="hover:text-white">Interne Geneeskunde</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-4">Contact</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center"><Phone size={14} className="mr-2"/> 020 - 123 45 67</li>
          <li className="flex items-center"><Menu size={14} className="mr-2"/> info@prive-arts.nl</li>
          <li className="mt-4 flex gap-2">
            <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">iDeal</div>
            <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">Visa</div>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-xs text-center">
      &copy; 2024 Prive-arts.nl - Alle artsen zijn BIG-geregistreerd. AVG Compliant.
    </div>
  </footer>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    setActivePage('profile');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    if (activePage === 'home') {
      return (
        <>
          <Hero setPage={setActivePage} />
          <Categories />
          <div className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between items-end mb-8">
                <div>
                   <h2 className="text-3xl font-bold text-slate-900">Uitgelichte Specialisten</h2>
                   <p className="text-slate-600 mt-2">Direct beschikbaar voor consultatie.</p>
                </div>
                <button onClick={() => setActivePage('specialists')} className="text-blue-600 font-bold hover:underline">Bekijk alle artsen &rarr;</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {doctors.map(doc => (
                  <SpecialistCard key={doc.id} doctor={doc} onSelect={handleDoctorSelect} />
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }

    if (activePage === 'specialists') {
      return (
        <div className="bg-slate-50 min-h-screen py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-slate-900 mb-8">Vind uw specialist</h1>
            
            {/* Filter Bar Mockup */}
            <div className="bg-white p-4 rounded-xl shadow-sm mb-8 flex flex-col md:flex-row gap-4">
               <div className="flex-1 relative">
                 <Search className="absolute left-3 top-3 text-slate-400" size={20} />
                 <input type="text" placeholder="Zoek op klacht (bijv. migraine) of arts..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" />
               </div>
               <select className="p-2 border border-gray-200 rounded-lg text-slate-600 bg-white">
                 <option>Alle Specialismen</option>
                 <option>Neurologie</option>
                 <option>Cardiologie</option>
               </select>
               <select className="p-2 border border-gray-200 rounded-lg text-slate-600 bg-white">
                 <option>Beschikbaarheid: Vandaag</option>
               </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {doctors.map(doc => (
                <SpecialistCard key={doc.id} doctor={doc} onSelect={handleDoctorSelect} />
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (activePage === 'profile' && selectedDoctor) {
      return <DoctorProfile doctor={selectedDoctor} onBack={() => setActivePage('specialists')} />;
    }

    if (activePage === 'tests') {
      return <TestStore />;
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen flex flex-col">
      <Navigation setPage={setActivePage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;

