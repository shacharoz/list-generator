jQuery(document).ready(function (e) {
    
    /* trying to create an general data object that can be easily extended  */
    var ItemDataFormat = function() {
     
        var _imagePath="";
        var image = function(){ return _imagePath; };
        
    }
     
    var workEnvironment_SliderContent = 
    {
        items: 
        [
            {
                image : "img/omek-studio.png"
                , title: "Omek interactive studio" 
                , description: "obligated and loyal. team worker and highly independant."
                , link:"http://www.omekinteractive.com"
            }
            ,{
                image : "img/omek-studio-playtime.jpg"
                , title: "Omek interactive studio"
                , description: 'we call that "RnD"...'
                ,link:"http://www.teamfortress.com"
             }
            ,{
                image : "img/omek-studio-purim.jpg"
                , title: "Omek interactive studio"
                , description: 'Purim holiday'
                ,link:"#"
             }
            ,{
                image : "img/omek-adventurepark_croud.jpg"
                , title: 'Omek Adventure Park'
                , description: "China is playing our game!"
                ,link:"http://www.eedoo.cn/"
             }
            ,{
                image : "img/musikritical.jpg"
                , title: "IDHO 2008"
                , description: "preparing project musicritical for presetation"
                ,link:"http://interaction.hit.ac.il/"
             }
            
        ]
                       
    }
    
    var volunteering_SliderContent = 
    {
        items: 
        [
            {
                image : "img/graduation-2010-speaking.jpg"
                , title: "Member of graduates committee"
                , description: "of the instructional design department at HIT"
                ,link:"https://www.facebook.com/groups/Telem.Graduates/"
             }
            ,{
                image : "img/karmit-boarding-teaching.jpg" 
                , title: "Educational boarding residence" 
                , description: "While my wife worked as a group leader at Ein Karmit bording residence, I worked there as a tutor for maths and english. Living there, talking to these kids every day, was an experience I will never forget." 
                ,link:"http://www.kidum-edu.org.il/en/education-campuses/carmit"
            }
            ,{
                image : "img/karmit-boarding-liron.jpg" 
                , title: "Educational boarding residence" 
                , description: "While my wife worked as a group leader at Ein Karmit bording residence, I worked there as a tutor for maths and english. Living there, talking to these kids every day, was an experience I will never forget." 
                ,link:"http://www.kidum-edu.org.il/en/education-campuses/carmit"
            }
            ,{
                image : "img/garin-esh2.jpg"
                , title: "Nahal group" 
                , description: "volunteered in a Kibuts for a year before the army as part of Nahal Group from the israeli nature conservation society. this is where i first met my future wife."
                ,link:"http://en.wikipedia.org/wiki/Nahal_group"
            }
            ,{
                image : "img/garin-esh4.jpg"
                , title: "Nahal group" 
                , description: "volunteered in a Kibuts for a year before the army as part of Nahal Group from the israeli nature conservation society. this is where i first met my future wife."
                ,link:"http://en.wikipedia.org/wiki/Nahal_group"
            }
            ,{
                image : "img/using-ar-games-classroom3.jpg"
                , title: "Using games in education" 
                , description: "community lead contributor"
                ,link:"https://www.facebook.com/pages/%D7%A9%D7%99%D7%9C%D7%95%D7%91-%D7%9E%D7%A9%D7%97%D7%A7%D7%99%D7%9D-%D7%91%D7%97%D7%99%D7%A0%D7%95%D7%9A/410202585745106"
            }
            ,{
                image :"img/psagot-logo.jpg"
                , title: "Psagot Youth group"
                , description: "during high school i took part in the creation of an entirely new youth group for kids."
                ,link:"https://www.facebook.com/Psagot"
            }/*
            ,{
                image :""
                , title: "Cloths and appliances" 
                , description: "my wife and i organize cloths and appliances to the needy from all our close friends and family."
                ,link:"#"
            }*/
        ]
                       
    }
        
     var articles_SliderContent = 
    {
        items: 
        [
            {
                        
                image : "img/omek-arc-menu.jpg"
                , title: "Designing a practical ui for a gesture-based interface: the arc menu" 
                , description: "with Yaron Yanai, at Omek"
                ,link:"http://www.omekinteractive.com/blog/designing-the-practical-ui/"
            }
            ,{
                image : "img/ninjump.jpg"
                , title: "Ninjump: addictive one-click game" 
                , description: "UX-tech blog"
                ,link:"http://ar-ui.blogspot.co.il/2011/07/ninjump.html"
             }
            ,{
                image : "img/student-copy-article.jpg"
                , title: "Why did you give me an F? I copied this right out of Wikipedia!" 
                , description: "Why students copy from the web? How to deal with this in the open-knowledge era?"
                ,link:"http://os-constructivism.blogspot.co.il/2013/06/student-copy-paste.html" 
            }
            ,{
                image : "img/diamond-dash-article.png"
                , title: "Diamond Dash: great instructional design for the onboard phase" 
                , description: "how the game design builds up the features of the gameplay"
                ,link:"http://ar-ui.blogspot.co.il/2013/10/diamond-dash-great-instructional-design.html" 
            }
            ,{  
                image :"img/omek_grasp_ui.jpg"
                , title: "Omek at CES 2013" 
                , description: "market review of the close ranged depth sensors"
                ,link:"http://ar-ui.blogspot.co.il/2013/01/omek-ces-2013.html" 
            }
            ,{
                image :"img/jetpack-joyride-article.jpg"
                , title: "Jetpack Joyride: design challenges" 
                , description: "game review"
                ,link:"http://ar-ui.blogspot.co.il/2013/02/jetpack-joyride.html" 
            }
            ,{
                image :"img/opensource.gif"
                , title: "Dev kit for Augmented reality on smart phones" 
                , description: "at UX-tech blog"
                ,link:"http://ar-ui.blogspot.co.il/2011/04/blog-post_11.html" 
            }
            ,{
                image :"img/iterative_dev_process.png"
                , title: "Rapid prototyping" 
                , description: "at UX-tech blog"
                ,link:"http://ar-ui.blogspot.co.il/2012/10/rapid-prototyping.html" 
            }
        ]
                       
    }
                       
           /* projects:     
              <li class="media">
    <a class="pull-left" href="http://vimeo.com/34641019">
    <img class="media-object" src="" >
  </a>
  <div class="media-body">
    <h4 class="media-heading">Jinni controller | Omek Interactive | 2012</h4>
    Motion controls for Jinni based content
    <br> [<a href="http://vimeo.com/34641019" target="_blank">video</a>]  
     [<a href="http://www.jinni.com" target="_blank">Jinni site</a>]  
      
</div>
  </li>            
        
          <li class="media">
    <a class="pull-left"  href="#">
    <img class="media-object" src="" >
  </a>
  <div class="media-body">
    <h4 class="media-heading">Greeting card creator | KCS technologies | 2009</h4>
      <!--
      [<a href="#" 
           target="_blank">description</a>]
    -->
   </div>
  </li>  
  
  */      
                  
    var articles2_SliderContent = 
    {
        items: 
        [
            {
                image : "img/omek-logo.png"
                , title: "Lerman A., Oz S. & Yanai Y. (2013). 8 principles to design gestures based interfaces. Omek Interactive."
                , description: ""
                ,link:"#"
            } 
            ,{
                image : "img/omek-logo.png"
                , title: "Lerman A., Oz S. & Yanai Y. (2013). Using augmented reality as a feedback system for gesture-based interfaces. Omek Interactive."
                , description: ""
                ,link:"#"
            } 
            ,{
                image : "img/omek-logo.png"
                , title: "Yanai Y. & Oz S. (2013). Designing a Practical UI for a gesture-based interface: the Arc menu. Omek Interactive."
                , description: ""
                ,link:"#"
            } 
            ,{
                image : "img/behance-logo.png"
                , title: "Oz S. (2012). Online portfolio: what should be the features of an online portfolio creator?"
                , description: ""
                ,link:"http://ar-ui.blogspot.co.il/2012/10/online-portfolio.html"
            } 
            ,{
                image : "http://1.bp.blogspot.com/-zHXx-dAj7zY/UIEWNozX46I/AAAAAAAABVo/yBo_nUHVYS0/s1600/iterative_dev_process.jpg"
                , title: "Oz S. (2012). Rapid prototyping: tips for developers."
                , description: ""
                ,link:"http://ar-ui.blogspot.co.il/2012/10/rapid-prototyping.html"
            } 
            ,{
                image : "img/ninjump.jpg"
                , title: "Oz S. (2011). Ninjump: addictive one-click game."
                , description: ""
                ,link:"http://ar-ui.blogspot.co.il/2011/07/ninjump.html"
            } 
            ,{
                image : ""
                , title: "Yanai Y., Oz S. & Lerman A. (2013). 8 principles for designing gesture-based applications. Omek Interactive."
                , description: ""
                ,link:"#"
            } 
            ,{
                image : ""
                , title: "Edri O., Aroch Y., Yosef  G. & Oz, S. (2007). Interactive environments for the special needs."
                , description: ""
                ,link:"http://os-constructivism.blogspot.co.il/2008/05/blog-post_18.html"
            } 
            ,{
                image : ""
                , title: "Oz S. (2008). What should I do with my students' projects?, or self-marketing in the information era."
                , description: ""
                ,link:"http://os-constructivism.blogspot.co.il/2008/05/blog-post_18.html"
            } 
            ,{
                image : "img/video-game-concetration-2.jpg"
                , title: "Amit H., Oz S. & Halevi H. (2009). Develop concentration with video games: possible or pretentious?"
                , description: ""
                ,link:"http://www.scribd.com/doc/114070994/%D7%A4%D7%99%D7%AA%D7%95%D7%97-%D7%A7%D7%A9%D7%91-%D7%95%D7%A8%D7%99%D7%9B%D7%95%D7%96-%D7%91%D7%A2%D7%96%D7%A8%D7%AA-%D7%9E%D7%A9%D7%97%D7%A7%D7%99-%D7%9E%D7%97%D7%A9%D7%91-%D7%90%D7%A4%D7%A9%D7%A8%D7%99-%D7%90%D7%95-%D7%93%D7%99%D7%9E%D7%99%D7%95%D7%9F"
             ,extraLinks: [
                    {
                        description: "game"
                        , link: "http://www.gamesmate.com/free-action-games/free-game-playing-with-fire2/free-game-playing-with-fire2.asp"
                    }
                ]
            }
        ]
    }
    
    
    var awards_SliderContent = 
    {
        items: 
        [
            {
                image : ""
                , title: "3rd place short film competition, 1996"
                , description: "Clip for The Beatles: 'little child'. With animated graphics. Filming and editing."
                ,link:"#"
            } 
            ,{
                image : "img/intel-logo.jpg"
                , title: "Significant contribution to multi-team collaboration inside Intel PerC, 2013"
                , description: ""
                ,link:"#"
            } 
            ,{
                image : "img/ecocinema-2007.jpg"
                , title: "echo cinema photography exhibition, 2007"
                , description: ""
                ,link:"http://www.ecocinema.org.il"
               
            }
        ]
    }
    
     var education_SliderContent = 
    {
        items: 
        [
            {
                image : "img/wisconsin-logo.png"
                , title: "Video games and learning, 2013"
                , description: "video games and its relation to psychology, learning and education. through: Coursera. Lecturers"
                ,link:"https://www.coursera.org/course/videogameslearning"
                ,extraLinks: [
                    {
                        description: "Constance Steinkuehler"
                        , link: "http://website.education.wisc.edu/steinkuehler/blog/"
                    }
                    ,{
                     description: "Kurt Squire"
                      , link: "http://website.education.wisc.edu/kdsquire/"
                    }
                    ,{
                     description: "course"
                      , link: "https://www.coursera.org/course/videogameslearning"
                    }
                    
                ]
            }
            ,{
                image : "img/cooper-logo.png"
                , title: "Goal-directed design foundations, Cooper, 2013"
                , description: "user experience design; personas; user stories;"
                ,link:"http://www.cooper.com/training/"
            }
            ,{
                image : "img/uc-san-diego.jpe"
                , title: "Human Computer Interaction, 2013"
                , description: "user experience design, user center design, usability studies through: Coursera. Lecturer:"
                ,link:"https://www.coursera.org/course/hci"
            ,extraLinks: [
                    {
                        description: "Scott Klemmer"
                        , link: "http://d.ucsd.edu/srk/"
                    }
                    ]
            }
        ]
    }
     
    var lironAndFriends_SliderContent = 
    {
        items: 
        [
            /*{
                image : "img/isr-mizrah.jpg"
                , title: "Israel, Mizrah, 2010"
                , description: "Silvester"
                ,link:"#"
            }
            ,{
                image : "img/isr-mizrah2.jpg"
                , title: "Israel, Mizrah, 2010"
                , description: "Silvester"
                ,link:"#"
            }
            ,*/{
                image : "img/isr-30-birthday.jpg"
                , title: "30th birthday, 2011"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/isr-30-birthday2.jpg"
                , title: "30th birthday, 2011"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/isr-30-birthday3.jpg"
                , title: "30th birthday, 2011"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/isr-30-birthday4.jpg"
                , title: "30th birthday, 2011"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/hosting.jpg"
                , title: "Shabat, 2013"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/hosting2.jpg"
                , title: "Shabat, 2013"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/independance-day-almog.jpg"
                , title: "Almog, Dead Sea, 2013"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/hosting3.jpg"
                , title: "Even Yehuda, 2012"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/isr-jer-anniversary.jpg"
                , title: "Israel, Jerusalem, 2013"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/isr-jer-shabat.jpg"
                , title: "Israel, Jerusalem, 2012"
                , description: ""
                ,link:"#"
            }
            /*
            ,{
                image : "img/isr-omek-rr.jpg"
                , title: "Celebrating Omek Adventure Park Release, Ramat Raziel, 2011"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/isr-omek-rr2.jpg"
                , title: "Celebrating Omek Adventure Park Release, Ramat Raziel, 2011"
                , description: ""
                ,link:"#"
            }*/
        ]
    }
    
     var lironAndMe_SliderContent = 
    {
        items: 
        [
            {
                image : "img/liron-me-jer-snow.jpg"
                , title: "israel, Jerusalem, 2012"
                , description: ""
                ,link:"#"
            } 
            ,{
                image : "https://fbcdn-sphotos-d-a.akamaihd.net/hphotos-ak-frc3/255299_10151022066892362_570923007_n.jpg"
                , title: "wedding, 2012"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/liron-me-mizrah.jpg"
                , title: "israel, Mizrah, 2012"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/liron-me-jer-snow2.jpg"
                , title: "israel, Jerusalem, 2013"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/liron-me-eilat-2.jpg"
                , title: "israel, Eilat, 2008"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/liron-me-jer-snow4.jpg"
                , title: "israel, Jerusalem, 2012"
                , description: ""
                ,link:"#"
            } 
            ,{
                image : "img/isr-hermon.jpg"
                , title: "israel, mt. Hermon, 2009"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/liron-eilat.jpg"
                , title: "israel, 2010"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/liron-me5.jpg"
                , title: "israel, Jerusalem, 2013"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/liron-me6.jpg"
                , title: "israel, 2012"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/liron-me7.jpg"
                , title: "israel, Jerusalem, 2013"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/liron-me8.jpg"
                , title: "israel, Eliachin, 2012"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/liron-jer.jpg"
                , title: "israel, 2010"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/isr-jordan3.jpg"
                , title: "israel, 2009"
                , description: ""
                ,link:"#"
            }
        ]
    }
    
     
     var photographyHiking_SliderContent = 
    {
        items: 
        [
            {
                image : "img/aus-st_helens.jpg"
                , title: "australia, st helens, 2005"
                , description: ""
                ,link:"#"
            } 
            ,{
                image : "img/isr-jer-snow.jpg"
                , title: "israel, Jerusalem winter, 2013"
                , description: ""
                ,link:"#"
            } 
            ,{
                image : "img/isr-almog1.jpg"
                , title: "israel, Almog Kibuts, Dead Sea, 2013"
                , description: ""
                ,link:"#"
            } 
            ,{
                image : "img/dead-sea.jpg"
                , title: "israel, Dead Sea, 2013"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/nz-taranaki-day-1.jpg"
                , title: "New Zealand, mt. Taranaki track, 2004" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/nz-river.jpg"
                , title: "New Zealand, 2004" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/liron-me-eilat-3.jpg"
                , title: "israel, Eilat, 2008"
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/nz-me.jpg"
                , title: "New Zealand, 2004" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/nz-tamranui-ohura.jpg"
                , title: "New Zealand, 2004" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/aus-st-helens-3.jpg"
                , title: "australia, st. helens, 2005" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/aus-brisbane.jpg"
                , title: "australia, brisbane, 2005" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/itl-lake-brise.png"
                , title: "Italy, Lake Brise, 2004" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/itl-lake-brise2.jpg"
                , title: "Italy, Lake Brise, 2004" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/aus-fraser-island-indian heads.jpg" 
                , title: "australia, fraser island, 2005" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/aus-queensland-cape-tribulation.jpg" 
                , title: "australia, cape tribulation, 2005" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "http://art.magicpage.co.il/photography/shaar/naturevsman/mong1.jpg"
                , title: "mongolia, 2004" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/mong-horse.jpg"
                , title: "mongolia, 2005" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/mong-ulangoom-olgi-ger.jpg"
                , title: "mongolia, 2005" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/mong-tavan-bogda.jpg"
                , title: "mongolia, 2005" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/nz-gilespie-pass-day2.jpg" 
                , title: "New Zealand, Gilspie Pass, 2004" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/beauty-the-cat.png" 
                , title: "Israel, 2006" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/isr-hula-lake.jpg" 
                , title: "Israel, 2009" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/isr-jordan.jpg" 
                , title: "Israel, 2006" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/aus-melbourne-bird.jpg"
                , title: "australia, melbourne, 2005" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/aus-strahan.jpg"
                , title: "australia, strahan, 2005" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/nz-arthurs-pass.jpg"
                , title: "New Zealand, Arthur's Pass, 2004" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/isr-habonim.jpg"
                , title: "israel, habonim beach, 2005" 
                , description: ""
                ,link:"#"
            }
            ,{
                image : "img/nz-gisborne-gardens.jpg"
                , title: "new zealand, gisborne, 2004" 
                , description: ""
                ,link:"#"
            }
        ]
    }
                   
     
     
    
     
     
     //creating new data list
     
     
     
     
     
     var TemplateType = "ListBased"; //or "ImageBased"
    
    function GenerateSliderItems(_items) 
    {
     $("#resultHtmlText").html("will be replaced with something");
            
        var allItemsInHtml="";
        
        //add pre html code to prepare the slider header
        
        allItemsInHtml += "<div class='cycle-slideshow' ";
        allItemsInHtml += "data-cycle-fx='scrollHorz' ";
        allItemsInHtml += "data-cycle-loader='true' ";
        allItemsInHtml += "data-cycle-auto-height='16:9' ";
        allItemsInHtml += "data-cycle-timeout='5000' ";
        allItemsInHtml += "data-cycle-pause-on-hover='true' ";
        allItemsInHtml += "data-cycle-overlay-template='<h4>{{title}}</h4><span>{{desc}}</span>' ";
        if (TemplateType == "ListBased") 
        { 
             allItemsInHtml += "data-cycle-slides='li' ";
        }
        allItemsInHtml += "> ";
        allItemsInHtml += "<div class='cycle-prev'><i class='icon-chevron-left'></i></div> ";
        allItemsInHtml += "<div class='cycle-next'><i class='icon-chevron-right'></i></div> ";
        allItemsInHtml += "<div class='cycle-overlay custom'></div> ";
        
        
        //generate items
        var currentItemHtmlTemplate="";
        
        for (var i=0; i< _items.length; i++) 
        {
            var currentItemData = _items[i];
           
            if (TemplateType == "ImageBased") 
            {
                //template for image based item 
                currentItemHtmlTemplate="<img src='"+currentItemData.image+"' ";
                currentItemHtmlTemplate += "data-cycle-desc='"+currentItemData.description+"' ";
                currentItemHtmlTemplate += "data-cycle-title='"+currentItemData.title+"' ";
                currentItemHtmlTemplate += "> ";
            } 
            else if (TemplateType == "ListBased") 
            {
                //template for list based item 
                currentItemHtmlTemplate="<li " + "data-cycle-title='"+currentItemData.title+"' ";
                currentItemHtmlTemplate += "data-cycle-desc='"+currentItemData.description+"'> ";
                currentItemHtmlTemplate += "<a href='"+currentItemData.link+"' target='_blank'> ";
                currentItemHtmlTemplate += "<img src='"+currentItemData.image+"'> ";
                currentItemHtmlTemplate += "</a></li> ";
            }
            
            
            
            allItemsInHtml += currentItemHtmlTemplate;
        }
    
        //close entire slider div
         allItemsInHtml += "</div>";
        
        //write html to gui
        $("#resultHtmlText").html(allItemsInHtml);
    }
    
           
           
    function GeneratePortfolioItems(_items) 
    {
     $("#resultHtmlText").html("will be replaced with something");
            
        var allItemsInHtml="";
        
        //add pre html code to prepare the slider header
        
        allItemsInHtml += "<ul class='media-list'> ";
        
        
        //generate items
        var currentItemHtmlTemplate="";
        
        for (var i=0; i< _items.length; i++) 
        {
            var currentItemData = _items[i];
           
            if (TemplateType == "ImagePullLeft") 
            {
                //template for image based item 
                currentItemHtmlTemplate="<li class='media'> ";
                currentItemHtmlTemplate += "<a class='pull-left' href='"+currentItemData.link+"' target='_blank'> ";
                currentItemHtmlTemplate += "<img class='media-object' src='"+currentItemData.image+"'></a> ";
                currentItemHtmlTemplate += "<div class='media-body'> ";
                currentItemHtmlTemplate += "<h4 class='media-heading'><a class='pull-left' href='"+currentItemData.link+"' target='_blank'>"+currentItemData.title+ "</a></h4> ";
                currentItemHtmlTemplate += currentItemData.description+"<br>";
                
                for (var i=0; i< currentItemData.extraLinks.length; i++) 
                {
                    var ExtraLink= currentItemData.extraLinks[i];
                    currentItemHtmlTemplate += "[<a href='"+ExtraLink.link+"' target='_blank'>"+ExtraLink.description+"</a>] ";
                }
                
                currentItemHtmlTemplate += "</div></li>";
            }
            
            allItemsInHtml += currentItemHtmlTemplate;
        }
    
        //close entire ul
         allItemsInHtml += "</ul>";
        
        //write html to gui
        $("#resultHtmlText").html(allItemsInHtml);
    }
    
    GenerateSliderItems(lironAndMe_SliderContent.items);
    
    
});



  var _tempItems = 
    {
        items: 
        []
    };
    
function AddNewItem()
{
    //add new item to list
    _tempItems.items.push(
        {
                image : "img/aus-st_helens.jpg"
                , title: "australia, st helens, 2005"
                , description: ""
                ,link:"#"
            } 
    );
    

    //write html to gui
//    $("input#itemtitle")
    console.log();
   // $("#listItems").html(  );
    
    /*
    //print all items
    var allItemsInHtml="";

    for (int i=0;i<_tempItems.items.length;i++;)
    {
        
        allItemsInHtml+="image:'"+_tempItems.items[i].image+"'";
        allItemsInHtml+=", title:'"+_tempItems.items[i].title+"'";
        allItemsInHtml+=", description:'"+_tempItems.items[i].description+"'";
        allItemsInHtml+=", link:'"+_tempItems.items[i].link+"'";

    }
    

    //write html to gui
    $("#listItems").html(allItemsInHtml);
    */
}
