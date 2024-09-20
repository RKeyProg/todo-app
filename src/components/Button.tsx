import { ButtonType } from '../types'

const Button = ({ children, variant, styles, icon }: ButtonType) => {
	return (
		<button className={`${variant} ${styles}`}>
			{icon && <img src={icon} alt='icon' className='w-7 h-7 object-contain' />}
			{children}
		</button>
	)
}

export default Button
