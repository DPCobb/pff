$(document).ready(function(){
    $('.film-img').click(function(){
        var showId = $(this).attr('data-display');
        var id = '#'+showId;
        $(id).slideToggle(function(){
            if ($(this).not(':hidden')){
                $('.film-info').not(this).hide();
                $('html, body').animate({
                        scrollTop: $(id).offset().top-200
                    }, 1000);
            }
            else{
                $('.film-info').hide();
                $(id).show();
            }
        })
    });
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery:{enabled:true}
    });
    $('.paramountp').magnificPopup({
        items: {
            src: '<div class="white-popup"><h4>The Paramount Theater</h4><h2>Events</h2><table><thead><tr><th>Time</th><th>Date</th><th>Event</th><th>Info</th></tr></thead><tbody><tr><td>8:00 pm</td><td>May 13</td><td>Screening</td><td>Special Selection: But Not For Me</td></tr><tr><td>12:00 pm</td><td>May 14</td><td>Workshop</td><td>Workshop with Impolite Company</td></tr><tr><td>2 - 6 pm</td><td>May 14</td><td>Screening</td><td>Screening of Official Selections</td></tr><tr><td>8:00 pm</td><td>May 14</td><td>Screening</td><td>Special Selection: La Jaula De Oro</td></tr></tbody></table><a href="location.html#paramount" title="Location Info" target="_blank">More Info</a></div>',
            type: 'inline'
        },
        closeBtnInside: true
    });
    $('.fieldp').magnificPopup({
        items: {
            src: '<div class="white-popup"><h4>Peekskill Coffee House</h4><h2>Events</h2><table><thead><tr><th>Time</th><th>Date</th><th>Event</th><th>Info</th></tr></thead><tbody><tr><td>5:00 pm</td><td>May 15</td><td>Screening</td><td>Official Selection Screening</td></tr></tbody></table><a href="location.html#field" title="Location Info" target="_blank">More Info</a></div>',
            type: 'inline'
        },
        closeBtnInside: true
    });
    $('.hvccap').magnificPopup({
        items: {
            src: '<div class="white-popup"><h4>The Hudson Valley Center For Contemporary Art</h4><h2>Events</h2><table><thead><tr><th>Time</th><th>Date</th><th>Event</th><th>Info</th></tr></thead><tbody><tr><td>12 - 4 pm</td><td>May 15</td><td>Screening</td><td>Screening of Official Selections</td></tr></tbody></table><a href="location.html#hvcca" title="Location Info" target="_blank">More Info</a></div>',
            type: 'inline'
        },
        closeBtnInside: true
    });

    /*---------- Sched More Info Button ----------*/
    $('.more').on('click', function(e){
        e.preventDefault();
        //Get Div ID from data-info
        var targetID = $(this).attr('data-info');
        // Hide other open More Info Divs
        $('.hidden').not(this).hide();
        //Show Target Div
        $('#'+targetID).slideToggle();
    });
    $('.close').on('click', function(e){
        e.preventDefault();
        //Close parent of link.
        $(this).parent().slideUp();
    });

    // ---------- Drop Down ---------- //

    //Function to add hover event
    function addHov(){
        $('.navbar li').hover(function(e){
            //Fade in the children of hover li element
            $(this).children('ul').fadeIn();},
            function(){
                //This stops the menu from adding too many hover events in the queue if someone hovers on/off rapidly
                $('ul',this).stop(true,true).fadeOut();
        });
    }

    //Function to add Click event
    function addClick(){
        //Add click event to smallNav, which replaces the main nav on screens less than 750px
        $('#smallNav li').on('click', function(e) {
            //Use stopPropagation to prevent click from traveling up the DOM and closing entire menu
            e.stopPropagation();
            //Slide toggle children of li item
            $(this).children('ul').slideToggle('slow');
        });
    }

    // Check initial window width and add event handler for Nav
    if($(window).width()>750){
        addHov();
    }
    else{
        addClick();
    }

    // Check window width on resize,remove previous events, and add new event
    $(window).resize(function(e) {
        //Window greater than 750px: remove event and call addHov
        if($(window).width() > 750){
            $('.navbar li').off();
            addHov();
        }
        //Under 750px: remove event and call addClick
        else{
            $('.navbar li').off();
            addClick();
        }
    });
    //Close small Nav if click outside of menu
    $('.cta').on('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        //Slide up menu
        $('.mobile ul').slideUp();
    });
    $('.cta').find('a').on('click', function(e){
        // Stops "discover how you can be a part" click from traveling up DOM to cta event and blocking
        // page direct to join.html
        e.stopPropagation();
    });

    /*---------- Sponsor Info ----------*/
    var sponsorList = [
        {
            "name":"The Paramount Theater",
            "web":"http://paramounthudsonvalley.com/",
            "imageSrc":"paramount.png",
            "class":"lrg"
        },{
            "name":"The Field Library",
            "web":"http://www.peekskill.org/",
            "imageSrc":"field 2.jpg",
            "class":"norm"
        },{
            "name":"Daniel Cobb WebDev",
            "web":"http://www.daniel-cobb.com",
            "imageSrc":"dcfb.png",
            "class":"small"
        },{
            "name":"Westchester Community College",
            "web":"http://www.sunywcc.edu/",
            "imageSrc":"wcc.jpg",
            "class":"norm"
        },{
            "name":"Impolite Company",
            "web":"http://www.impoliteco.com/",
            "imageSrc":"ImpoliteCO.jpg",
            "class":"norm"
        },{
            "name":"Entergy",
            "web":"http://www.entergy.com/",
            "imageSrc":"logo-entergy-reg.gif",
            "class":"norm"
        },{
            "name":"Point Of Order",
            "web":"http://pointoforderproductions.com/",
            "imageSrc":"pointoforder.jpg",
            "class":"norm"
        },{
            "name":"Arthur Weeks and Son",
            "web":"http://www.arthurweeksjewelers.com/",
            "imageSrc":"Arthurweeks.jpg",
            "class":"norm"
        },{
            "name":"Hudson Valley Center for Contemporart Art",
            "web":"http://www.hvcca.org/",
            "imageSrc":"HVCCA.png",
            "class":"norm"
        },{
            "name":"Alchemy Post",
            "web":"http://www.alchemypostsound.com/",
            "imageSrc":"apost.jpg",
            "class":"norm"
        },{
            "name":"Peekskill Coffee House",
            "web":"http://www.peekskillcoffee.com/",
            "imageSrc":"pcoffee.jpg",
            "class":"norm"
        },{
            "name":"Burger Diner",
            "web":"http://burgerdinerpeekskill.com/",
            "imageSrc":"burgerdiner.png",
            "class":"norm"
        },{
            "name":"D. Bertoline & Sons",
            "web":"http://www.dbertolineandsons.com/",
            "imageSrc":"bertolini.jpg",
            "class":"norm"
        },{
            "name":"The Coop Arts & Antiques",
            "web":"none",
            "imageSrc":"coop.png",
            "class":"norm"
        },{
            "name":"Holiday Inn Express and Suites",
            "web":"http://www.ihg.com/holidayinnexpress/hotels/us/en/peekskill/ftmcm/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-USA-_-FTMCM",
            "imageSrc":"holidayinn.png",
            "class":"norm"
        }
    ];
    var sponsorPrint = function(){
        $(sponsorList).each(function(i){
            var sponsor = $(sponsorList)[i];
            if($(sponsorList)[i].web =="none"){
                $('#sponsorArea').append('<div class="sponsorHL"><img src="images/'+sponsor.imageSrc+'" class="'+sponsor.class+'"/><p><h5>'+sponsor.name+'</h5></p></div>');
            }
            else{
            $('#sponsorArea').append('<div class="sponsorHL"><a href="'+sponsor.web+'"><img src="images/'+sponsor.imageSrc+'" class="'+sponsor.class+'"/><p><h5>'+sponsor.name+'</h5></p></a></div>')
            }
        });
    };
    sponsorPrint();
    $('.logo').on('click', function(){
        window.location = 'index.html';
    });
    $('.presented-by').load('footer.html');
});
