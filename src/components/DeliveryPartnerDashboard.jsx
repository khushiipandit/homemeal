// src/components/DeliveryPartnerDashboard.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

// subcomponents
import DPSidebar from "./delivery/DP_Sidebar";
import DPTopbar from "./delivery/DP_Topbar";
import DPOverview from "./delivery/DP_Overview";
import DPActiveJobs from "./delivery/DP_ActiveJobs";
import DPGigBoard from "./delivery/DP_GigBoard";
import DPEarnings from "./delivery/DP_Earnings";
import DPHistory from "./delivery/DP_History";
import DPProfile from "./delivery/DP_Profile";
import DPSupport from "./delivery/DP_Support";

/**
 * DeliveryPartnerDashboard.jsx (fragmented root)
 * - Original logic & state preserved.
 * - UI moved to subcomponents under src/components/delivery/
 */

const ACCENT = "bg-orange-600";
const ACCENT_HOVER = "hover:bg-orange-500";
const CARD_BG = "bg-gray-900/60";
const CARD_GLASS = "backdrop-blur-sm";

const earningsData = [
  { day: "Mon", completed: 5, earnings: 650 },
  { day: "Tue", completed: 3, earnings: 360 },
  { day: "Wed", completed: 6, earnings: 780 },
  { day: "Thu", completed: 4, earnings: 520 },
  { day: "Fri", completed: 7, earnings: 910 },
  { day: "Sat", completed: 8, earnings: 1040 },
  { day: "Sun", completed: 2, earnings: 240 },
];

export default function DeliveryPartnerDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [search, setSearch] = useState("");
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileName] = useState("Arjun Verma");

  // Jobs the partner currently owns
  const [activeJobs, setActiveJobs] = useState([
    {
      id: "JOB-2311",
      pickup: { name: "Supertech Building", address: "Tower C, Sector 74" },
      drop: { name: "Ajnara Homes", address: "Gate 2, Sector 16" },
      eta: "25 min",
      payout: 120,
      distanceKm: 6.4,
      status: "Assigned", // Assigned | Picked | Delivered
      items: "2x Tiffin (North Indian)",
      customer: "Riya P.",
      note: "",
    },
    {
      id: "JOB-2312",
      pickup: { name: "Amrapali Sapphire", address: "Gate 1, Sector 45" },
      drop: { name: "Advant Navis", address: "Main Lobby, Sector 142" },
      eta: "35 min",
      payout: 150,
      distanceKm: 9.2,
      status: "Assigned",
      items: "1x Meal Box",
      customer: "Karan S.",
      note: "Call at gate",
    },
  ]);

  // Public gig board visible to all riders
  const [gigBoard, setGigBoard] = useState([
    {
      id: "GIG-5501",
      pickup: { name: "Urbtech Trade Center", address: "Sector 132" },
      drop: { name: "Pari Chowk", address: "Alpha 1" },
      payout: 170,
      distanceKm: 11.3,
      postedBy: "Rider #D-102",
      items: "3x Lunch Packs",
      reason: "Stuck at previous delivery",
    },
  ]);

  const [history, setHistory] = useState([
    {
      id: "JOB-2300",
      date: "2025-08-10",
      route: "Sector 74 → Sector 16",
      payout: 110,
      rating: 5,
    },
    {
      id: "JOB-2301",
      date: "2025-08-10",
      route: "Sector 107 → Sector 93A",
      payout: 95,
      rating: 5,
    },
  ]);

  const totals = useMemo(() => {
    const today = earningsData.reduce(
      (acc, d) => {
        acc.completed += d.completed;
        acc.earnings += d.earnings;
        return acc;
      },
      { completed: 0, earnings: 0 }
    );
    return {
      active: activeJobs.length,
      gigs: gigBoard.length,
      completed: today.completed,
      earnings: today.earnings,
    };
  }, [activeJobs, gigBoard]);

  // --- Gig actions ---
  function sendToGig(jobId) {
    const job = activeJobs.find((j) => j.id === jobId);
    if (!job) return;
    // move to public gig board
    setActiveJobs((prev) => prev.filter((j) => j.id !== jobId));
    setGigBoard((prev) => [
      {
        id: `GIG-${Math.floor(5000 + Math.random() * 4000)}`,
        pickup: job.pickup,
        drop: job.drop,
        payout: job.payout,
        distanceKm: job.distanceKm,
        items: job.items,
        postedBy: "You",
        reason: "Sent to Gig",
      },
      ...prev,
    ]);
    setActiveTab("GigBoard");
  }

  function claimGig(gigId) {
    const gig = gigBoard.find((g) => g.id === gigId);
    if (!gig) return;
    // move to your active jobs
    setGigBoard((prev) => prev.filter((g) => g.id !== gigId));
    setActiveJobs((prev) => [
      {
        id: `JOB-${Math.floor(2400 + Math.random() * 600)}`,
        pickup: gig.pickup,
        drop: gig.drop,
        payout: gig.payout,
        distanceKm: gig.distanceKm,
        status: "Assigned",
        items: gig.items || "Meal Box",
        customer: "—",
        eta: "~",
        note: "",
      },
      ...prev,
    ]);
    setActiveTab("ActiveJobs");
  }

  function markPicked(jobId) {
    setActiveJobs((prev) =>
      prev.map((j) => (j.id === jobId ? { ...j, status: "Picked" } : j))
    );
  }

  function markDelivered(jobId) {
    const job = activeJobs.find((j) => j.id === jobId);
    setActiveJobs((prev) => prev.filter((j) => j.id !== jobId));
    if (job) {
      setHistory((prev) => [
        {
          id: job.id,
          date: new Date().toISOString().slice(0, 10),
          route: `${job.pickup.name} → ${job.drop.name}`,
          payout: job.payout,
          rating: 5,
        },
        ...prev,
      ]);
    }
  }

  // ---- Render Root ----
  return (
    <div className="flex h-screen bg-black text-gray-100">
      <DPSidebar activeTab={activeTab} setActiveTab={setActiveTab} totals={totals} />

      <main className="flex-1 flex flex-col">
        <DPTopbar
          search={search}
          setSearch={setSearch}
          notificationsOpen={notificationsOpen}
          setNotificationsOpen={setNotificationsOpen}
          profileName={profileName}
          setActiveTab={setActiveTab}
        />

        <section className="p-6 overflow-auto">
          {activeTab === "Overview" && <DPOverview totals={totals} earningsData={earningsData} />}
          {activeTab === "ActiveJobs" && (
            <DPActiveJobs
              activeJobs={activeJobs}
              search={search}
              markPicked={markPicked}
              markDelivered={markDelivered}
              sendToGig={sendToGig}
            />
          )}
          {activeTab === "GigBoard" && <DPGigBoard gigBoard={gigBoard} claimGig={claimGig} />}
          {activeTab === "Earnings" && <DPEarnings earningsData={earningsData} />}
          {activeTab === "History" && <DPHistory history={history} />}
          {activeTab === "Profile" && <DPProfile profileName={profileName} />}
          {activeTab === "Support" && <DPSupport />}
        </section>

        <footer className="px-6 py-4 border-t border-gray-800 text-xs text-gray-500">
          HomeMe • Delivery Partner Dashboard — Drive safe, deliver fresh.
        </footer>
      </main>
    </div>
  );
}
