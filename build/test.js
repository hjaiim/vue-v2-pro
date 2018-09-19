const fs = require("fs");
const needle = require('needle');
const path = require('path');
const config = require('../config');
const chalk = require('chalk');
const FilePath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

function fileDisplay(filePath) {
  //根据文件路径读取文件，返回文件列表  
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err)
    } else {
      //遍历读取到的文件列表  
      files.forEach(function (filename) {
        //获取当前文件的绝对路径  
        var filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象  
        fs.stat(filedir, function (eror, stats) {
          if (eror) {
            console.warn('获取文件stats失败');
          } else {

            var isFile = stats.isFile(); //是文件  
            var isDir = stats.isDirectory(); //是文件夹  
            if (isFile) {
              upload({
                filePath: filedir,
                filename,
                url: filedir.replace(FilePath, "").replace(/\\/g, "\/")
              }, function (data) {
                console.log(chalk.green(
                  ' 上传成功=>' + filedir
                ))
              })
            }
            if (isDir) {
              fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件  
            }
          }
        })
      });
    }
  });
}



function upload(option, fn) {
  var mimes = {
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.js': 'application/javascript',
    '.css': 'text/css',
  };
  var ext = path.extname(option.filename);
  var mime = mimes[ext] || "text/plain";
  var data = {
    file: {
      file: option.filePath,
      content_type: mime
    }
  }
  var fileTo = "/oss/hr_res/pc/static";
  // var url = `http:\/\/kaifa.jianbing.com/res/receiver2.php?to=${fileTo}` + option.url;
  var url = `http:192.168.12.250/`;
  needle.post(url, data, {
    multipart: true
  }, function (err, resp, body) {
    if (err) {
      console.log(err)
    } else {
      console.log(body);
    }
    // fn(body)
  });
}
fileDisplay(FilePath);
