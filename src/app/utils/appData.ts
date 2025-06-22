import { ClientDocument } from "../downloads/page";

export const documents: ClientDocument[] = [
    // Logistics
    {
        id: 1,
        name: "Transport Contract Template",
        url: "/docs/logistics-transport-contract",
        type: "PDF",
        size: "1.1 MB",
        category: "Logistics",
    },
    {
        id: 2,
        name: "Shipping Schedule 2025",
        url: "/docs/logistics-shipping-schedule",
        type: "Excel",
        size: "750 KB",
        category: "Logistics",
    },

    // Tourism
    {
        id: 3,
        name: "Tourism Service Agreement",
        url: "/docs/tourism-service-agreement",
        type: "Word",
        size: "680 KB",
        category: "Tourism",
    },
    {
        id: 4,
        name: "Tour Package Sample",
        url: "/docs/tourism-tour-package",
        type: "PDF",
        size: "2.3 MB",
        category: "Tourism",
    },

    // Mining
    {
        id: 5,
        name: "Mining Site Inspection Report",
        url: "/docs/mining-site-inspection",
        type: "Word",
        size: "910 KB",
        category: "Mining",
    },
    {
        id: 6,
        name: "Ore Analysis Summary",
        url: "/docs/mining-ore-analysis",
        type: "PDF",
        size: "1.5 MB",
        category: "Mining",
    },

    // Education
    {
        id: 7,
        name: "Training Curriculum Outline",
        url: "/docs/education-curriculum",
        type: "PDF",
        size: "1.2 MB",
        category: "Education",
    },
    {
        id: 8,
        name: "Student Enrollment Form",
        url: "/docs/education-enrollment-form",
        type: "Excel",
        size: "540 KB",
        category: "Education",
    },
];

export const categories = ["Logistics", "Tourism", "Mining", "Education"];