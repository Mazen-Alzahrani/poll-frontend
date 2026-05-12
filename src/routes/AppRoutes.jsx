import { Routes, Route } from "react-router-dom";
import CreatePoll from "../pages/CreatePoll";
import VotePoll from "../pages/VotePoll";
import Results from "../pages/Results";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CreatePoll />} />
      <Route path="/poll/:id" element={<VotePoll />} />
      <Route path="/poll/:id/results" element={<Results />} />
    </Routes>
  );
}
