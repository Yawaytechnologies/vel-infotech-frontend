import {
  FiMenu, FiSearch, FiX, FiBell, FiMessageSquare, FiSettings, FiMoon, FiChevronsLeft, FiChevronsRight
} from "react-icons/fi";
import Logo from "../../assets/infotech.png";

export default function AdminHeader({
  sidebarOpen,
  onToggleSidebar,
  onOpenMobileSidebar,
  onCloseMobileSidebar,
  mobileOpen,
}) {
  return (
    <header className="
      sticky top-0 z-40 bg-white
      flex items-center justify-between h-[72px] px-7
      shadow-md
    ">
      {/* --- LEFT: LOGO & CONTROLS --- */}
      <div className="flex items-center gap-4 h-full">
       <div className="flex items-center h-18">
                   <img
                     src={Logo}
                     alt="Logo"
                     className="h-15 w-auto object-contain"
                   />
                   
                 </div>
        
        {/* Desktop sidebar toggle */}
        <button
          className="hidden md:flex text-2xl text-[#7c6cff] mr-1 items-center justify-center"
          onClick={onToggleSidebar}
        >
          {sidebarOpen ? <FiChevronsLeft /> : <FiChevronsRight />}
        </button>
        
        {/* Mobile hamburger/close */}
        <button
          className="md:hidden text-2xl text-[#7c6cff] mr-1"
          onClick={mobileOpen ? onCloseMobileSidebar : onOpenMobileSidebar}
          aria-label={mobileOpen ? "Close sidebar" : "Open sidebar"}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
        
        {/* Search - desktop only */}
        <div className="ml-8 items-center h-full hidden md:flex">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="pl-12 pr-4 py-2 bg-[#f6f7fb] rounded-xl border-none text-base min-w-[250px] max-w-[400px] outline-none focus:ring-2 focus:ring-[#eceeff]"
              style={{ height: 48 }}
            />
          </div>
        </div>
      </div>
      
      {/* --- RIGHT: PROFILE (mobile) & ICONS (desktop) --- */}
      <div className="flex items-center gap-5">
        {/* Desktop right icons */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-[#7c6cff] hover:bg-[#eceeff] p-2 rounded-full"><FiMoon size={22} /></button>
          <button className="text-[#7c6cff] hover:bg-[#eceeff] p-2 rounded-full relative">
            <FiMessageSquare size={22} />
            <span className="absolute top-1 left-4 text-[11px] bg-[#7c6cff] text-white rounded-full w-5 h-5 flex items-center justify-center font-bold">76</span>
          </button>
          <button className="text-[#7c6cff] hover:bg-[#eceeff] p-2 rounded-full relative">
            <FiBell size={22} />
            <span className="absolute top-1 left-4 text-[11px] bg-[#7c6cff] text-white rounded-full w-5 h-5 flex items-center justify-center font-bold">15</span>
          </button>
          <button className="text-[#7c6cff] hover:bg-[#eceeff] p-2 rounded-full"><FiSettings size={22} /></button>
        </div>
        {/* Profile image (always visible, last right on mobile & desktop) */}
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="avatar"
          className="w-11 h-11 rounded-full object-cover border-2 border-[#eceeff]"
        />
      </div>
    </header>
  );
}
