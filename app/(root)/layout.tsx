import Footer from '@/components/ui/shared/footer';
import Header from '@/components/ui/shared/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="grid grid-rows-2 md:grid-rows-1">
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
}
