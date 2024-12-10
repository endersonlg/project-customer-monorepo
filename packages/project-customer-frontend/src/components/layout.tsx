export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="p-8">
      <div
        className={` 
        fixed inset-0 -z-10 bg-soft-green-300 overflow-hidden\
        
        after:contents[''] after:absolute \
        after:-top-60 after:-left-60 after:rotate-45\
        after:w-[46rem] after:h-[46rem] after:rounded-[8rem] after:bg-soft-green-200\

        before:contents[''] before:absolute \
        before:-bottom-60 before:-right-60 before:rotate-45 \
        before:w-[46rem] before:h-[46rem] before:rounded-[8rem] before:bg-soft-green-200`}
      />
      {children}
    </div>
  )
}
