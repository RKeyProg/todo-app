const Header = () => {
	return (
		<div className='flex justify-between items-center'>
			<img src='/assets/logo.svg' alt='logo' />
			<div className='flex items-center gap-6 text-2xl'>
				<p className='text-red font-bold'>Login</p>
				<p>Signup</p>
			</div>
		</div>
	)
}

export default Header
