'use client';

export default function AnimatedAvatar() {
  return (
    <div
      className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-auto"
      style={{
        animation: 'float 6s ease-in-out infinite',
      }}
    >
      {/* Outer rotating ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 90deg, #2563eb, #06b6d4, #2563eb)',
          animation: 'spin 20s linear infinite',
        }}
      />

      {/* Inner glass circle */}
      <div className="absolute inset-[3px] rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center overflow-hidden">
        {/* Background gradient blob */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(59 130 246 / 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(59 130 246 / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Initials */}
        <div className="relative z-10 text-center">
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-linear-to-br from-blue-600 to-cyan-600 bg-clip-text text-transparent tracking-tight">
            FM
          </span>
        </div>
      </div>

      {/* Decorative orbiting dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ animation: 'spin-reverse 15s linear infinite' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1.5 w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ animation: 'spin 12s linear infinite' }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1.5 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}
