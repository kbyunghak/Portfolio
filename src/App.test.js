import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { featuredProjects } from './data/projectData';

beforeEach(() => {
  window.location.hash = '#/';
});

test('renders the portfolio identity and navigates to a case study', async () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Andrew Kim', level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#/projects');
  expect(screen.getAllByRole('link', { name: 'Resume' })[0]).toHaveAttribute(
    'href',
    '/documents/Andrew_Kim_Resume.pdf'
  );

  fireEvent.click(screen.getByRole('link', { name: 'Projects' }));
  expect(await screen.findByRole('heading', { name: 'Featured case studies' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Interactive Pronunciation Trainer' })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('link', { name: 'Read Industrial Data Ingestion & Monitoring case study' }));
  expect(await screen.findByRole('heading', { name: 'Business problem' })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: 'Industrial telemetry ingestion and recovery data flow' })).toBeVisible();
  expect(screen.getByRole('link', { name: 'View full-size diagram: Industrial telemetry ingestion and recovery data flow' })).toHaveAttribute('target', '_blank');
});

test('renders every featured project', async () => {
  window.location.hash = '#/projects';
  render(<App />);

  for (const project of featuredProjects) {
    expect(await screen.findByRole('heading', { name: project.title })).toBeInTheDocument();
  }
});

test('redirects an unknown project to the projects page', async () => {
  window.location.hash = '#/projects/not-a-project';
  render(<App />);

  expect(await screen.findByRole('heading', { name: 'Featured case studies' })).toBeInTheDocument();
  await waitFor(() => expect(window.location.hash).toBe('#/projects'));
});

test('redirects an unknown route to home', async () => {
  window.location.hash = '#/not-a-page';
  render(<App />);

  expect(await screen.findByRole('heading', { name: 'Andrew Kim', level: 1 })).toBeInTheDocument();
  await waitFor(() => expect(window.location.hash).toBe('#/'));
});

test('uses the About route and preserves the old resume route as a redirect', async () => {
  window.location.hash = '#/resume';
  render(<App />);

  expect(await screen.findByRole('heading', { name: 'Building dependable software for operational environments' })).toBeInTheDocument();
  await waitFor(() => expect(window.location.hash).toBe('#/about'));
});
