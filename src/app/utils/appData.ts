import { ClientDocument } from "../downloads/page";

export const documents: ClientDocument[] = [
    // Logistics
    {
        id: 1,
        name: "Transport Contract Template.pdf",
        url: "/docs/logistics-transport-contract.pdf",
        type: "PDF",
        size: "1.1 MB",
        category: "Logistics",
    },
    {
        id: 2,
        name: "Shipping Schedule 2025.xlsx",
        url: "/docs/logistics-shipping-schedule.xlsx",
        type: "Excel",
        size: "750 KB",
        category: "Logistics",
    },

    // Tourism
    {
        id: 3,
        name: "Tourism Service Agreement.docx",
        url: "/docs/tourism-service-agreement.docx",
        type: "Word",
        size: "680 KB",
        category: "Tourism",
    },
    {
        id: 4,
        name: "Tour Package Sample.pdf",
        url: "/docs/tourism-tour-package.pdf",
        type: "PDF",
        size: "2.3 MB",
        category: "Tourism",
    },

    // Mining
    {
        id: 5,
        name: "Mining Site Inspection Report.docx",
        url: "/docs/mining-site-inspection.docx",
        type: "Word",
        size: "910 KB",
        category: "Mining",
    },
    {
        id: 6,
        name: "Ore Analysis Summary.pdf",
        url: "/docs/mining-ore-analysis.pdf",
        type: "PDF",
        size: "1.5 MB",
        category: "Mining",
    },

    // Education
    {
        id: 7,
        name: "Training Curriculum Outline.pdf",
        url: "/docs/education-curriculum.pdf",
        type: "PDF",
        size: "1.2 MB",
        category: "Education",
    },
    {
        id: 8,
        name: "Student Enrollment Form.xlsx",
        url: "/docs/education-enrollment-form.xlsx",
        type: "Excel",
        size: "540 KB",
        category: "Education",
    },
];

export const categories = ["Logistics", "Tourism", "Mining", "Education"];