/**
 * Created by haojun on 2018/8/3.
 */
var Client = require('ftp');
var path = require('path');
var fs = require('fs');

var c = new Client();
var ftp_path = 'test/'
var connectionProperties = {
  host: "192.168.12.250",
  user: "huanwu",
  password: "huanwu"
};


const root = path.resolve(__dirname, '../dist');
const files = [];
//递归取出所有文件夹下所有文件的路径
function readDirSync(p)
{
  const pa = fs.readdirSync(p);
  pa.forEach((e) =>
  {
    const cur_path = `${p}/${e}`;
    const info = fs.statSync(cur_path);
    if (info.isDirectory())
    {
      readDirSync(cur_path);
    }
    else
    {
      files.push(cur_path);
    }
  });
}

readDirSync(root);

c.on('ready', function() {
  console.log(`文件总数量:${files.length}`);
  c.put('/Users/HaoJun/Desktop/webstorm/vue/vue-v2-pro/dist/index.html','hjai/index.html', function (err) {
    if (err) throw err;
    c.end();
  });

//  files.forEach(function (filename) {
//    console.log(filename.replace(root,''))
//    (function (filename) {
//      c.put(filename,'hjai'+filename.replace(root,''), function (err) {
//        if (err) throw err;
//        c.end();
//      });
//    })(filename)
//  });
});

c.connect(connectionProperties);


