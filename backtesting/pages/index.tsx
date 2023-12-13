import Image from 'next/image'
import BackTesting from '@/components/BackTesting'
import CustomDate from '@/components/CustomDate'
import Resolution from '@/components/Resolution'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <BackTesting/>
      <CustomDate title={'From'}/>
      <CustomDate title={'To'}/>
      <Resolution/>
    </div>
  )
}
