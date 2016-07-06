import { StyleSheet } from 'aphrodite'

const styles = StyleSheet.create({
  wrapper: {
    float: 'left',
    width: '100%',

    ':before': {
      clear: 'both',
      content: '""',
      display: 'table',
    },

    ':after': {
      clear: 'both',
      content: '""',
      display: 'table',
    },
  },
})

export default styles.wrapper
