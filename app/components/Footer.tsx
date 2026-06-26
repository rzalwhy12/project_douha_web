export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#113B7A] py-12 md:py-16 text-white border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        
        {/* Left/Main Column: Text content */}
        <div className="flex flex-col gap-8 flex-grow">
          
          <div>
            <h4 className="font-bold mb-1 text-base md:text-lg">Head Office :</h4>
            <p className="text-gray-200 text-sm md:text-base">
              Jalan Metropol Megah no 04 , Sumbergempol , Tulungagung , 66291 Jawa Timur
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-1 text-base md:text-lg">Contact :</h4>
            <p className="text-gray-200 text-sm md:text-base flex flex-col">
              <span>0857 – 4647 – 8187 (whatsapp)</span>
              <span>Email : douhakonstruksi@gmail.com</span>
              <span>Instagram : douha.konstruksi</span>
              <span>Facebook : Douha Konstruksi</span>
              <span>Tiktok : douha konstruksi</span>
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-1 text-base md:text-lg">Area Layanan :</h4>
            <p className="text-gray-200 text-sm md:text-base">
              Tulungagung . Kediri . Blitar . Trenggalek (diluar hal area tsb hubungi contact)
            </p>
          </div>

        </div>
        
        {/* Right Side: Logo & Navigation */}
        <div className="shrink-0 flex flex-col items-start md:items-end w-full md:w-auto gap-6 md:border-l md:border-white/20 md:pl-10">
          <img 
            src="/logo/DOUHA KONSTRUKSI putih.png" 
            alt="Douha Konstruksi Logo" 
            className="w-40 md:w-48 object-contain"
          />
          <div className="flex flex-col items-start md:items-end gap-3 mt-4">
            <a href="/portfolio" className="font-bold tracking-wide hover:text-[#FFB800] transition-colors">Portfolio</a>
            <a href="/#layanan" className="font-bold tracking-wide hover:text-[#FFB800] transition-colors">Layanan</a>
            <a href="https://wa.me/6285746478187" className="font-bold tracking-wide hover:text-[#FFB800] transition-colors" target="_blank" rel="noopener noreferrer">Kontak</a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Text */}
      <div className="mt-16 pt-6 border-t border-white/20 text-center flex flex-col gap-1 items-center justify-center text-xs text-gray-300 px-6">
        <p>Copyright © {currentYear} Douha Konstruksi. All rights reserved.</p>
      </div>
    </footer>
  );
}
