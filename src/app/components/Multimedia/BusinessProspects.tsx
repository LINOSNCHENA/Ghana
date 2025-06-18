import React from "react";

export const BusinessOpportunities: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {/* Heading */}
      <section>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Business Overview</h1>
        <p className="text-lg text-gray-700">
          We are a leading operator in the gold mining and precious metals sector, focused on the extraction, processing, and export of gold in large quantities. With active mining
          operations across key gold-rich regions, our company is committed to high-yield production, environmental responsibility, and international trade excellence.
        </p>
      </section>

      {/* Core Activities */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Core Activities</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-yellow-800">1. Gold Mining Operations</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Ownership and operation of licensed gold mines across West Africa.</li>
              <li>Use of advanced extraction technologies to ensure high recovery rates.</li>
              <li>Compliance with local mining laws, environmental and labor standards.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-yellow-800">2. Gold Bar Production</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Processing and refining of raw gold into high-purity gold bars (usually 95–99.99%).</li>
              <li>Secure, standardized packaging and assay certification for global trade.</li>
              <li>Ability to produce commercial bar sizes (1kg, 5kg, 12.5kg).</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-yellow-800">3. Large-Scale Gold Sales</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Bulk supply of gold to international buyers, governments, private banks, and commodity traders.</li>
              <li>FOB and CIF shipping terms available from secure vault locations.</li>
              <li>Transparent KYC/AML procedures, backed by full documentation (certificate of origin, assay reports, export permits, etc.).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Partner With Us</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            <strong>Proven Track Record:</strong> Years of successful gold mining and export operations in West Africa.
          </li>
          <li>
            <strong>High-Volume Capability:</strong> Consistent capacity to fulfill large-scale gold contracts monthly.
          </li>
          <li>
            <strong>Secure & Certified:</strong> Every transaction is backed by legally certified documentation and international standards.
          </li>
          <li>
            <strong>Investment-Ready:</strong> Open to joint ventures in mining expansion, refinery development, and logistics infrastructure.
          </li>
        </ul>
      </section>

      {/* Available Services */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Available Services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Direct bulk sale of gold bars and dust.</li>
          <li>Joint venture partnerships in mining exploration and development.</li>
          <li>Refinery investment opportunities (local and international).</li>
          <li>Secure vault storage and logistics coordination.</li>
        </ul>
      </section>
    </div>
  );
};
