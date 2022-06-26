type Theme = {
  colors: {
    background: string
    textLight: string
    textDark: string
    yellow: string
  }
  gradient: {
    primary: string
  }
}

export const theme: Theme = {
  colors: {
    background: '#272727',
    textLight: '#f4f4f4',
    textDark: '#272727',
    yellow: '#FCB243'
  },
  gradient: {
    primary:
      'background: linear-gradient(294.88deg, #FB7BA2 -1.4%, #FCE043 94.3%)'
  }
}
