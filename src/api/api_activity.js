/**
 * Created by haojun on 2018/7/2.
 */
import * as API from './'

export default {
  data: params=>API.POST('activity/getActivityOverview', params),
  all: (param1)=>API.ALL([
    API.POST('activity/getActivityOverview', param1),
    API.POST('activity/getActivityStateList')
  ])
}



