/**
 * Created by haojun on 2018/5/22.
 */

let _list = [];
let _hash = Object.create(null);
let _total = 1;
export default class IndexModel {
  constructor()
  {

  }

  update($obj)
  {
    if ($obj['resultPageList'] && $obj['resultPageList']['data'])
    {
      for (let item of $obj['resultPageList']['data'])
      {
        this.add(item);
      }
    }
    if ($obj['resultPageList'] && $obj['resultPageList']['total'])
    {
      _total = $obj['resultPageList']['total'];
    }

  }

  add($item)
  {
    let itemData = createData($item);
    if (!_hash[itemData.id])
    {
      _hash[itemData.id] = itemData;
      _list.push(itemData);
    }
  }

  get list()
  {
    return _list
  }

  get total()
  {
    return _total
  }

  reset()
  {
    _list = [];
    _total = 1;
  }
}

function createData($obj)
{
  var d = {};
  d.id = '';
  d.title = '';
  d.content = '';
  d.time = '';
  d.update = updateData.bind(d);
  d.update($obj);
  return d;
}

function updateData($obj)
{
  $obj.hasOwnProperty('msgTitle') && (this.title = $obj['msgTitle']);
  $obj.hasOwnProperty('msgId') && (this.id = $obj['msgId']);
  $obj.hasOwnProperty('msgContent') && (this.content = $obj['msgContent']);
  $obj.hasOwnProperty('sendTime') && (this.time = $obj['sendTime']);
}

