import './globals.css'
import Layout from '../components/Layout'

export const metadata = {
  title: 'Startup Studio',
  description: 'Building Tomorrow, One Experiment at a Time',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}