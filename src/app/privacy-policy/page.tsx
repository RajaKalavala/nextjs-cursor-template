import { Metadata } from 'next'
import { PrivacyPolicyContent } from './privacy-policy-content'

export const metadata: Metadata = {
  title: 'Privacy Policy - BotikshaAI',
  description:
    'Privacy Policy for BotikshaAI - Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />
}
