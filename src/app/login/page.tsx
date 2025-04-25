import { AuthForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-muted">
      <div className="w-full max-w-sm md:max-w-3xl">
        <AuthForm />
      </div>
    </div>
  )
}
