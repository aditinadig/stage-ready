// src/components/songDetail/Updates.jsx
export default function Updates({
  updates,
  historyUpdates,
  updatesCollapsed,
  settingsOpen,
  showHistory,
  confirmUpdate,
  confirmAll,
  scrollToSection,
  openComments,
  setShowHistory,
  setSettingsOpen,
  setUpdatesCollapsed
}) {
  const isHistoryView = showHistory;

  const headerCount = isHistoryView ? historyUpdates.length : updates.length;

  return (
    <section className="card updates-panel">
      {/* Header */}
      <header className="updates-panel__header">
        <div className="updates-panel__title">
          <span>{isHistoryView ? "Recently Confirmed Updates" : "Updates"}</span>
          <span
            className={
              "updates-pill" + (isHistoryView ? " updates-pill--history" : "")
            }
          >
            {headerCount}
          </span>
        </div>

        <div className="updates-panel__actions">
          {/* Confirm All + settings only in normal view */}
          {!isHistoryView && (
            <>
              <button
                className="chip chip--primary"
                type="button"
                onClick={confirmAll}
                disabled={updates.length === 0}
              >
                Confirm All
              </button>

              <button
                className="icon-btn"
                type="button"
                onClick={() => setSettingsOpen(o => !o)}
                aria-label="Settings"
              >
                ⚙
              </button>
            </>
          )}

          <button
            className="icon-btn"
            type="button"
            onClick={() => setUpdatesCollapsed(c => !c)}
            aria-label={updatesCollapsed ? "Expand updates" : "Collapse updates"}
          >
            {updatesCollapsed ? "▸" : "▾"}
          </button>
        </div>
      </header>

      {/* Settings only shown in normal view */}
      {!isHistoryView && settingsOpen && (
        <div className="settings-menu">
          <p>Update settings (placeholder)</p>
          <ul>
            <li>• Sort by newest first</li>
            <li>• Show only unconfirmed</li>
          </ul>
        </div>
      )}

      {/* Body */}
      {!updatesCollapsed && (
        <>
          <button
            className={
              "link-inline" + (isHistoryView ? " link-inline--danger" : "")
            }
            type="button"
            onClick={() => setShowHistory(s => !s)}
          >
            {isHistoryView ? "Show Updates" : "Recently Confirmed Updates"}
          </button>

          {/* NORMAL VIEW: pending updates in red */}
          {!isHistoryView && (
            <div className="updates-list">
              {updates.map(u => (
                <div key={u.id} className="update-row">
                  <span className="update-row__bar" />
                  <span className="update-row__text">{u.text}</span>

                  <div className="update-row__actions">
                    <button
                      className="icon-circle"
                      type="button"
                      onClick={() => scrollToSection(u.sectionId)}
                      aria-label="Jump to change"
                    >
                      🔍
                    </button>
                    <button
                      className="icon-circle"
                      type="button"
                      onClick={() => openComments(u.id)}
                      aria-label="View comments"
                    >
                      💬
                    </button>
                    <button
                      className="chip chip--confirm"
                      type="button"
                      onClick={() => confirmUpdate(u.id)}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              ))}

              {updates.length === 0 && (
                <p className="helper-text" style={{ marginTop: 4 }}>
                  All caught up. No pending updates.
                </p>
              )}
            </div>
          )}

          {/* HISTORY VIEW: confirmed updates in blue, no Confirm button */}
          {isHistoryView && (
            <div className="updates-list">
              {historyUpdates.map(h => (
                <div
                  key={h.id}
                  className="update-row update-row--history"
                >
                  <span className="update-row__bar update-row__bar--history" />
                  <span className="update-row__text">{h.text}</span>

                  <div className="update-row__actions">
                    {/* Always show magnifying glass, like current updates */}
                    <button
                      className="icon-circle"
                      type="button"
                      onClick={() => scrollToSection(h.sectionId)}
                      aria-label="Jump to change"
                    >
                      🔍
                    </button>

                    <button
                      className="icon-circle"
                      type="button"
                      onClick={() => openComments(h.id)}
                      aria-label="View comments"
                    >
                      💬
                    </button>
                    {/* no Confirm here */}
                  </div>
                </div>
              ))}

              {historyUpdates.length === 0 && (
                <p className="helper-text" style={{ marginTop: 4 }}>
                  No confirmed updates yet.
                </p>
              )}
            </div>
          )}

        </>
      )}
    </section>
  );
}
