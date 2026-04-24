import "../components/Github.css";
import { useState } from "react";
import axios from "axios";

const GithubSearch = () => {
  const [userName, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.github.com/users/${userName}`,
      );
      setProfile(response.data);
      setError(null);
    } catch (error) {
      setProfile(null);
      setError("User not found");
    }
  };
  return (
    <div className="main-container">
      <h1 className="main-heading">Github Profile Detective</h1>

      <form action="" onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub Username..."
          value={userName}
          className="search-input"
          onChange={(el) => setUsername(el.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <p className="error-msg">{error}</p>}

      {/* Information */}
      <div className="profile-container">
        <div className="profile-content">
          <div className="profile-img">
            <img
              className="profile-avatar"
              src={profile?.avatar_url}
              alt="Avatar"
            />
          </div>
          <div className="profile-details">
            <div className="profile-des">
              <h1 className="profile-name">{profile?.name || "No Name"}</h1>
              <p className="profile-created">
                Joined:{" "}
                {profile?.created_at &&
                  new Date(profile.created_at).toLocaleDateString()}
              </p>
            </div>
            <a
              href={profile?.html_url}
              target="_blank"
              className="profile-username"
              rel="noreferrer"
            >
              @{profile?.login}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubSearch;
