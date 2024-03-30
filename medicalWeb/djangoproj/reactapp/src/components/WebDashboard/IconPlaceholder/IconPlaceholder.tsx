import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconPlaceholder.module.css';

interface Props {
  className?: string;
}
/* @figmaId 29:3646 */
export const IconPlaceholder: FC<Props> = memo(function IconPlaceholder(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.base}></div>
      <div className={classes.base2}></div>
      <div className={classes.base3}></div>
      <div className={classes.base4}></div>
    </div>
  );
});
