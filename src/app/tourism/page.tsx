// "use client";

// import React from "react";
// import VideoPlayer from "../components/Multimedia/VideoPalyer";
// import { sectors } from "../utils/constants";

// export default function SectorsShowcase() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 space-y-12">
//       <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Our Impact Across Key Sectors</h1>
//       <p className="text-center text-gray-600 max-w-3xl mx-auto">
//         Discover how we’re creating value through mining, tourism, education, and logistics—with stories that reflect our mission of growth, connection, and transformation.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {sectors.map((sector, idx) => (
//           <div key={idx} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
//             <h2 className="text-xl font-semibold text-indigo-700 mb-4">{sector.title}</h2>
//             <VideoPlayer src={sector.src} autoPlay={false} loop={false} muted={false} controls poster={sector.poster} width="640" height="360" className="rounded-xl shadow" />
//             <p className="mt-4 text-gray-700 text-sm italic">“{sector.commentary}”</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import VideoPlayer from "../components/Multimedia/VideoPalyer";
import { sectors } from "../utils/constants";

export default function SectorsShowcase() {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-10 py-12 space-y-12">
      <button onClick={goHome} className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Go Back to Home Page
      </button>

      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Our Impact Across Key Sectors</h1>
      <p className="text-center text-gray-600 max-w-3xl mx-auto">
        Discover how we’re creating value through mining, tourism, education, and logistics—with stories that reflect our mission of growth, connection, and transformation.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {sectors.map((sector, idx) => (
          <div key={idx} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">{sector.title}</h2>
            <VideoPlayer src={sector.src} autoPlay={false} loop={false} muted={false} controls poster={sector.poster} width="640" height="360" className="rounded-xl shadow" />
            <p className="mt-4 text-gray-700 text-sm italic">“{sector.commentary}”</p>
          </div>
        ))}
      </div>
    </section>
  );
}
