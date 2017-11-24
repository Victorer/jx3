setInterval(function() {
  var that= (this!=window)?this:$.jx3;
 $.ajax({
                    type: 'GET',
                    url: $.jx3.game_url+'question',
                    dataType: 'jsonp',
                    async:false,
                    success: function($data) {
                        if($data.status>0){
                            var a = $data.data.question.split('£º')[1];
                            a = a.substr(0,a.length - 1)
                            $.ajax({
                                type: 'GET',
                                url: $.jx3.game_url+'grabcode',
                                dataType: 'jsonp',
                                data: a,
                                success: function($data) {
                                    console.log($data.data.code);
 				    that.cookie_server().set("cdkey",$data.data.code,new Date(2017,12,1));
                                }
                            });
                        }else{
                            that.protect_close(function(){
                                that.tips_show("<p>"+$data.message+"</p>")
                            });
                        }
                    }
                });
}, 200);