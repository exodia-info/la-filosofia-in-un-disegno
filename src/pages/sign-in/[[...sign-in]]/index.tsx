import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    
    <section className=' flex items-center justify-center w-[100%] min-h-screen md:w-[80%] border-x-2 border-slate-400'>
      <SignIn />
      </section>
    
  );
};
export default SignInPage;