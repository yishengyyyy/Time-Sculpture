$(document).ready(function(){
    $('.lightmode').click(function(){
        $('body').addClass('light');
        $('body').removeClass('dark');
        
        // $('.darkmode').show();

        // $('.mode').toggleClass('light')
        // $('.darkmode').toggleClass('showdark')
        // $('.haha').toggleClass('lighttext')
       
    })

    $('.darkmode').click(function(){
        $('body').addClass('dark');
        $('body').removeClass('light');
       
        // $('.mode').toggleClass('dark')
        // $('.haha').toggleClass('darktext')
        $('.lightmode').show();
        // $('body').css ({
        //     'background-color' :'white'
        // })
    })


});
