import ResourceList from './ResourceList';

const activitiesEndpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

function Activities() {
  return (
    <ResourceList
      collection="activities"
      endpoint={activitiesEndpoint}
      title="Activities"
      subtitle="Recent logged workouts from OctoFit members."
      renderItem={(activity) => (
        <article className="resource-card" key={activity._id || `${activity.userEmail}-${activity.type}`}>
          <h2>{activity.type}</h2>
          <p>{activity.userEmail}</p>
          <dl>
            <dt>Duration</dt>
            <dd>{activity.durationMinutes} min</dd>
            <dt>Calories</dt>
            <dd>{activity.caloriesBurned}</dd>
            <dt>Date</dt>
            <dd>{new Date(activity.activityDate).toLocaleDateString()}</dd>
          </dl>
        </article>
      )}
    />
  );
}

export default Activities;