export default function Navbar() {
  return (
    <nav className="flex min-h-6 flex-row items-center justify-between p-24 bg-red-400">
      <a href="/">Home</a>
      <a href="/menu">Menu</a>
      <a href="/events">Events</a>
      <a href="/merch">Merch</a>
      <a href="/">Contact</a>
    </nav>
  );
}
