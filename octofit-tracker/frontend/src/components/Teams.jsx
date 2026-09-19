import ResourceList from './ResourceList';

const teamsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/';

function Teams() {
  return (
    <ResourceList
      collection="teams"
      endpoint={teamsEndpoint}
      title="Teams"
      subtitle="Training groups competing across the OctoFit leaderboard."
      renderItem={(team) => (
        <article className="resource-card" key={team._id || team.name}>
          <h2>{team.name}</h2>
          <p>{team.city}</p>
          <dl>
            <dt>Mascot</dt>
            <dd>{team.mascot}</dd>
            <dt>Members</dt>
            <dd>{team.memberCount}</dd>
          </dl>
        </article>
      )}
    />
  );
}

export default Teams;