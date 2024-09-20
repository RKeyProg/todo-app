import Button from './Button'

const Header = () => {
	return (
		<div className='flex justify-between items-center'>
			<a href='/'>
				<img src='/assets/logo.svg' alt='logo' />
			</a>
			<div className='flex items-center gap-6 text-2xl'>
				<Button variant='transparent' styles='text-2xl text-red'>
					Login
				</Button>
				<Button variant='transparent' styles='text-2xl text-black'>
					Signup
				</Button>
			</div>
		</div>
	)
}

export default Header
