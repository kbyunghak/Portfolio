import { featuredProjects, findProjectBySlug } from './projectData';

test('featured projects have unique slugs and complete case-study data', () => {
  const slugs = featuredProjects.map((project) => project.slug);

  expect(new Set(slugs).size).toBe(slugs.length);

  featuredProjects.forEach((project) => {
    expect(project.title).toBeTruthy();
    expect(project.organization).toBeTruthy();
    expect(project.problem).toBeTruthy();
    expect(project.responsibilities.length).toBeGreaterThan(0);
    expect(project.challenges.length).toBeGreaterThan(0);
    expect(project.decisions.length).toBeGreaterThan(0);
    expect(project.outcomes.length).toBeGreaterThan(0);
    expect(project.technologies.length).toBeGreaterThan(0);
    expect(project.highlights.length).toBeGreaterThan(0);
    expect(project.images.length).toBeGreaterThan(0);
    expect(findProjectBySlug(project.slug)).toBe(project);
  });
});

test('findProjectBySlug returns undefined for an unknown project', () => {
  expect(findProjectBySlug('not-a-project')).toBeUndefined();
});
