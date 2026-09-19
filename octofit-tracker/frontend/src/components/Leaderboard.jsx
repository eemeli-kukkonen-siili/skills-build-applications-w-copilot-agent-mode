import ResourceList from './ResourceList';

const leaderboardEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`
  : 'http://localhost:8000/api/leaderboard/';

function Leaderboard() {
  return (
    <ResourceList
      collection="leaderboard"
      endpoint={leaderboardEndpoint}
      title="Leaderboard"
      subtitle="Ranked competitors and their current challenge points."
      renderItem={(entry) => (
        <article className="resource-card leaderboard-card" key={entry._id || entry.userEmail}>
          <span className="rank">#{entry.rank}</span>
          <h2>{entry.displayName}</h2>
          <p>{entry.team}</p>
          <dl>
            <dt>Points</dt>
            <dd>{entry.points}</dd>
          </dl>
        </article>
      )}
    />
  );
}

export default Leaderboard;