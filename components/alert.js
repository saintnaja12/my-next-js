import stylesAlert from '../styles/alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
    return (
        <div
            className={cn({
                [stylesAlert.success]: type === 'success',
                [stylesAlert.error]: type === 'error'
            })}
        >
            {children}
        </div>
    )
}