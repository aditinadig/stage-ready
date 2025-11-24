import { useParams, useNavigate } from "react-router-dom";

const mockSongs = {
  "1": {
    title: "Into the Air Tonight",
    role: "Tenor",
    status: "Timing updated for bars 16–24",
  },
  "2": {
    title: "When the Night is Over",
    role: "Lead vocal",
    status: "New entry at 01:12",
  },
};

function SongDetailScreen() {
  const { songId } = useParams();
  const navigate = useNavigate();

  const song = mockSongs[songId];

  if (!song) {
    return (
      <div className="screen">
        <button className="back-link" onClick={() => navigate("/songs")}>
          ← Back to songs
        </button>
        <p>Song not found.</p>
      </div>
    );
  }

  return (
    <div className="screen">
      <button className="back-link" onClick={() => navigate("/songs")}>
        ← Back to songs
      </button>

      <h1 className="screen-title">{song.title}</h1>
      <p className="screen-subtitle">
        Your part: <strong>{song.role}</strong>
      </p>

      <div className="card card--padded">
        <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
          <strong>Status:</strong> {song.status}
        </p>
        <p style={{ fontSize: "0.85rem", color: "#6b7280" }}>
          This is where your line’s notation or lyrics will appear. You can add
          timing updates, cues, and manager notes here later.
        </p>
      </div>

      <div style={{ marginTop: 12 }}>
        <button className="secondary-btn" onClick={() => navigate("/")}>
          Back to start
        </button>
      </div>
    </div>
  );
}

export default SongDetailScreen;
