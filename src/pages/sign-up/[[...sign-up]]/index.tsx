import { SignUp } from '@clerk/nextjs';

const SignUpPage = () => {
  return (
    <section className=' flex items-center justify-center w-[100%] min-h-screen md:w-[80%] border-x-2 border-slate-400'>
      <SignUp />
      </section>
  );
};
export default SignUpPage;