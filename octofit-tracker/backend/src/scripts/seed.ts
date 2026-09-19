import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const users = [
  {
    name: 'Mona Octocat',
    email: 'mona@octofit.example',
    age: 34,
    role: 'Team Captain',
    team: 'Repository Runners',
  },
  {
    name: 'Ravi Patel',
    email: 'ravi@octofit.example',
    age: 29,
    role: 'Endurance Coach',
    team: 'Branch Sprinters',
  },
  {
    name: 'Elena Garcia',
    email: 'elena@octofit.example',
    age: 41,
    role: 'Strength Lead',
    team: 'Pull Request Power',
  },
];

const teams = [
  {
    name: 'Repository Runners',
    mascot: 'Lightning Bolt',
    city: 'San Francisco',
    memberCount: 8,
  },
  {
    name: 'Branch Sprinters',
    mascot: 'Trail Blaze',
    city: 'Austin',
    memberCount: 6,
  },
  {
    name: 'Pull Request Power',
    mascot: 'Iron Kettlebell',
    city: 'Seattle',
    memberCount: 7,
  },
];

const activities = [
  {
    userEmail: 'mona@octofit.example',
    type: 'Trail Run',
    durationMinutes: 48,
    caloriesBurned: 520,
    activityDate: new Date('2026-09-17T13:30:00.000Z'),
  },
  {
    userEmail: 'ravi@octofit.example',
    type: 'Interval Cycling',
    durationMinutes: 42,
    caloriesBurned: 610,
    activityDate: new Date('2026-09-18T11:00:00.000Z'),
  },
  {
    userEmail: 'elena@octofit.example',
    type: 'Strength Circuit',
    durationMinutes: 55,
    caloriesBurned: 470,
    activityDate: new Date('2026-09-18T16:15:00.000Z'),
  },
];

const leaderboard = [
  {
    userEmail: 'ravi@octofit.example',
    displayName: 'Ravi Patel',
    team: 'Branch Sprinters',
    points: 1840,
    rank: 1,
  },
  {
    userEmail: 'mona@octofit.example',
    displayName: 'Mona Octocat',
    team: 'Repository Runners',
    points: 1725,
    rank: 2,
  },
  {
    userEmail: 'elena@octofit.example',
    displayName: 'Elena Garcia',
    team: 'Pull Request Power',
    points: 1660,
    rank: 3,
  },
];

const workouts = [
  {
    title: 'Morning Merge Mobility',
    focusArea: 'Mobility',
    difficulty: 'Beginner',
    durationMinutes: 20,
    recommendedFor: ['Recovery days', 'Desk posture'],
  },
  {
    title: 'Sprint Review Intervals',
    focusArea: 'Cardio',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    recommendedFor: ['Endurance building', 'Cycling cross-training'],
  },
  {
    title: 'Release Day Strength',
    focusArea: 'Strength',
    difficulty: 'Advanced',
    durationMinutes: 45,
    recommendedFor: ['Full-body power', 'Team challenge prep'],
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      LeaderboardEntry.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
