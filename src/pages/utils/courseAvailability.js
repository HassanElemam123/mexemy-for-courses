export function isCourseComingSoon(course = {}) {
  const statusText = [
    course.status,
    course.releaseStatus,
    course.availability,
    course.courseStatus,
    course.badge,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  return Boolean(
    course.isComingSoon === true ||
      course.comingSoon === true ||
      course.isAvailable === false ||
      course.available === false ||
      course.canAddToCart === false ||
      statusText.includes("coming soon") ||
      statusText.includes("coming_soon") ||
      statusText.includes("upcoming")
  );
}

export function getCourseBadge(course = {}) {
  if (isCourseComingSoon(course)) return "Coming Soon";
  return course.level || "Beginner";
}