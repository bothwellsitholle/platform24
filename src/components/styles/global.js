import { makeStyles } from '@material-ui/core/styles'
import { Theme } from './Theme'

// const yellow = '#ffd300'
// const tangerine = '#ff9200'
// const cloudyBlue = '#cad7dd'

const button = {
  width: '100%',
  textTransform: 'uppercase',
  height: 45,
  borderRadius: 4,
  borderWidth: 0,
  marginLeft: 20,
  marginTop: 10,
  marginBottom: 5,
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.3,
  },
}

const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
    textTransform: 'uppercase',
    height: 50,
    borderRadius: 4,
    borderWidth: 0,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 5,
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.3,
    },
    [theme.breakpoints.up('md')]: {
      width: 130,
    },
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 70,
    paddingBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 20,
    },
  },

  primaryBtn: {
    ...button,
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
    backgroundColor: Theme.blueGreen,
    color: Theme.white,
  },

  secondaryBtn: {
    ...button,
    [theme.breakpoints.up('sm')]: {
      width: 150,
    },
    backgroundColor: Theme.paleGrey,
  },

  rotateBtn: {
    transform: 'rotate(-90deg)',
    [theme.breakpoints.up('md')]: {
      transform: 'rotate(180deg)',
    },
  },

  arrowMainWrapper: {
    transform: 'rotate(90deg)',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: Theme.charcoalGrey,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    margin: 20,
    transition: 'all 0.5s',
    '&:hover': {
      opacity: 0.3,
    },

    [theme.breakpoints.up('md')]: {
      transform: 'rotate(0deg)',
    },
  },

  subtitle: {
    fontSize: 17,
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 430,
    width: '80%',
    textAlign: 'center',
    lineHeight: 1.7,
    color: Theme.charcoalGrey,
  },

  paragraph: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 60,
    fontWeight: 400,
    width: '100%',
    lineHeight: 1.7,
    color: Theme.charcoalGrey,
  },

  title: {
    fontSize: 28,
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
    color: Theme.charcoalGrey,
  },

  rightToLeft: {
    transform: 'translateX(100%)',
  },
}))

export default useStyles
