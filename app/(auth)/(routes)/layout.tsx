import {Logo} from "@/components/Logo";

function layoutAuth({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center h-full items-center">
      <Logo/>
      <h1 className="text-3xl my-2">Welcome to event management</h1>
      <h1 className="text-3xl my-2">for your company</h1>
      {/* <h2 className="text-2xl mb-3">JuanesCode</h2> */}
      {children}
    </div>
  );
}

export default layoutAuth;
