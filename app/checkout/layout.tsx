export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="relative top-16 mx-12">{children}</div>
    </div>
  );
}
