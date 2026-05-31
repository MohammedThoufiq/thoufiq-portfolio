const cache = new Map<string, number>();

export function isDuplicateSubmission(
  submissionId: string
) {
  const existing =
    cache.get(submissionId);

  if (existing) {
    return true;
  }

  cache.set(
    submissionId,
    Date.now()
  );

  return false;
}