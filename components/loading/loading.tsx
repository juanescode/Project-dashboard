export function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-3 gap-4">
        <div className="w-12 h-12 bg-primary animate-[spin_1s_linear_infinite]" />
        <div className="w-12 h-12 bg-primary animate-[spin_2s_linear_infinite_reverse]" />
        <div className="w-12 h-12 bg-primary animate-[spin_1.5s_linear_infinite]" />
        <div className="w-12 h-12 bg-primary animate-[spin_1s_linear_infinite]" />
        <div className="w-12 h-12 bg-primary animate-[spin_2s_linear_infinite_reverse]" />
        <div className="w-12 h-12 bg-primary animate-[spin_1.5s_linear_infinite]" />
      </div>
    </div>
  );
}
