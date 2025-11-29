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

  User, 

  Menu,

  X,

  Phone,

  Clock,

  Brain,

  Heart,

  Eye,

  Bone,

  ArrowRight,

  Baby,

  Microscope,

  Dna

} from 'lucide-react';



// --- DATA: DOCTORS & TESTS ---



// Uniforme stijl: Witte jassen, lichte achtergrond, professionele studio-look.



const triageDoctor = {

    id: 4,

    name: "Drs. M. Jansen",

    title: "Huisarts & Triage Specialist",

    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600&h=600&facepad=2",

    specialties: ["Algemene klachten", "Second opinion", "Doorverwijzing"],

    rating: 4.9,

    reviews: 432,

    big: "69011223344",

    location: "Online",

    priceVideo: 45,

    pricePoli: null,

    nextSlot: "Direct beschikbaar",

    bio: "Weet u niet zeker welke specialist u nodig heeft? Als triage-arts luister ik naar uw verhaal, analyseer ik uw symptomen en zorg ik dat u direct bij de juiste specialist terechtkomt. Geen onnodige wachttijden."

};



const specialists = [

  {

    id: 1,

    name: "Dr. S. van der Meer",

    title: "Neuroloog",

    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600&h=600&facepad=2",

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

    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=600&h=600&facepad=2",

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

    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600&h=600&facepad=2",

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

    id: 5,

    name: "Dr. L. van den Berg",

    title: "Orthopeed",

    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600&h=600&facepad=2",

    specialties: ["Sportblessures", "Knieklachten", "Schouder"],

    rating: 4.9,

    reviews: 156,

    big: "39045678901",

    location: "Orthopedie Centrum",

    priceVideo: 110,

    pricePoli: 150,

    nextSlot: "Morgen, 11:00",

    bio: "Bewegen zonder pijn is mijn missie. Of u nu topsporter bent of gewoon lekker wilt wandelen."

  },

  {

    id: 6,

    name: "Dr. F. Hendriks",

    title: "KNO-Arts",

    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600&h=600&facepad=2",

    specialties: ["Tinnitus", "Slaapapneu", "Holteontsteking"],

    rating: 4.6,

    reviews: 98,

    big: "89056712345",

    location: "Kliniek Hilversum",

    priceVideo: 100,

    pricePoli: 135,

    nextSlot: "Vandaag, 15:30",

    bio: "Problemen met horen of slapen hebben grote impact. Ik zoek samen met u naar een duurzame oplossing."

  },

  {

    id: 7,

    name: "Dr. A. Willems",

    title: "Gynaecoloog",

    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=600&h=600&facepad=2",

    specialties: ["Hormonale klachten", "Overgang", "Vruchtbaarheid"],

    rating: 5.0,

    reviews: 312,

    big: "59067823456",

    location: "Vrouwenzorg Amsterdam",

    priceVideo: 125,

    pricePoli: 175,

    nextSlot: "Overmorgen, 10:00",

    bio: "Vrouwspecifieke zorg met aandacht en tijd. Geen taboes, maar heldere medische antwoorden."

  }

];



const labTests = [

  {

    id: 1,

    title: "Algemeen Bloedbeeld XL",

    price: 89,

    desc: "Complete check van 25 waarden inclusief nier- en leverfunctie en bloedsuiker.",

    image: "https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&q=80&w=600"

  },

  {

    id: 2,

    title: "Vitamine & Mineralen",

    price: 65,

    desc: "Essentieel bij vermoeidheid. Check op o.a. Vitamine D, B12, IJzer en Magnesium.",

    image: "https://images.unsplash.com/photo-1600091392652-32b5d4df4d2d?auto=format&fit=crop&q=80&w=600"

  },

  {

    id: 3,

    title: "Cholesterol & Hart",

    price: 49,

    desc: "Inzicht in uw risicoprofiel. HDL, LDL, triglyceriden en glucose.",

    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=600"

  },

  {

    id: 4,

    title: "Hormoonbalans Vrouw",

    price: 110,

    desc: "Uitgebreide screening op o.a. Oestrogeen, Progesteron, FSH en LH.",

    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"

  },

  {

    id: 5,

    title: "SOA Test Compleet",

    price: 75,

    desc: "Volledig anonieme thuistest voor Chlamydia, Gonorroe en Syfilis.",

    image: "https://images.unsplash.com/photo-1584036561566-b93a945c3e16?auto=format&fit=crop&q=80&w=600"

  },

  {

    id: 6,

    title: "Allergie Screening",

    price: 95,

    desc: "Test op de 30 meest voorkomende allergenen (pollen, huisdieren, voeding).",

    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600"

  }

];



