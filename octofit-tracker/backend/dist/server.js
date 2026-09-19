"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./config/database");
const models_1 = require("./models");
const app = (0, express_1.default)();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
const allowedOrigins = [
    'http://localhost:5173',
    codespaceName ? `https://${codespaceName}-5173.app.github.dev` : undefined,
].filter((origin) => Boolean(origin));
app.use((0, cors_1.default)({ origin: allowedOrigins }));
app.use(express_1.default.json());
app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok', apiUrl: baseUrl });
});
app.get('/api/users/', async (_request, response) => {
    const users = await models_1.User.find().sort({ name: 1 });
    response.json({ users, apiUrl: `${baseUrl}/api/users/` });
});
app.get('/api/teams/', async (_request, response) => {
    const teams = await models_1.Team.find().sort({ name: 1 });
    response.json({ teams, apiUrl: `${baseUrl}/api/teams/` });
});
app.get('/api/activities/', async (_request, response) => {
    const activities = await models_1.Activity.find().sort({ activityDate: -1 });
    response.json({ activities, apiUrl: `${baseUrl}/api/activities/` });
});
app.get('/api/leaderboard/', async (_request, response) => {
    const leaderboard = await models_1.LeaderboardEntry.find().sort({ rank: 1 });
    response.json({ leaderboard, apiUrl: `${baseUrl}/api/leaderboard/` });
});
app.get('/api/workouts/', async (_request, response) => {
    const workouts = await models_1.Workout.find().sort({ difficulty: 1, title: 1 });
    response.json({ workouts, apiUrl: `${baseUrl}/api/workouts/` });
});
app.listen(port, () => {
    console.log(`OctoFit backend listening at ${baseUrl}`);
});
