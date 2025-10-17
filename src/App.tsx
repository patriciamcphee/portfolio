import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './components/UxDesignProjects/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import ContactForm from './components/ContactForm/ContactForm';
import { NotFoundPage } from './pages/NotFoundPage';
import JiraToolkit from './components/JiraToolkit/JiraToolkit';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="project/:projectId" element={<ProjectDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactForm />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/jira-toolkit" element={<JiraToolkit />} />
      </Route>
    </Routes>
  );
}

export default App;