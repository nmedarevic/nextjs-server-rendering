export const CardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-1" >
      {children}
  </div>
}