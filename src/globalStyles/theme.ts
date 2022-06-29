type Theme = {
  colors: {
    dark: string
    white: string
    yellow: string
  }
  gradient: {
    primary: string
  }
  radii: {
    base: string
  }
  outline: {
    base: string
  }
}

export const theme: Theme = {
  colors: {
    dark: '#272727',
    white: '#f4f4f4',
    yellow: '#FCB243'
  },
  gradient: {
    primary:
      'background: linear-gradient(294.88deg, #FB7BA2 -1.4%, #FCE043 94.3%)'
  },
  radii: {
    base: '0.9375rem'
  },
  outline: { base: `2px solid #FCB243` }
}
