import { useEffect, useState } from "react";
import { ISubscription } from "@/app/types/Models.subscriptions";
import { supabase } from "@/app/Libraries/supabaseClient";
import { BUTTONS } from "@/app/utils/stylesData";

function NewsletterSubscription() {
  const [form, setForm] = useState({ name: "", email: "", location: "", address: {}, compound: "", district: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Auto-fetch location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          // Reverse geocode using OpenStreetMap's Nominatim (free and simple)
          try {
            const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
            const data = await res.json();
            const city = data.address.city || data.address.town || data.address.village || "";
            const country = data.address.country || "";
            setForm((prev) => ({ ...prev, location: `${city}, ${country}`, address: data.address, compound: data.address.suburb, district: data.address.city_district }));
            console.log(data);
          } catch (err) {
            console.error("Reverse geocoding failed", err);
          }
        },
        (error) => {
          console.warn("Geolocation error:", error.message);
        }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setStatus("");
    const datax: ISubscription = {
      name: form.name,
      email: form.email,
      location: form.location,
      address: form.address,
      district: form.district,
      compound: form.compound,
    };
    console.log(datax);

    const { data, error } = await supabase.from("subscriptions").insert([datax]);

    if (error) {
      console.log(error);
      setStatus("❌ Subscription failed.");
    } else {
      setStatus("✅ Successfully subscribed!");
      setForm({ name: "", email: "", location: "", compound: "", district: "", address: {} });
      console.log(data);
    }

    setLoading(false);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-lg font-semibold mb-9 text-center text-black">Newsletter Subscription</h2>
        <input type="text" name="name" placeholder="Your name" className="w-full p-2 mb-2 border rounded bg-white" value={form.name} onChange={handleChange} />

        <input type="email" name="email" placeholder="Your email / Whatsapp" className="w-full p-2 mb-2 border rounded bg-white" value={form.email} onChange={handleChange} />
        <button onClick={handleSubmit} disabled={loading} className={BUTTONS.largeButton}>
          {loading ? "Submitting..." : "Subscribe free newletter"}
        </button>

        {status && <p className="mt-3">{status}</p>}
      </div>
    </section>
  );
}

export default NewsletterSubscription;
