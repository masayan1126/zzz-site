export async function SlowComponent() {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  return (
    <div>
      <h1>Slow Component</h1>
      <p>This component is slow to load.</p>
    </div>
  );
}
