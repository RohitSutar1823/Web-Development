// Make the component async
export default async function Page({ params }) {
  // Await the params promise first
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const languages = ["python", "javascript", "java", "cpp", "cs"];

  if (languages.includes(slug)) {
    return <div>My Post: {slug}</div>;
  } else {
    return <div>Post not found</div>; // Or trigger your notFound()
  }
}