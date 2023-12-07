import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <section className=" flex min-h-screen w-[100%] items-center justify-center border-x-2 border-slate-400 md:w-[80%]">
      <SignIn />
    </section>
  );
};
export default SignInPage;
