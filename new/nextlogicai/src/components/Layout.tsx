import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-indigo-600">NextLogic</h1>
          <nav className="space-x-6">
            <a href="/" className="hover:text-indigo-600">Home</a>
            <a href="/services" className="hover:text-indigo-600">Services</a>
            <a href="/about" className="hover:text-indigo-600">About</a>
            <a href="/contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center">
          <p>&copy; {new Date().getFullYear()} NextLogic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
