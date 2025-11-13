const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8 border-t border-zinc-700 mt-20 text-center">
      <h1 className="text-2xl font-bold mb-3">Portfolio</h1>
      <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
        <a href="#beranda" className="hover:text-blue-400">Beranda</a>
        <a href="#tentang" className="hover:text-blue-400">Tentang</a>
        <a href="#tools" className="hover:text-blue-400">Tools</a>
        <a href="#project" className="hover:text-blue-400">Project</a>
        <a href="#kontak" className="hover:text-blue-400">Kontak</a>
      </div>
      <p className="mt-4 text-xs opacity-50">
        © {new Date().getFullYear()} twohoursmine. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
