import { useState } from "react";

function SendInvoice() {
  const [contact, setContact] = useState("");

  const handleSend = () => {
    if (!contact) return;

    if (contact.includes("@")) {
      // Treat as email
      console.log("Send PDF to email:", contact);
      // TODO: Implement API call to email the PDF
    } else {
      // Treat as phone number
      const cleaned = contact.replace(/\D/g, "");
      const invoiceLink = "https://example.com/invoice123.pdf"; // Replace with real hosted link
      const message = encodeURIComponent(`Hello, here is your invoice: ${invoiceLink}`);
      const whatsappURL = `https://wa.me/${cleaned}?text=${message}`;
      window.open(whatsappURL, "_blank");
    }
  };

  console.log(handleSend());

  return (
    <div className="p-4 max-w-md mx-auto">
      <label className="block mb-2 font-semibold">Phone Number:</label>
      <input
        type="text"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        placeholder="e.g., mabvuto@example.com or +26012345678"
      />
      {/* <button onClick={handleSend} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Newsletter Subscription
      </button> */}
    </div>
  );
}

export default SendInvoice;
