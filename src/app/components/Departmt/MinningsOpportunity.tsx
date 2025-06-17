"use client";

import React from "react";

export function MiningsOpportunities() {
  const text = `
Business Overview:

We are a leading operator in the gold mining and precious metals sector, focused on the extraction, processing, and export of gold in large quantities. With active mining operations across key gold-rich regions, our company is committed to high-yield production, environmental responsibility, and international trade excellence.

⸻

Core Activities:
1. Gold Mining Operations
• Ownership and operation of licensed gold mines across West Africa.
• Use of advanced extraction technologies to ensure high recovery rates.
• Compliance with local mining laws, environmental and labor standards.

2. Gold Bar Production
• Processing and refining of raw gold into high-purity gold bars (usually 95–99.99%).
• Secure, standardized packaging and assay certification for global trade.
• Ability to produce commercial bar sizes (1kg, 5kg, 12.5kg).

3. Large-Scale Gold Sales
• Bulk supply of gold to international buyers, governments, private banks, and commodity traders.
• FOB and CIF shipping terms available from secure vault locations.
• Transparent KYC/AML procedures, backed by full documentation (certificate of origin, assay reports, export permits, etc.).

⸻

Why Partner With Us:
• Proven Track Record: Years of successful gold mining and export operations in West Africa.
• High-Volume Capability: Consistent capacity to fulfill large-scale gold contracts monthly.
• Secure & Certified: Every transaction is backed by legally certified documentation and international standards.
• Investment-Ready: Open to joint ventures in mining expansion, refinery development, and logistics infrastructure.

⸻

Available Services:
• Direct bulk sale of gold bars and dust.
• Joint venture partnerships in mining exploration and development.
• Refinery investment opportunities (local and international).
• Secure vault storage and logistics coordination.
`;

  return (
    <section className="p-6 md:p-12 max-w-4xl mx-auto space-y-10">
      <div>
        <h2 className="text-2xl font-bold mb-4">3. Mining Opportunity</h2>
        <pre className="whitespace-pre-wrap text-gray-800 bg-gray-50 p-4 rounded-md border w-full">{text}</pre>
      </div>{" "}
    </section>
  );
}
