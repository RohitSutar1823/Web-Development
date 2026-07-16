// Make the component async
export default async function Page({ params }) {
  // Await the params promise before logging or using it
  const resolvedParams = await params;
  console.log(resolvedParams); 

  return <div>I am about page check console</div>;
}