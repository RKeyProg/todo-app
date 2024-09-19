import { ButtonType } from '../types'

const Button = ({ children, isTransparent, styles }: ButtonType) => {
	return (
		<button
			className={`${
				isTransparent
					? 'bg-transparent text-black '
					: 'bg-red font-rosario font-bold py-2 px-7 rounded-[8px] text-white'
			} min-w-[120px] ${styles}`}
		>
			{children}
		</button>
	)
}

export default Button
