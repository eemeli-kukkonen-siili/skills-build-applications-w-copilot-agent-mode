import ResourceList from './ResourceList';

const workoutsEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/';

function Workouts() {
  return (
    <ResourceList
      collection="workouts"
      endpoint={workoutsEndpoint}
      title="Workouts"
      subtitle="Suggested sessions matched to common training goals."
      renderItem={(workout) => (
        <article className="resource-card" key={workout._id || workout.title}>
          <h2>{workout.title}</h2>
          <p>{workout.focusArea}</p>
          <dl>
            <dt>Difficulty</dt>
            <dd>{workout.difficulty}</dd>
            <dt>Duration</dt>
            <dd>{workout.durationMinutes} min</dd>
            <dt>Recommended for</dt>
            <dd>{(workout.recommendedFor || []).join(', ')}</dd>
          </dl>
        </article>
      )}
    />
  );
}

export default Workouts;