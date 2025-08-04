import Image from 'next/image'
import Button from './Button'

export const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h1 className='capitalize bold-40 lg:bold:64 xl:max-w-[320px]'>get for free now!</h1>
          <p className='capitalize regular-16 text-gray-10'>available on IOS and Android, Download now!</p>
        <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
        <Button
        icon='/apple.svg'
        title='App Store'
        type='button'
        variant='btn_white'
        full='true'
        />
        <Button
        icon='/android.svg'
        title='Play Store'
        type='button'
        variant='btn_dark_green_outline'
        full='true'
        />
        </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}
