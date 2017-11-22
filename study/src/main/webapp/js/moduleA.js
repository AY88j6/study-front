/**
 * Created by lichking2015 on 2017/11/21.
 */
define([],function(){
    var say = function(words){
        console.log("in require module say:" + words)
    }
    return{
        say:say
    }
})