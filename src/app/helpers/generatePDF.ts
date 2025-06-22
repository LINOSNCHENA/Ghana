import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export async function generatePdfFromTxt(fileName: string, title: string) {
    try {
        const res = await fetch(`/docs/${fileName}.txt`);
        const textContent = await res.text();

        const pdfDoc = await PDFDocument.create();
        let page = pdfDoc.addPage(); // use let instead of const
        const { width, height } = page.getSize();
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const fontSize = 12;
        console.log(width)

        // Split text into lines of ~80 characters
        const lines = textContent.match(/.{1,80}/g) || [];

        let y = height - 50;

        // Draw title
        page.drawText(title, {
            x: 50,
            y,
            size: 16,
            font,
            color: rgb(0, 0, 0.6),
        });

        y -= 30;

        // Draw text lines
        for (const line of lines) {
            if (y < 50) {
                page = pdfDoc.addPage(); // reassigning page, allowed with let
                y = height - 50;
            }

            page.drawText(line, {
                x: 50,
                y,
                size: fontSize,
                font,
                color: rgb(0, 0, 0),
            });

            y -= 18;
        }

        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: "application/pdf" });

        // Trigger download
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `${fileName}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error("PDF generation failed:", error);
    }
}
