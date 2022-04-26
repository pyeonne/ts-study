import * as R from 'ramda'
import {flatMap} from './flatMap'

const array = [1, 2, 3]
R.pipe(
  flatMap(n => [n, n]),
  R.tap(n => console.log(n))
)(array)