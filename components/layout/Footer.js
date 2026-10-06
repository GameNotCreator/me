export default function Footer() {
  return (
    <footer className="site-footer page-width">
      <a href="#home" className="wordmark">hedi<span>.</span></a>
      <p>© {new Date().getFullYear()} Hedi Fourati</p>
      <a href="https://github.com/GameNotCreator" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    </footer>
  );
}
