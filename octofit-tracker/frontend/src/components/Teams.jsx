import ResourceList from './ResourceList';

function Teams() {
  return (
    <ResourceList
      collection="teams"
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