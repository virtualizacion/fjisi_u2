$(function(){
    
    $('.lightbox').iLightbox({
        type: 'iframe', //'image', 'ajax', 'iframe', 'swf' and 'html'
        loop: true, //loop media
        arrows: true, //show arrows
        closeBtn: true, //show close button
        title: null, //title
        href: "images/home.jpg", //link to media
        content: null, //html content
        beforeShow: function(a, b) {},
        onShow: function(a, b) {},
        beforeClose: function() {},
        afterClose: function() {},
        onUpdate: function(a) {},
        template: {
            container: '<div class="iLightbox-container"></div>',
            image: '<div class="iLightbox-media"></div>',
            iframe: '<div class="iLightbox-media iLightbox-iframe prueba"></div>',
            title: '<div class="iLightbox-details"></div>',
            error: '<div class="iLightbox-error">The requested content cannot be loaded.<br/>Please try again later.</div>',
            closeBtn: '<a href="#" class="iLightbox-close"></a>',
            prevBtn: '<div class="iLightbox-btnPrev"><a href="javascript:;"></a></div>',
            nextBtn: '<div class="iLightbox-btnNext"><a href="javascript:;"></a></div>'
        }
    });

    $(".btnHome5").click(function(event) {
        /*http://jquerymodal.com/*/
    });


    

})/**/