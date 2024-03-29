type IconProps = {
  color: string
}

function Icon({ color }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
    >
      <path
        fill={color}
        d="M28 14c0 7.732-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0s14 6.268 14 14zm-15.62 7.413l10.388-10.387a.903.903 0 000-1.278L21.49 8.471a.903.903 0 00-1.277 0l-8.471 8.471-3.955-3.955a.903.903 0 00-1.277 0l-1.278 1.277a.903.903 0 000 1.278l5.871 5.87a.903.903 0 001.278 0z"
      ></path>
    </svg>
  )
}

export default Icon