const locations = [

  { city: "Amsterdam", x: 40, y: 35 },

  { city: "Rotterdam", x: 30, y: 55 },

  { city: "Utrecht", x: 45, y: 48 },

  { city: "Groningen", x: 70, y: 15 },

  { city: "Eindhoven", x: 50, y: 75 },

  { city: "Zwolle", x: 60, y: 35 },

  { city: "Maastricht", x: 55, y: 90 },

  { city: "Den Haag", x: 25, y: 50 }

];



// --- COMPONENTS ---



const Navigation = ({ setPage }) => {

  const [isOpen, setIsOpen] = useState(false);



  return (

    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-20">

          <div className="flex items-center cursor-pointer" onClick={() => setPage('home')}>

            <div className="text-slate-900 mr-2 bg-slate-50 p-2 rounded-lg">

              <Stethoscope size={24} strokeWidth={2} />

            </div>

            <div>

              <span className="font-semibold text-xl text-slate-900 tracking-tight block">prive-arts.nl</span>

            </div>

          </div>

          

          <div className="hidden md:flex items-center space-x-8">

            <button onClick={() => setPage('home')} className="text-slate-600 hover:text-slate-900 font-medium text-sm">Home</button>

            <button onClick={() => setPage('specialists')} className="text-slate-600 hover:text-slate-900 font-medium text-sm">Specialisten</button>

            <button onClick={() => setPage('tests')} className="text-slate-600 hover:text-slate-900 font-medium text-sm">Onderzoek</button>

            <button className="bg-slate-900 text-white px-6 py-2 rounded-md font-medium text-sm hover:bg-slate-800 transition shadow-lg shadow-slate-900/10">

              Mijn Dossier

            </button>

          </div>



          <div className="flex items-center md:hidden">

            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">

              {isOpen ? <X size={24} /> : <Menu size={24} />}

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



const Hero = ({ onSelectTriage }) => (

  <div className="bg-white py-20 border-b border-gray-100 relative overflow-hidden">

    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 opacity-50 z-0"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

      <h1 className="text-4xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">

        Zorg op <span className="font-semibold text-blue-900">uw voorwaarden</span>.

      </h1>

      <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">

        Direct toegang tot medisch specialisten en diagnostiek. <br/>

        Zonder wachttijd. Video of poli.

      </p>

    </div>

  </div>

);



const TriageSection = ({ onSelect }) => (

  <div className="max-w-5xl mx-auto px-4 -mt-12 relative z-10 mb-20">

    <div className="bg-slate-900 text-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

      <div className="md:w-2/5 relative h-64 md:h-auto group">

        <img 

          src={triageDoctor.image} 

          alt="Triage Arts" 

          className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"

        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent md:bg-gradient-to-r" />

        <div className="absolute bottom-6 left-6">

           <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider mb-2 inline-block border border-white/10">

             Eerste Aanspreekpunt

           </span>

           <h3 className="text-2xl font-semibold">{triageDoctor.name}</h3>

           <p className="text-slate-300">{triageDoctor.title}</p>

        </div>

      </div>

      <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">

        <h2 className="text-2xl font-light mb-4">Weet u niet zeker welke specialist u nodig heeft?</h2>

        <p className="text-slate-300 mb-8 leading-relaxed font-light">

          Begin met een triage-consult. Onze huisarts analyseert uw klachten en verwijst u direct door naar de juiste specialist binnen ons netwerk.

        </p>

        <div className="flex flex-col sm:flex-row gap-4">

          <button 

            onClick={() => onSelect(triageDoctor)}

            className="bg-white text-slate-900 px-6 py-3 rounded-md font-medium hover:bg-slate-100 transition flex items-center justify-center shadow-lg shadow-white/10"

          >

            Start Triage Consult (€45)

            <ArrowRight size={18} className="ml-2" />

          </button>

        </div>

      </div>

    </div>

  </div>

);



const CategoryIcon = ({ icon: Icon, label }) => (

  <div className="flex items-center gap-3 px-6 py-4 rounded-lg border border-gray-100 bg-white hover:border-blue-200 hover:shadow-md transition-all cursor-pointer group w-full md:w-auto">

    <Icon size={20} className="text-slate-400 group-hover:text-blue-600 transition-colors" />

    <span className="font-medium text-slate-600 group-hover:text-slate-900">{label}</span>

  </div>

);



const Categories = () => (

  <div className="py-12 bg-white border-b border-gray-100">

    <div className="max-w-7xl mx-auto px-4">

      <p className="text-center text-slate-400 text-sm uppercase tracking-widest font-medium mb-8">Direct naar een specialist</p>

      <div className="flex flex-wrap justify-center gap-4">

        <CategoryIcon icon={Heart} label="Cardiologie" />

        <CategoryIcon icon={Brain} label="Neurologie" />

        <CategoryIcon icon={Activity} label="Dermatologie" />

        <CategoryIcon icon={Bone} label="Orthopedie" />

        <CategoryIcon icon={Eye} label="Oogheelkunde" />

        <CategoryIcon icon={Baby} label="Gynaecologie" />

      </div>

    </div>

  </div>

);



const SpecialistCard = ({ doctor, onSelect }) => (

  <div className="group bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">

    <div className="aspect-[4/3] overflow-hidden relative">

      <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">

        <span className="text-white font-medium flex items-center">Bekijk profiel <ArrowRight size={16} className="ml-2"/></span>

      </div>

    </div>

    

    <div className="p-6 flex-grow flex flex-col">

      <p className="text-blue-600 font-bold text-xs uppercase tracking-wider mb-2">{doctor.title}</p>

      <h3 className="font-serif text-2xl text-slate-900 mb-2">{doctor.name}</h3>

      

      <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">

         <span className="flex items-center"><MapPin size={14} className="mr-1"/> {doctor.location}</span>

         <span className="flex items-center"><Star size={14} className="mr-1 text-slate-400"/> {doctor.rating}</span>

      </div>



      <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">

        <div className="text-xs text-slate-400">

          Eerstvolgende plek:<br/>

          <span className="text-slate-700 font-medium">{doctor.nextSlot}</span>

        </div>

        <button 

          onClick={() => onSelect(doctor)}

          className="bg-slate-50 text-slate-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-100 transition"

        >

          Afspraak maken

        </button>

      </div>

    </div>

  </div>

);



const DoctorProfile = ({ doctor, onBack }) => {

  const [bookingType, setBookingType] = useState('video');



  return (

    <div className="bg-white min-h-screen pb-20">

      {/* Breadcrumb */}

      <div className="border-b border-gray-100 sticky top-20 bg-white/80 backdrop-blur-md z-40">

        <div className="max-w-7xl mx-auto px-4 py-4">

          <button onClick={onBack} className="flex items-center text-sm text-slate-500 hover:text-slate-900 transition">

            <ChevronRight className="rotate-180 mr-1" size={16} />

            Terug naar overzicht

          </button>

        </div>

      </div>



      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">

        

        {/* Left Column: Profile Info */}

        <div className="lg:col-span-7">

          <div className="flex flex-col sm:flex-row gap-8 items-start mb-12">

            <img src={doctor.image} className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg object-cover shadow-lg" alt={doctor.name} />

            <div>

              <span className="text-blue-600 font-bold tracking-wide uppercase text-sm">{doctor.title}</span>

              <h1 className="text-4xl font-serif text-slate-900 mb-4 mt-1">{doctor.name}</h1>

              

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 mb-6">

                <span className="flex items-center"><ShieldCheck size={16} className="text-slate-400 mr-2"/> BIG: {doctor.big}</span>

                <span className="flex items-center"><MapPin size={16} className="text-slate-400 mr-2"/> {doctor.location}</span>

              </div>

              

              <div className="flex flex-wrap gap-2">

                 {doctor.specialties.map((tag, i) => (

                   <span key={i} className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-xs font-medium border border-slate-100">{tag}</span>

                 ))}

              </div>

            </div>

          </div>



          <div className="prose prose-slate max-w-none">

            <h3 className="text-xl font-medium text-slate-900 mb-4">Over de arts</h3>

            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">

              {doctor.bio}

            </p>

            

            <h3 className="text-xl font-medium text-slate-900 mb-4">Specialisaties & Behandelingen</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

              {['Second Opinion', 'Behandelplan opstellen', 'Medicatie review', 'Diagnostiek'].map((item, i) => (

                <div key={i} className="flex items-center text-slate-600 p-4 bg-slate-50 rounded-lg">

                  <CheckCircle size={18} className="text-slate-400 mr-3" />

                  {item}

                </div>

              ))}

            </div>

          </div>

        </div>



        {/* Right Column: Booking Widget */}

        <div className="lg:col-span-5">

          <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden sticky top-32">

            <div className="p-6 bg-slate-900 text-white flex justify-between items-center">

              <div>

                 <h3 className="font-medium text-lg">Direct een afspraak</h3>

                 <p className="text-slate-400 text-sm">Selecteer uw voorkeur</p>

              </div>

              <div className="h-10 w-10 bg-white/10 rounded-full flex items-center justify-center">

                <Calendar size={20} />

              </div>

            </div>

            

            <div className="p-8">

              {/* Type Selector */}

              <div className="flex gap-4 mb-8">

                <button 

                  onClick={() => setBookingType('video')}

                  className={`flex-1 flex flex-col items-center justify-center p-4 rounded-lg border transition-all ${bookingType === 'video' ? 'border-slate-900 bg-slate-50' : 'border-gray-100 text-slate-400 hover:border-gray-200'}`}

                >

                  <Video size={24} className={`mb-2 ${bookingType === 'video' ? 'text-slate-900' : 'text-slate-300'}`} />

                  <span className="font-medium text-sm">Video Consult</span>

                  <span className="text-xs mt-1 text-slate-500">€ {doctor.priceVideo}</span>

                </button>

                {doctor.pricePoli && (

                  <button 

                    onClick={() => setBookingType('poli')}

                    className={`flex-1 flex flex-col items-center justify-center p-4 rounded-lg border transition-all ${bookingType === 'poli' ? 'border-slate-900 bg-slate-50' : 'border-gray-100 text-slate-400 hover:border-gray-200'}`}

                  >

                    <MapPin size={24} className={`mb-2 ${bookingType === 'poli' ? 'text-slate-900' : 'text-slate-300'}`} />

                    <span className="font-medium text-sm">Op de Poli</span>

                    <span className="text-xs mt-1 text-slate-500">€ {doctor.pricePoli}</span>

                  </button>

                )}

              </div>



              {/* Date & Time Mockup */}

              <div className="mb-8">

                <label className="block text-sm font-medium text-slate-900 mb-3">Beschikbaarheid Vandaag</label>

                <div className="grid grid-cols-3 gap-3 mb-3">

                  <button className="bg-slate-900 text-white py-3 rounded-md text-sm font-medium shadow-lg shadow-slate-900/20">09:00</button>

                  <button className="bg-white text-slate-400 border border-gray-100 py-3 rounded-md text-sm hover:border-slate-300 transition">11:30</button>

                  <button className="bg-white text-slate-400 border border-gray-100 py-3 rounded-md text-sm hover:border-slate-300 transition">14:00</button>

                </div>

              </div>



              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 rounded-lg transition mb-4">

                Bevestig Afspraak (€ {bookingType === 'video' ? doctor.priceVideo : doctor.pricePoli})

              </button>

              

              <div className="flex items-center justify-center text-xs text-slate-400 gap-4">

                <span className="flex items-center"><ShieldCheck size={12} className="mr-1"/> Veilig betalen</span>

                <span className="flex items-center"><Clock size={12} className="mr-1"/> 24u Annuleren</span>

              </div>

            </div>

          </div>

        </div>



      </div>

    </div>

  );

};



// --- MAP COMPONENT ---



const MapSection = () => (

  <div className="bg-slate-50 rounded-2xl p-8 md:p-12 border border-gray-200 mt-16">

    <div className="flex flex-col md:flex-row gap-12">

      <div className="flex-1">

        <h3 className="text-2xl font-serif text-slate-900 mb-4">Landelijke Dekking</h3>

        <p className="text-slate-600 leading-relaxed mb-6">

          Voor bloedafname werken wij samen met gecertificeerde prikpunten door heel Nederland. 

          Na het bestellen van uw test ontvangt u een verwijsbrief waarmee u direct terecht kunt bij een locatie in de buurt.

        </p>

        <ul className="space-y-3 mb-8">

          <li className="flex items-center text-slate-700 font-medium">

            <CheckCircle size={18} className="text-green-500 mr-2" />

            Meer dan 120 locaties

          </li>

          <li className="flex items-center text-slate-700 font-medium">

            <CheckCircle size={18} className="text-green-500 mr-2" />

            Ook 's avonds en in het weekend

          </li>

          <li className="flex items-center text-slate-700 font-medium">

            <CheckCircle size={18} className="text-green-500 mr-2" />

            Uitslag binnen 48 uur in uw dossier

          </li>

        </ul>

        <button className="text-blue-600 font-bold hover:underline flex items-center">

          Zoek dichtstbijzijnde locatie <ChevronRight size={16} />

        </button>

      </div>

      

      {/* Schematic Map Visualization */}

      <div className="flex-1 relative h-96 bg-white rounded-xl border border-gray-200 shadow-inner overflow-hidden">

        {/* Background Map Placeholder */}

        <div className="absolute inset-0 opacity-10" 

             style={{

               backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Blank_map_of_the_Netherlands.svg/800px-Blank_map_of_the_Netherlands.svg.png")`,

               backgroundSize: 'contain',

               backgroundPosition: 'center',

               backgroundRepeat: 'no-repeat'

             }}

        ></div>

        

        {/* Pins */}

        {locations.map((loc, index) => (

          <div 

            key={index}

            className="absolute flex flex-col items-center group cursor-pointer"

            style={{ 

              left: `${loc.x}%`, 

              top: `${loc.y}%`,

              transform: 'translate(-50%, -50%)'

            }}

          >

            <div className="relative">

              <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-md z-10 relative group-hover:bg-blue-800 transition-colors"></div>

              <div className="w-4 h-4 bg-blue-400 rounded-full absolute top-0 left-0 animate-ping opacity-50"></div>

            </div>

            <div className="mt-2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none shadow-lg">

              {loc.city}

            </div>

          </div>

        ))}

        

        <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded text-xs text-slate-500 border border-gray-100 shadow-sm">

          Schematische weergave

        </div>

      </div>

    </div>

  </div>

);



const TestStore = () => (

  <div className="bg-white py-12 min-h-screen">

    <div className="max-w-7xl mx-auto px-4">

      <div className="mb-12">

        <h2 className="text-3xl font-light text-slate-900 mb-2">Medische diagnostiek</h2>

        <p className="text-slate-500 font-light text-lg">Professionele testen voor thuisgebruik of bij een prikpost.</p>

      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {labTests.map(test => (

          <div key={test.id} className="bg-white rounded-xl border border-gray-100 overflow-hidden group hover:border-slate-300 transition-all duration-300 flex flex-col">

            <div className="h-56 overflow-hidden bg-slate-50 relative">

              <img src={test.image} alt={test.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">

                € {test.price}

              </div>

            </div>

            <div className="p-8 flex-grow flex flex-col">

              <div className="mb-4">

                 <h3 className="font-serif text-xl text-slate-900 mb-2">{test.title}</h3>

                 <p className="text-slate-500 text-sm leading-relaxed">{test.desc}</p>

              </div>

              <button className="mt-auto w-full bg-white border border-slate-200 text-slate-900 py-3 rounded-md text-sm font-medium hover:bg-slate-50 transition flex items-center justify-center group-hover:border-slate-400">

                Toevoegen <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />

              </button>

            </div>

          </div>

        ))}

      </div>



      <MapSection />

    </div>

  </div>

);



const Footer = () => (

  <footer className="bg-slate-900 text-slate-400 py-16">

    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm font-light">

      <div className="col-span-1 md:col-span-2">

        <div className="flex items-center text-white mb-6">

          <Stethoscope size={24} className="mr-2" />

          <span className="font-semibold text-xl">prive-arts.nl</span>

        </div>

        <p className="leading-relaxed max-w-sm">

          De nieuwe standaard in persoonlijke zorg. <br/>

          Direct contact met medisch specialisten, zonder verwijzing.

        </p>

      </div>

      

      <div>

        <h4 className="text-white font-medium mb-6">Navigatie</h4>

        <ul className="space-y-3">

          <li><a href="#" className="hover:text-white transition">Onze Artsen</a></li>

          <li><a href="#" className="hover:text-white transition">Onderzoeken</a></li>

          <li><a href="#" className="hover:text-white transition">Triage Consult</a></li>

          <li><a href="#" className="hover:text-white transition">Inloggen</a></li>

        </ul>

      </div>

      <div>

        <h4 className="text-white font-medium mb-6">Juridisch</h4>

        <ul className="space-y-3">

          <li><a href="#" className="hover:text-white transition">Privacyverklaring</a></li>

          <li><a href="#" className="hover:text-white transition">Algemene Voorwaarden</a></li>

          <li><a href="#" className="hover:text-white transition">Voor Artsen</a></li>

          <li><a href="#" className="hover:text-white transition">NEN 7510 Certificering</a></li>

        </ul>

      </div>

    </div>

    <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800 text-xs flex justify-between">

       <span>&copy; 2024 Prive-arts.nl</span>

       <span>Amsterdam</span>

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

        <div className="bg-white">

          <Hero setPage={setActivePage} />

          

          <TriageSection onSelect={handleDoctorSelect} />

          

          <Categories />

          

          <div className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-4">

              <div className="flex flex-col md:flex-row justify-between items-end mb-12">

                <div>

                   <h2 className="text-3xl font-light text-slate-900">Onze Specialisten</h2>

                   <p className="text-slate-500 mt-2 font-light">Expertise op elk vakgebied.</p>

                </div>

              </div>

              

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {specialists.map(doc => (

                  <SpecialistCard key={doc.id} doctor={doc} onSelect={handleDoctorSelect} />

                ))}

              </div>

              

            </div>

          </div>

        </div>

      );

    }



    if (activePage === 'specialists') {

      return (

        <div className="bg-white min-h-screen py-12">

          <div className="max-w-7xl mx-auto px-4">

            <h1 className="text-3xl font-light text-slate-900 mb-8">Vind uw specialist</h1>

            

            {/* Filter Bar Cleaner */}

            <div className="bg-white border-b border-gray-100 pb-8 mb-12 flex flex-col md:flex-row gap-4">

               <div className="flex-1 relative">

                 <Search className="absolute left-0 top-3 text-slate-400" size={20} />

                 <input type="text" placeholder="Zoek op klacht of naam..." className="w-full pl-8 pr-4 py-2 border-b border-gray-200 focus:outline-none focus:border-slate-900 text-lg placeholder:font-light" />

               </div>

               <div className="flex gap-4">

                 <select className="py-2 bg-transparent border-b border-gray-200 text-slate-600 focus:outline-none focus:border-slate-900 cursor-pointer">

                   <option>Alle Specialismen</option>

                   <option>Neurologie</option>

                   <option>Cardiologie</option>

                   <option>Dermatologie</option>

                   <option>Orthopedie</option>

                 </select>

               </div>

            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {specialists.map(doc => (

                <SpecialistCard key={doc.id} doctor={doc} onSelect={handleDoctorSelect} />

              ))}

            </div>

          </div>

        </div>

      );

    }



    if (activePage === 'profile' && selectedDoctor) {

      return <DoctorProfile doctor={selectedDoctor} onBack={() => setActivePage('home')} />;

    }



    if (activePage === 'tests') {

      return <TestStore />;

    }

  };



  return (

    <div className="font-sans text-slate-900 bg-white min-h-screen flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">

      <Navigation setPage={setActivePage} />

      <main className="flex-grow">

        {renderContent()}

      </main>

      <Footer />

    </div>

  );

};



export default App;
