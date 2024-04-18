const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <main className="flex h-screen w-full items-center justify-center">{children}</main>
}

export default AuthLayout
