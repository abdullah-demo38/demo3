export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />

      {/* Static gradient orbs */}
      <div className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-electric/20 blur-[120px]" />
      <div className="absolute right-[-10%] top-1/3 h-[600px] w-[600px] rounded-full bg-purple/20 blur-[140px]" />
      <div className="absolute bottom-[-15%] left-1/3 h-[480px] w-[480px] rounded-full bg-cyan/15 blur-[120px]" />

      {/* Noise overlay */}
      <div className="noise" />
    </div>
  );
}
