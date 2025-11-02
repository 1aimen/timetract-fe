import React, { useState } from "react";

export default function SidebarWidget() {

   const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [, setError] = useState<string | null>(null);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        setError(null);
        console.log("User location:", latitude, longitude);
        // You can call your clock-in API here and send latitude/longitude
        // e.g., clockIn({ lat: latitude, lng: longitude });
      },
      (err) => {
        setError(err.message);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  return (
    <div
      className={`
        mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
        #1 Teams and shift management software
      </h3>
      <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">
        Manage your team better with our solutions
      </p>
      <button onClick={handleGetLocation}>
        Upgrade To Pro

      </button>
      <a
        href="https://TimeTract.com/pricing"
        target="_blank"
        rel="nofollow"
        className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
      >
        Upgrade To Pro
      </a>
            {location && (
        <p>
          Location: {location.lat.toFixed(5)}, {location.lng.toFixed(5)}
        </p>
      )}
    </div>
  );
}

