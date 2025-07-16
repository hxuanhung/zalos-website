export const Footer = () => {
  return (
    <footer className="w-full px-10 py-6 flex flex-col items-center justify-center text-gray-400 text-sm bg-transparent z-20">
      <div className="flex items-center gap-2 mb-2">
        <span>
          © Zalos AI Limited {new Date().getFullYear()} Zalos. Allrights
          reserved. Zalos Limited is a private limited company incorporated in
          England and Wales with company registration number 16202720 (TBD).
        </span>
      </div>
      <div className="flex gap-4">
        <a href="/terms-and-conditions" className="hover:text-white transition">
          Terms and Conditions
        </a>
        <a href="/privacy-policy" className="hover:text-white transition">
          Privacy Policy
        </a>
        <a href="mailto:info@zalos.io" className="hover:text-white transition">
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
