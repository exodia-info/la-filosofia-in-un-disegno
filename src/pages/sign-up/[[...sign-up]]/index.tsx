import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <section className=" flex min-h-screen w-[100%] items-center justify-center border-x-2 border-slate-400 md:w-[80%]">
      <SignUp />
    </section>
  );
};
export default SignUpPage;
