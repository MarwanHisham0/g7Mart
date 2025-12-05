import Image from "next/image";
import Link from "next/link";
import Click from "./components/Click/Click";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-8">
      <h1 className="text-4xl font-bold">
        اهلا بك في الصفحة الرئيسية
      </h1>
      <Click />
    </div>
  );
}
