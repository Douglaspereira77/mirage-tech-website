import { Metadata } from 'next'
import { ArrowRight, Star, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Review Mirage Tech AI on Google',
  description: 'Help us grow by leaving a review on our Google Business Profile.',
}

export default function ReputationPage() {
  const gbpReviewLink = "https://search.google.com/local/writereview?placeid=ChIJBx3mP_mOzhUR79S06K7h6Sg" // Placeholder: User should update with actual Place ID

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-background pt-32 pb-20">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <div className="mb-8 flex justify-center">
          <div className="bg-primary/10 p-4 rounded-full">
            <Star className="h-12 w-12 text-primary fill-primary" />
          </div>
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-chart-2">
          Your Feedback Matters
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          At Mirage Tech, we are on a mission to automate 1,000 businesses in Kuwait. 
          Your honest review helps other local business owners find the AI edge they need.
        </p>

        <div className="space-y-6">
          <a 
            href={gbpReviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between w-full p-8 rounded-3xl bg-white dark:bg-card border-2 border-primary/20 hover:border-primary shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-left">
              <span className="block text-xs font-bold uppercase tracking-widest text-primary mb-1">Step 1</span>
              <span className="text-2xl font-bold block">Rate us on Google Maps</span>
              <span className="text-sm text-muted-foreground">It takes less than 30 seconds.</span>
            </div>
            <div className="bg-primary text-primary-foreground p-3 rounded-2xl group-hover:scale-110 transition-transform">
              <ExternalLink className="h-6 w-6" />
            </div>
          </a>

          <div className="grid grid-cols-3 gap-2 py-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-1 bg-primary/20 rounded-full" />
            ))}
          </div>

          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            Already reviewed? <a href="/contact" className="text-primary font-bold hover:underline">Message us for a direct referral reward</a> <ArrowRight className="h-4 w-4" />
          </p>
        </div>
      </div>
    </div>
  )
}
