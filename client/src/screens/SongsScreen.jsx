import { Link, useNavigate } from "react-router-dom";

const mockSongs = [
  { id: "1", title: "Into the Air Tonight", tag: "Rehearsal today" },
  { id: "2", title: "When the Night is Over", tag: "New timing update" },
];

function SongsScreen() {
  const navigate = useNavigate();

  return (
    <div className="screen">
      <h1 className="screen-title">Welcome, Phil</h1>
      <p className="screen-subtitle">
        These are the songs assigned to your part in this team.
      </p>

      <div className="card card--padded">
        <ul className="song-list">
          {mockSongs.map((song) => (
            <li key={song.id} className="song-row">
              <div className="song-row__info">
                <span className="song-title">{song.title}</span>
                {song.tag && <span className="song-tag">{song.tag}</span>}
              </div>
              <Link
                to={`/songs/${song.id}`}
                className="song-row__go"
                aria-label={`Open ${song.title}`}
              >
                View
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ marginTop: 12 }}>
        <button className="secondary-btn" onClick={() => navigate("/")}>
          Start over
        </button>
      </div>
    </div>
  );
}

export default SongsScreen;
