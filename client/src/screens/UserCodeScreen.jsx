import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserCodeScreen() {
  const [userCode, setUserCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = userCode.trim();
    if (!trimmed) return;

    navigate("/songs");
  };

  const isReady = userCode.trim().length > 0;

  return (
    <div className="screen">
      <h1 className="screen-title">Who are you in this team?</h1>
      <p className="screen-subtitle">
        Enter the user code linked to your part (for example, Phil’s Tenor line).
      </p>

      <div className="card card--padded">
        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            Your User Code
            <input
              className="input"
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              placeholder="e.g. PHIL01"
            />
          </label>

          <p className="helper-text">
            This is usually assigned by your conductor or rehearsal manager.
          </p>

          <button
            type="submit"
            className={`primary-btn ${isReady ? "primary-btn--active" : ""}`}
            disabled={!isReady}
          >
            See my songs
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserCodeScreen;
