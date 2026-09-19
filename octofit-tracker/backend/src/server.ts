import express from 'express';
import './config/database';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiUrl: baseUrl });
});

app.get('/api/users/', async (_request, response) => {
  const users = await User.find().sort({ name: 1 });

  response.json({ users, apiUrl: `${baseUrl}/api/users/` });
});

app.get('/api/teams/', async (_request, response) => {
  const teams = await Team.find().sort({ name: 1 });

  response.json({ teams, apiUrl: `${baseUrl}/api/teams/` });
});

app.get('/api/activities/', async (_request, response) => {
  const activities = await Activity.find().sort({ activityDate: -1 });

  response.json({ activities, apiUrl: `${baseUrl}/api/activities/` });
});

app.get('/api/leaderboard/', async (_request, response) => {
  const leaderboard = await LeaderboardEntry.find().sort({ rank: 1 });

  response.json({ leaderboard, apiUrl: `${baseUrl}/api/leaderboard/` });
});

app.get('/api/workouts/', async (_request, response) => {
  const workouts = await Workout.find().sort({ difficulty: 1, title: 1 });

  response.json({ workouts, apiUrl: `${baseUrl}/api/workouts/` });
});

app.listen(port, () => {
  console.log(`OctoFit backend listening at ${baseUrl}`);
});