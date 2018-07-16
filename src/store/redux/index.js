/**
 * 合并所有 reducer 并返回
 */
import { combineReducers } from 'redux';

import {user} from './user.redux';

export default combineReducers({user})
