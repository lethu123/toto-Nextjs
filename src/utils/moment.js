/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email tientran0019@gmail.com
* Phone 0972970075
*
* Created: 2020-03-23 16:47:02
*------------------------------------------------------- */
import relativeTime from 'dayjs/plugin/relativeTime';

import dayjs from 'dayjs';

dayjs.locale('en');

dayjs.extend(relativeTime);

export default dayjs;
