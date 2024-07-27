export default function Layout({ children }) {
  return (
    <main className="flex h-screen justify-center items-center">
      <div className="w-[300px]">{children}</div>
    </main>
  );
}
