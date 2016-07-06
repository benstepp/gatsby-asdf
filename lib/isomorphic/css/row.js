import { StyleSheet } from 'aphrodite'
import rem from './rem'
import { config } from 'config'
const GRID_WIDTH = config.grid || 1440

const styles = StyleSheet.create({
  row: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: rem(GRID_WIDTH),
  },
})

export default styles.row
