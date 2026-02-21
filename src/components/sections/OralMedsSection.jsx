// import React from 'react';
// import { MedicationCard } from '../ui/MedicationCard';

// // Importing Images
// // Importing Latest High-Quality "removebg" Images from assetss
// import RybelsusImg from '../../assetss/rhybelsus_pill-removebg-preview.png';
// import MetforminImg from '../../assetss/metformin_card.png';
// import TopiramateImg from '../../assetss/topiramate_card.png';
// import ContraveImg from '../../assetss/contrave_card.png';
// import MedBgImg from '../../assets/med-bg.jpg';

// export function OralMedsSection() {
//     const oralMeds = [
//         { name: 'Rybelsus®', price: '$250/mo', image: RybelsusImg },
//         { name: 'Metformin', price: '$90/mo', image: MetforminImg },
//         { name: 'Topiramate', price: '$80/mo', image: TopiramateImg },
//         { name: 'Contrave®', price: '$285/mo', image: ContraveImg },
//     ];

//     // Layout: 4 items (row 1) then 2 items (row 2)
//     const layoutItems = [
//         oralMeds[0], oralMeds[1], oralMeds[2], oralMeds[3],
//         oralMeds[0], oralMeds[1]
//     ];

//     return (
//         <section className="relative py-10 px-4 md:px-8 overflow-hidden">
//             {/* Background Image with overlay */}
//             <div
//                 className="absolute inset-0 bg-cover bg-center z-0"
//                 style={{ backgroundImage: `url(${MedBgImg})` }}
//             >
//                 <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
//             </div>

//             <div className="w-[90%] mx-auto relative z-10">
//                 <div className="text-center mb-16">
//                     <h3 className="text-5xl font-bold text-[#28436F] inline-block font-lora">
//                         Oral Medications
//                     </h3>
//                 </div>

//                 <div className="space-y-8">
//                     {/* Row 1: 4 Items */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                         {layoutItems.slice(0, 4).map((item, index) => (
//                             <MedicationCard key={`oral-r1-${index}`} item={item} />
//                         ))}
//                     </div>

//                     {/* Row 2: 2 Items (Centered) */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
//                         {layoutItems.slice(4, 6).map((item, index) => (
//                             <MedicationCard key={`oral-r2-${index}`} item={item} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
