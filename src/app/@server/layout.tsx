export default function ServerComponentsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div>Server side components layout</div>
 
      {children}
    </section>
  )
}