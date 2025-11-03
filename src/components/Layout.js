import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-purple-500/20 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <p className="text-purple-200 text-sm">
              © {new Date().getFullYear()} Studio Innovate Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}