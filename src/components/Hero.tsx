import Button from './Button'
import Header from './Header'

const Hero = () => {
	return (
		<div className='pt-20'>
			<Header />
			<div className='flex flex-col items-center relative z-20'>
				<h1 className='font-rosario font-bold text-5xl mt-[73px] mb-[40px] w-[50%] text-center'>
					Organizing your day activity with Todo Daily
				</h1>
				<Button variant='filled' styles='text-4xl'>
					Get started
				</Button>
			</div>
			<img
				src='/assets/heroBG.png'
				alt='hero BG'
				className='w-full relative top-[-50px] z-10'
			/>
		</div>
	)
}

export default Hero
