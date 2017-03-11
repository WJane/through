'use strict'

import './main.scss'
import $ from 'jquery'
import 'jquery-ui-bundle'

$(function() {
  const ele = Array.from($('.tube>div'));
  const leading = document.getElementById('leading');
  // alert($('#leading')[0].offsetLeft + '  '+ $('#leading')[0].offsetTop)
  // alert($('#ee')[0].offsetLeft+'  '+$('#ee')[0].offsetTop)

	$('#leading').draggable({

    //拖动过程，监听碰撞事件
    drag: (event,ui) => {
      for(var value of ele){
        collision(event.target,value)
      }
    },

    stop: (event, ui) => {
      // var height = event.target.offsetTop;
      // var speed;
      // var timer = setInterval(function() {
      //   speed+=10;
      //   event.target.offsetTop
      // })
    }
  });


})

//碰撞检测
function collision(tar, tube){
  var ta = tar.getBoundingClientRect(),
      tu = tube.getBoundingClientRect(),
      ta_top = ta.top,
      ta_left = ta.left,
      ta_right = ta.right,
      ta_bottom = ta.bottom,
      //!!!!!
      tu_top = tu.top,
      tu_left = tu.left,
      tu_right = tu.right,
      tu_bottom = tu.bottom;

      if(ta_right<tu_left||ta_left>tu_right||ta_bottom<tu_top||ta_top>tu_bottom){
        //如果没碰到

      }else {
        alert('game over')
      }


}




