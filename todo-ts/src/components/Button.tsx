type button={
    children:JSX.Element|string;
    className?:string;
    onClick?: () => void;
}
export const Button = ({children,className, onClick}:button) => {
  return (
    <button className={className} onClick={onClick} type="submit">{children}</button>
  )
}
