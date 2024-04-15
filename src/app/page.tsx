import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { FileUp, LogIn } from "lucide-react";
import FileUpload from "@/components/FileUpload";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold">
              ChatPDF using OpenAI
            </h1>
            <div className="flex flex-col gap-1 justify-center items-center bg-white p-2 rounded-xl">
              <UserButton afterSignOutUrl="/" />
              <span className="text-[0.65rem] text-slate-400 font-semibold p-1 border-2 border-dashed rounded-xl bg-gray-50">
                PeDoFiLe user
              </span>
            </div>
          </div>

          <div className="flex mt-2">
            {isAuth && <Button>Go to Chats</Button>}
          </div>

          <p className="max-w-xl mt-1 text-lg text-slate-800">
            Lorem ipsum imong mama dolor sit amet consectetur adipisicing elit.
            Ut blanditiis, consequuntur earum suscipit accusamus impedit vitae
          </p>

          <div className="w-full mt-4">
            {isAuth ? (
              <FileUpload />
            ) : (
              <Link href="/sign-in">
                <Button>
                  Login to get Started!
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
