import { SignUpForm } from "@/components/signup-form";

export const RegisterPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <SignUpForm />
      </div>
    </div>
  );
};
