import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import "./globals.css"
// -------- context apis --------
import RegistrationStates from "../context/registration/registrationStates"
import Head from 'next/head'
import LoadingAndAlertStates from '@/context/loadingAndAlert/loadingAndAlertStates'
import ActiveUserAndLoginStatusStates from '@/context/activeUserAndLoginStatus/activeUserAndLoginStatusStates'
import BatchStates from "../context/batch/batchStates"
import App from './App'
import NextTopLoader from 'nextjs-toploader';


export const metadata = {
  title: 'Alumni hub ',
  description: 'This website is designed for students of jyothi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={`${inter.className}`} >
          <LoadingAndAlertStates> {/* TOP priority */}
            <BatchStates>
              <ActiveUserAndLoginStatusStates>
                <RegistrationStates>
                  <NextTopLoader showSpinner={false} />
                  <App>
                    {children}
                  </App>
                </RegistrationStates>
              </ActiveUserAndLoginStatusStates>
            </BatchStates>
          </LoadingAndAlertStates> {/* TOP priority */}
      </body>
    </html>
  )
}
