export default function Footer() {
  return (
    <footer className="px-8 py-10 bg-[#0A0F1F] border-t border-[#1E2A3A] flex flex-col md:flex-row justify-between items-center gap-4">
      <span className="text-[#888888] text-sm">
        © 2026 SerStack. All rights reserved.
      </span>
      <div className="flex gap-6 text-[#888888] text-sm">
        <a href="https://instagram.com/ser_stack" target="_blank" className="hover:text-[#00DFFF] transition-colors">
          Instagram
        </a>
        <a href="https://tiktok.com/@serstack" target="_blank" className="hover:text-[#00DFFF] transition-colors">
          TikTok
        </a>
        <a href="https://wa.me/573128036725" target="_blank" className="hover:text-[#00DFFF] transition-colors">
          WhatsApp
        </a>
      </div>
    </footer>
  )
}