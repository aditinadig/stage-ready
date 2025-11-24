// src/components/songDetail/Lyrics.jsx
export default function Lyrics({
  expandedSections,
  toggleSection,
  cueMode
}) {
  return (
    <section className={`card lyrics-card lyrics-card--mode-${cueMode}`}>
      {/* Chorus 1 */}
      <div
        id="section-chorus1"
        className="lyrics-section lyrics-section--chorus"
      >
        <div
          className="lyrics-section__header"
          onClick={() => toggleSection("chorus1")}
        >
          <span className="caret">
            {expandedSections.chorus1 ? "▼" : "▶"}
          </span>
          <span className="lyrics-section__title">Chorus 1</span>
        </div>

        {expandedSections.chorus1 && (
          <>
            <div className="cue-banner cue-banner--primary">
              ↓ Enter 8 bars after drums
            </div>

            <div className="lyrics-body">
              {/* YOUR LINES in this chorus – green */}
              <p className="lyrics-line lyrics-line--own-chorus">
                I can feel it coming in the air tonight, oh Lord
              </p>
              <p className="lyrics-line lyrics-line--own-chorus">
                And I’ve been waiting for this moment for all my life, oh Lord
              </p>

              {/* CONTEXT LINE – grey */}
              <p className="lyrics-line lyrics-line--muted">
                Can you feel it coming in the air tonight? Oh Lord, oh Lord
              </p>
            </div>
          </>
        )}
      </div>

      {/* Verse 1 */}
      <div
        id="section-verse1"
        className="lyrics-section lyrics-section--verse"
      >
        <div
          className="lyrics-section__header"
          onClick={() => toggleSection("verse1")}
        >
          <span className="caret">
            {expandedSections.verse1 ? "▼" : "▶"}
          </span>
          <span className="lyrics-section__title">Verse 1</span>
        </div>

        {expandedSections.verse1 && (
          <>
            <div className="lyrics-body">
              {/* YOUR LINES in this verse – blue */}
              <p className="lyrics-line lyrics-line--own-verse">
                Well, if you told me you were drowning
              </p>
              <p className="lyrics-line lyrics-line--own-verse">
                I would not lend a hand
              </p>
            </div>

            <div className="cue-banner cue-banner--secondary">
              <div className="cue-banner__main">
                Enter after “I would not lend a hand”
              </div>
              <span className="cue-banner__meta">
                8 bars after piano · 8 bars after “I would not lend a hand”
              </span>
            </div>

            <div className="lyrics-body">
              {/* CONTEXT LINES for the rest of the verse – grey */}
              <p className="lyrics-line lyrics-line--muted">
                I’ve seen your face before, my friend
              </p>
              <p className="lyrics-line lyrics-line--muted">
                But I don’t know if you know who I am
              </p>
            </div>
          </>
        )}
      </div>

      {/* Chorus 2 (context only) */}
      <div
        id="section-chorus2"
        className="lyrics-section lyrics-section--muted"
      >
        <div
          className="lyrics-section__header"
          onClick={() => toggleSection("chorus2")}
        >
          <span className="caret">
            {expandedSections.chorus2 ? "▼" : "▶"}
          </span>
          <span className="lyrics-section__title">Chorus 2</span>
        </div>

        {expandedSections.chorus2 && (
          <div className="lyrics-body">
            <p className="lyrics-line lyrics-line--muted">
              And I can feel it coming in the air tonight, oh Lord
            </p>
            <p className="lyrics-line lyrics-line--muted">
              Well, I’ve been waiting for this moment for all my life, oh Lord
            </p>
          </div>
        )}
      </div>

      {/* Verse 2 (context only) */}
      <div
        id="section-verse2"
        className="lyrics-section lyrics-section--muted"
      >
        <div
          className="lyrics-section__header"
          onClick={() => toggleSection("verse2")}
        >
          <span className="caret">
            {expandedSections.verse2 ? "▼" : "▶"}
          </span>
          <span className="lyrics-section__title">Verse 2</span>
        </div>

        {expandedSections.verse2 && (
          <div className="lyrics-body">
            <p className="lyrics-line lyrics-line--muted">
              Well, the hurt doesn&apos;t show, but the pain still grows
            </p>
            <p className="lyrics-line lyrics-line--muted">
              It&apos;s no stranger to you and me
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
