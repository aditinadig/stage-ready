import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import UpdatesPanel from "../components/songDetail/Updates.jsx";
import SectionsPanel from "../components/songDetail/Sections.jsx";
import ControlsBar from "../components/songDetail/Controls.jsx";
import LyricsPanel from "../components/songDetail/Lyrics.jsx";
import CommentsModal from "../components/songDetail/Comments.jsx";

const INITIAL_UPDATES = [
  { id: "u1", text: "Verse 2 reassigned to Jane", sectionId: "section-verse2" },
  { id: "u2", text: "+8 bars before chorus 1", sectionId: "section-chorus1" },
  { id: "u3", text: "Lyrics on Verse 1 changed", sectionId: "section-verse1" },
];

const INITIAL_HISTORY = [{ id: "h1", text: "Initial tempo set to 92 BPM" }];

export default function SongDetailScreen() {
  const { songId } = useParams();
  const navigate = useNavigate();

  const [updates, setUpdates] = useState(INITIAL_UPDATES);
  const [historyUpdates, setHistoryUpdates] = useState(INITIAL_HISTORY);
  const [updatesCollapsed, setUpdatesCollapsed] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const [sectionsCollapsed, setSectionsCollapsed] = useState(false);

  const [cueMode, setCueMode] = useState("inline");
  const [brightness, setBrightness] = useState(1);  // 0 = dim, 1 = normal, 2 = bright
  const [fontScale, setFontScale] = useState(1);

  const [confirmationToast, setConfirmationToast] = useState("");
  const [commentUpdateId, setCommentUpdateId] = useState(null);

  const [expandedSections, setExpandedSections] = useState({
    chorus1: true,
    verse1: true,
    chorus2: true,
    verse2: true,
  });

  const confirmUpdate = id => {
    setUpdates(prev => {
      const found = prev.find(u => u.id === id);
      if (!found) return prev;

      setHistoryUpdates(hist => [...hist, found]);
      setShowHistory(true);

      setConfirmationToast("Update confirmed!");
      setTimeout(() => setConfirmationToast(""), 1500);

      return prev.filter(u => u.id !== id);
    });
  };

  const confirmAll = () => {
    setHistoryUpdates(hist => [...hist, ...updates]);
    setUpdates([]);
  };

  const scrollToSection = sectionId => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    const map = {
      "section-chorus1": "chorus1",
      "section-verse1": "verse1",
      "section-chorus2": "chorus2",
      "section-verse2": "verse2",
    };

    const key = map[sectionId];
    if (key) {
      setExpandedSections(prev => ({ ...prev, [key]: true }));
    }

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "center" });

      el.classList.add("lyrics-section--highlight");
      setTimeout(() => el.classList.remove("lyrics-section--highlight"), 1800);
    }, 50);
  };

  const toggleSection = key =>
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));

  const openComments = id => setCommentUpdateId(id);
  const closeComments = () => setCommentUpdateId(null);

  const changeFont = dir =>
    setFontScale(prev =>
      Number(
        Math.min(1.4, Math.max(0.8, prev + (dir === "up" ? 0.1 : -0.1))).toFixed(
          2
        )
      )
    );

  const increaseBrightness = () => {
    setBrightness((b) => Math.min(2, b + 1));
  };

  const decreaseBrightness = () => {
    setBrightness((b) => Math.max(0, b - 1));
  };


  return (
    <div
      className="screen song-detail"
      data-brightness={brightness}
      style={{ "--lyrics-font-scale": fontScale }}
    >

      <button className="back-link" onClick={() => navigate("/songs")}>
        ← Back
      </button>

      <h1 className="song-detail__title">Into the Air Tonight</h1>
      <p className="song-detail__subtitle">Phil, Jane, Mike</p>

      <UpdatesPanel
        updates={updates}
        historyUpdates={historyUpdates}
        updatesCollapsed={updatesCollapsed}
        settingsOpen={settingsOpen}
        showHistory={showHistory}
        confirmUpdate={confirmUpdate}
        confirmAll={confirmAll}
        scrollToSection={scrollToSection}
        openComments={openComments}
        setShowHistory={setShowHistory}
        setSettingsOpen={setSettingsOpen}
        setUpdatesCollapsed={setUpdatesCollapsed}
      />

      <SectionsPanel
        sectionsCollapsed={sectionsCollapsed}
        setSectionsCollapsed={setSectionsCollapsed}
        scrollToSection={scrollToSection}
      />

      <ControlsBar
        cueMode={cueMode}
        brightness={brightness}
        setCueMode={setCueMode}
        increaseBrightness={increaseBrightness}
        decreaseBrightness={decreaseBrightness}
        changeFont={changeFont}
      />


      <LyricsPanel
        expandedSections={expandedSections}
        toggleSection={toggleSection}
        confirmUpdate={confirmUpdate}
        cueMode={cueMode}
      />

      {commentUpdateId && <CommentsModal close={closeComments} />}

      {confirmationToast && (
        <div className="toast-confirm">✔ {confirmationToast}</div>
      )}
    </div>
  );
}
