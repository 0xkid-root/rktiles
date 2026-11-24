import type { Metadata } from 'next'
import { DealerLoginPage } from '@/components/dealer-pages'

export const metadata: Metadata = {
  title: 'Dealer Login | RK Tiles & Sanitary',
  description: 'RK Tiles & Sanitary partner portal sign-in preview.',
}

export default function DealerLoginRoute() {
  return <DealerLoginPage />
}
