import React from 'react'
import classNames from 'classnames'

const colorMap = {
  primary:
    'inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-700 hover:bg-blue-900',
  error: 'bg-error hover:bg-error/80 text-white',
}

interface ButtonProps extends React.ComponentProps<'button'> {
  icon?: boolean
  children: React.ReactNode
  color?: 'primary' | 'error'
}

function Button(props: ButtonProps) {
  const { children, color = 'primary', className, ...otherProps } = props
  return (
    <button
      type='button'
      {...otherProps}
      className={classNames(
        className,
        'disabled:shadow-none hover:shadow-lg hover:bg-primary-dark active:shadow-none active:translate-y-[2px] transform-gpu rounded-lg transition-all flex items-center',
        colorMap[color],
        'rounded-lg'
      )}
    >
      {children}
    </button>
  )
}

export default Button
