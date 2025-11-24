import { useState } from "react";
import { useNavigate } from "react-router-dom";

function JoinTeamScreen() {
  const [teamCode, setTeamCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = teamCode.trim();
    if (!trimmed) return;

    // later: you can pass this via state if you want
    navigate("/user-code");
  };

  const isReady = teamCode.trim().length > 0;

  return (
    <div className="screen">
      <h1 className="screen-title">Join your team</h1>
      <p className="screen-subtitle">
        Enter the team code your manager shared with you.
      </p>

      <div className="card card--padded">
        <form onSubmit={handleSubmit} className="form">
          <label className="label">
            Team Code
            <input
              className="input"
              value={teamCode}
              onChange={(e) => setTeamCode(e.target.value)}
              placeholder="e.g. XYZ123"
            />
          </label>

          <p className="helper-text">
            Example: <span className="mono">CHOIR24</span> or{" "}
            <span className="mono">BAND01</span>
          </p>

          <button
            type="submit"
            className={`primary-btn ${isReady ? "primary-btn--active" : ""}`}
            disabled={!isReady}
          >
            Join team
          </button>
        </form>
      </div>
    </div>
  );
}

export default JoinTeamScreen;
