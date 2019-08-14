import $ from 'jquery'

var $lis = $('#list li')

$lis.filter(':odd').css('backgroundColor', 'skyblue');
$lis.filter(':even').css('backgroundColor', 'yellow');

// 处理css文件

import './css/index.css'

// 处理 scss 文件

import './scss/index.scss'

// 处理字体文件

import './font/iconfont.css'