import { Navbar } from '@/components/docs/navbar'
import { Footer } from '@/components/docs/footer'
import { FeedbackDashboard } from '@/components/custom/feedback-dashboard/feedback-dashboard'

export const metadata = {
  title: 'Feedback Dashboard',
  description: 'View and analyze page-level feedback from documentation readers.',
}

export default function FeedbackDashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12" style={{ marginTop: 'var(--navbar-height)' }}>
        <FeedbackDashboard />
      </main>
      <Footer />
    </div>
  )
}
