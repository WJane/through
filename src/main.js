'use strict'

import './main.scss'
import $ from 'jquery'
import 'jquery-ui-bundle'

$(function() {

	$('#leading').draggable({
    stop: (event, ui) => {
      console.log(event.target.offsetTop)
    }
  });


})

//碰撞检测
// function collision(){

// }
// const ele = Array.from($('.tube>div'));
// for(var value of ele){
//   console.log(value.offsetTop);
// }



