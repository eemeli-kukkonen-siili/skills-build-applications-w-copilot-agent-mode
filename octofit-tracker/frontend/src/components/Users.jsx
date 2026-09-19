import ResourceList from './ResourceList';

function Users() {
  return (
    <ResourceList
      collection="users"
      title="Users"
      subtitle="Profiles for athletes, coaches, and team leads using OctoFit."
      renderItem={(user) => (
        <article className="resource-card" key={user._id || user.email}>
          <h2>{user.name}</h2>
          <p>{user.role}</p>
          <dl>
            <dt>Email</dt>
            <dd>{user.email}</dd>
            <dt>Team</dt>
            <dd>{user.team}</dd>
            <dt>Age</dt>
            <dd>{user.age}</dd>
          </dl>
        </article>
      )}
    />
  );
}

export default Users;