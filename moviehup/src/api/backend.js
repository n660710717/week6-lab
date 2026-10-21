export async function getMovie(movieId) {
  const items = await getMovies();
  const movie = items.find(m => String(m.id) === String(movieId));
  if (!movie) {
    const err = new Error('ไม่พบหนังเรื่องนี้');
    err.status = 404;
    throw err;
  }
  return movie;
}