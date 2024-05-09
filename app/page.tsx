import { SignInButton, SignOutButton} from "@/components/sign-in";
import { auth } from "@/auth";
export default async function Home() {
  const session = await auth();

  return (
    <main className="flex items-center justify-center space-x-10">
    
       
       {session?.user && <p>{session.user.name}</p>}
       {session?.user ? <SignOutButton /> : <SignInButton /> }
      </main>
  );
}
