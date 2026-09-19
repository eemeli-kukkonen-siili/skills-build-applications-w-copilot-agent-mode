import { useEffect, useState } from 'react';
import { fetchCollection } from '../api';

function ResourceList({ collection, endpoint, title, subtitle, renderItem }) {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    fetchCollection(collection, endpoint)
      .then((records) => {
        if (active) {
          setItems(records);
          setStatus('ready');
        }
      })
      .catch((loadError) => {
        if (active) {
          setError(loadError.message);
          setStatus('error');
        }
      });

    return () => {
      active = false;
    };
  }, [collection, endpoint]);

  return (
    <section className="content-panel">
      <div className="content-heading">
        <p className="eyebrow">OctoFit data</p>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      {status === 'loading' && <p className="status-text">Loading {title.toLowerCase()}...</p>}
      {status === 'error' && <p className="alert alert-warning">{error}</p>}

      {status === 'ready' && (
        <div className="resource-grid">
          {items.map((item) => renderItem(item))}
          {items.length === 0 && <p className="status-text">No records available.</p>}
        </div>
      )}
    </section>
  );
}

export default ResourceList;