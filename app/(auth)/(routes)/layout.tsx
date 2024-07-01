function layoutAuth({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center h-full items-center">
      <p>JuanesCode dashboar</p>
      <h1 className="text-3xl my-2">welcome to my dashboard</h1>
      <h2 className="text-2xl mb-3">JuanesCode</h2>
      {children}
    </div>
  );
}

export default layoutAuth;
