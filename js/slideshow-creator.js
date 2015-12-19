jQuery(document).ready(function (e) {
    
 /*
    creates a slideshow element using cycle library
    template type: "ListBased" or "ImageBased"
 
 */
  function GenerateSliderItems( _items, TemplateType ) 
    {
        //$("#resultHtmlText").html("will be replaced with something");
            
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
        
        console.log(allItemsInHtml);
        
        return allItemsInHtml;
        
        //write html to gui
        //$("#resultHtmlText").html(allItemsInHtml);
    }
    
   
    
    
});