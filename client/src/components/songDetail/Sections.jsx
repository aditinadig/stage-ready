// src/components/songDetail/SectionsPanel.jsx
export default function SectionsPanel({
  sectionsCollapsed,
  setSectionsCollapsed,
  scrollToSection
}) {
  return (
    <section className="card sections-panel">
      <header className="sections-panel__header">
        <div className="sections-panel__title">
          <span>Your Sections</span>
          <span className="section-pill">2</span>
        </div>

        <button
          className="icon-btn"
          onClick={() => setSectionsCollapsed(c => !c)}
        >
          {sectionsCollapsed ? "▸" : "▾"}
        </button>
      </header>

      {!sectionsCollapsed && (
        <div className="sections-panel__tags">
          <button
            className="section-tag section-tag--solo"
            onClick={() => scrollToSection("section-verse1")}
          >
            Solo: Verse 1 – Lines 3 & 4
          </button>

          <button
            className="section-tag section-tag--chorus"
            onClick={() => scrollToSection("section-chorus1")}
          >
            Chorus: Chorus 1 & 2 – Lines 1 & 2
          </button>
        </div>
      )}
    </section>
  );
}
