import { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/app/composables/firebaseClient";

function NewsletterVisits() {
  useEffect(() => {
    const logVisit = async () => {
      const alreadyVisited = localStorage.getItem("hasVisited");

      if (alreadyVisited) return;
      try {
        const res = await fetch("https://ipapi.co/json/");
        const info = await res.json();
        console.clear();

        const visitData = {
          ip: info.ip,
          location: `${info.city}, ${info.country_name}`,
          userAgent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        };

        console.log(visitData);
        await addDoc(collection(db, "visits"), visitData);

        localStorage.setItem("hasVisited", "true");
      } catch (err) {
        console.error("Failed to log visit", err);
      }
    };

    logVisit();
  }, []);

  return <div className="max-w-md p-4 mx-auto">{/* Newsletter form here */}</div>;
}

export default NewsletterVisits;
