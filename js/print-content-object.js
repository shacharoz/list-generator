jQuery(document).ready(function (e) {
    
    /**
    general functions
    **/
    
    /* updates content inside a div or text field input */
    function UpdateField(field_id, new_value)
    {
        document.getElementById(field_id).value = new_value;
    };
    
    //print resulted code to text area
    function UpdateHtmlPage(new_html, parent_div_id)
    {
        $("#"+parent_div_id).html(new_html);
    };
    
    //add more code to text area or div
    function AddHtmlToPage(new_html, parent_div_id)
    {
        $("#"+parent_div_id).append(new_html);
    };
    
    //ready for saving to a file
    function SaveToFile(data_object)
    {
        var rr = "data:application/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(data_object));

        console.log(rr);
    };
    
    //save object to local storage
    function SaveObjectToStorage(data_object, name_for_value)
    {
        // JSON makes a convenient encoding for any primitive or data structure
        localStorage.setItem( name_for_value, JSON.stringify(data_object) );  // Encode and store
        
        console.log("saved to storage: "+data_object);
    };
    
    // Retrieve object from local storage
    function ReadObjectFromStorage(name_to_read)
    {
        return JSON.parse(localStorage.getItem(name_to_read));  
    };
    
    // Retrieve object from string (textbox)
    function ReadObjectFromText(text_string)
    {
        return JSON.parse(text_string);
    };
    
    //returns a node ancestor that has the searched id
    function FindAncestorWithID(node, searched_id) {
        var parent = node;
            
        if (parent.id != null && parent.id == searched_id){
            return parent;
        } else {
            parent = parent.parentNode;
            console.log(parent.id);

            if (parent.tagName!="BODY"){
                FindAncestorWithID(parent,searched_id);
            } else {
                return "";
            }
        }
    };
    
    //returns the first ancestor that has id
    function GetAncestorID(node) {
        var parent = node.context.parentNode;
        while ( parent = parent.parentNode )
        {
           if (parent.id != null)
           {
               return parent.id;
           }
        }
        
        return null;
    };
    
    function UpdateImageSource(image_item, new_image_path){
        image_item.attr("src",new_image_path);
    };
    
    /**
    ----------------------------------------------------------
    **/
    
    
    
    
    var sample_item_data = {
                image : "http://dummyimage.com/400x400/aaaaaa/ff0000.jpg"
                , title: "project title, year"
                , description: "project description"
                , link:"www.website.com"
            };
    
    var _tempItems = {
        
        items: 
        [
            {
                image : "http://dummyimage.com/600x400/aaaaaa/ffff00.jpg"
                , title: "project title, year"
                , description: "project description"
                , link:"www.website.com"
            }    
        
        ]
        
        , date: Date.now
        , list_title: "some-title"
        
    };
    
    /**
    ----------------------------------------------------------
    **/
     
    
    
     /*
    creates a slideshow element using cycle library
    template type: "ListBased" or "ImageBased"
  */
  function GenerateSliderItems( _items, TemplateType ) 
    {
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
        console.log("_items.length "+_items.length);
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
        
        return allItemsInHtml;
    }
    
  
    
     /*
    creates a list of Standard items
    image ful width and the text caption under it
 */
    function AddOneStandardItem(_dataObj, index, isModalLink, forPublish)
    {
        var currentItemHtmlTemplate = ""; 
        currentItemHtmlTemplate =  "\n<div class='col-md-6'> ";
        currentItemHtmlTemplate += "\n<div class='any-item-spacing standard-item'";
        
        if (forPublish == "false")
        {
            if (index > -1)
            {
                currentItemHtmlTemplate += "id='standard_editable_"+ index.toString()+ "'";
            }
        }
            currentItemHtmlTemplate +=  "> ";
        
        //link data
           
            if (forPublish == "true") {
                currentItemHtmlTemplate += "\n<a ";
             currentItemHtmlTemplate += " href='"+ _dataObj.link + "' target='_black' ";
              
            if (isModalLink == "true")
            {
                currentItemHtmlTemplate += " class='portfolio-link' data-toggle='modal' ";
            }
            currentItemHtmlTemplate += " > ";
            }
        
        //image data
            currentItemHtmlTemplate += "\n<div class='item-image-wrapper'> "; 
            currentItemHtmlTemplate += "\n<img src='"+ _dataObj.image + "' class='item-image' alt='' ";
            currentItemHtmlTemplate += " /> </div> ";
            
        currentItemHtmlTemplate += "\n<div class='item-caption-bottom'> ";
        
        //title data
        currentItemHtmlTemplate += "\n<h3 class='item-caption-title' ";
        if (forPublish == "false")
        {       
            currentItemHtmlTemplate += " contenteditable='true' data-info-type='title' ";
        } 
        currentItemHtmlTemplate += " >" + _dataObj.title+"</h3> ";
        
        //description data
            currentItemHtmlTemplate += "\n<p class='item-caption-desc'";
          if (forPublish == "false")
        {       
            currentItemHtmlTemplate += " contenteditable='true' data-info-type='description' ";
        } 
         currentItemHtmlTemplate += ">"+_dataObj.description+"</p> ";
        
        currentItemHtmlTemplate += "  </div>";
        
        
        //image and link div
        if (forPublish=="false")
        {
             currentItemHtmlTemplate += "\n<div class='item-caption-hover'> ";
             currentItemHtmlTemplate += "\n<span>Image path: </span><span contenteditable='true' data-info-type='image'>"+_dataObj.image+"</span>";
             currentItemHtmlTemplate += "\n<br><span>Link when press: </span><span contenteditable='true' data-info-type='link'>"+_dataObj.link+"</span>";
             currentItemHtmlTemplate += "\n<br><button type='button' class='btn btn-default btn-lg'>x close</button>";
             currentItemHtmlTemplate += "\n</div>";
        }
        
        if (forPublish=="true")
        {
            currentItemHtmlTemplate += "  </a> ";
        }
        
       currentItemHtmlTemplate += "   </div> </div> ";
          
        
        return currentItemHtmlTemplate;
    }
    
    function GenerateStandardItems( _items, isModalLink, isPublish ) 
    {
        var allItemsInHtml="";
        
           //add pre html code to prepare the slider header
              
                      
             
          //generate items
        //var currentItemHtmlTemplate="";
        
        for (var i=0; i< _items.length; i++) 
        {
           allItemsInHtml += AddOneStandardItem(_items[i], i, isModalLink, isPublish);  
        }
    
        //close entire slider div
        
        return allItemsInHtml;
    }
    
  
    
    
    
function add_onClick_for_item_caption()
{
    $('.item-image-wrapper').click( 
        function(){
            var child_div=$(this).parent().find(".item-caption-hover");

            child_div.css("display","block");
    });
};
function add_onClick_for_item_caption_close_button()
{
    $('.item-caption-hover button').click( 
        function(){
            $(this).parent().css("display","none");
    });
};
    
function add_onFocusOutEvent_for_editable_elements()
{
  var editableItems = document.querySelectorAll('[contenteditable=true]');
  
  for (var i=editableItems.length-1; i>=0; i--)
  {         
    //onblur == onfocus out
      //first validate that element has no event already
      if (editableItems[i].onblur == null){
        
          //add new event
          editableItems[i].onblur = function()
        {   
            //get id and index of parent item
            var parent_item_id = GetAncestorID($(this));
            var item_index = parseInt(parent_item_id.substring (18, parent_item_id.length));

            //get the type of this data (title / image / desc ...)
            var property_type = $(this).context.getAttribute('data-info-type'); 
            //get the value from the element
            var new_val = $(this).html();

            console.log(_tempItems.items);

            //update the property at the data object
            UpdateOnePropertyOfItem(item_index, property_type, new_val);

            
            //update image in real time
            if (property_type=="image")
            {
                var image_item = $("#"+parent_item_id+" img");
                UpdateImageSource( image_item , new_val);
            }


            //set style for content
            $(this).css("background-color","#000000");
            $(this).css("color","#ffffff");
            //
        }
      }
  }
};

function add_onFocusEvent_for_editable_elements()
{
  var editableItems = document.querySelectorAll('[contenteditable=true]');
    
  for (var i=editableItems.length-1; i>=0; i--)
  {
      if (editableItems[i].onfocus==null){

        //onfocus == focus in   
        editableItems[i].onfocus = function()
        {     
            //set style for content
            $(this).css("background-color","#FFFFFF");
            $(this).css("color","#000000");
            //
        }
      }
  }
};
    
function add_onClick_for_list_names()
{
    $('.button-existed-list').on('click', function (e) {
      
        GetDataObjectFromStorageByName($(this).html());
        
      $('#add-one-more-item-bt').css('visibility','visible');
       $('#result-gallery').css('visibility','visible');
       
    });
};


function UpdateOnePropertyOfItem(index,item_property,new_value) {
    //console.log(index+" "+item_property+" "+new_value);
    _tempItems.items[index][item_property] = new_value;
    console.log(_tempItems.items);
};
    
    
    
    $('#update-code-bt').on('click', function (e) {
        
        //console.log(_tempItems.items);
        //generate new release
        var resultHtml = GenerateStandardItems(_tempItems.items, "false", "true");
        
        //write publish code ready for copy
        UpdateHtmlPage(resultHtml, "item-result-code");
        
        //save to storage
        var user_list_name = $('#storage-list-name').html();
        _tempItems.list_title = user_list_name;
        _tempItems.date= Date.now;
        SaveObjectToStorage(_tempItems, "app-item-visualizer:"+user_list_name);
        
        //write publish object code ready for copy
        UpdateHtmlPage(JSON.stringify(_tempItems), "full-list-object-code");
    });
    
    $('#add-one-more-item-bt').on('click', function (e) {

        //add new item data to the data object
        var new_item = Object.create(sample_item_data);
        //Object.create() is the only way to duplicate an object. otherwise all objects will be connected.
        _tempItems.items.push({ 
            description: new_item.description,
            image: new_item.image,
            title:new_item.title,
            link:new_item.link
        });
        
        //generate the html code
        var newSampleItemHtml = AddOneStandardItem(sample_item_data, _tempItems.items.length-1, "false", "false");
        
        //add more code to the current gallery
        AddHtmlToPage (newSampleItemHtml, "result-gallery");
        
        //create neccessary events
        add_onFocusOutEvent_for_editable_elements();
        add_onFocusEvent_for_editable_elements();
        add_onClick_for_item_caption();
        add_onClick_for_item_caption_close_button();
        
    });
    
    
    $('#update-visualization-standard-items-bt').on('click', function (e) {

        GenerateCodeStandardItems();
    });
    
    $('#update-visualization-gallery-bt').on('click', function (e) {

        GenerateCodeGallery();
    });
     
    
    
    /* Menu system */
    //create a new list
  $('#start-new-list-bt').on('click', function() {
      $('#create-new-list').css('visibility','visible');
      $('#load-previous-list').css('visibility','hidden');
      $('#upload-list-from-raw-code').css('visibility','hidden');
     
        $('#add-one-more-item-bt').css('visibility','visible');
        $('#result-gallery').css('visibility','visible');
      
      
        //generate code for items
        GenerateCodeStandardItems();
        //create all neccessary events
        add_onFocusOutEvent_for_editable_elements();
        add_onFocusEvent_for_editable_elements();
        add_onClick_for_item_caption();
        add_onClick_for_item_caption_close_button();
        add_onClick_for_list_names();
  });
    
    //start from a saved place
 $('#load-previous-list-bt').on('click', function() {
      $('#create-new-list').css('visibility','hidden');
      $('#upload-list-from-raw-code').css('visibility','hidden');
      $('#load-previous-list').css('visibility','visible');
      
      $('#add-one-more-item-bt').css('visibility','hidden');
       $('#result-gallery').css('visibility','hidden');
         
  });
    
    
    //upload-list-object-bt
  $('#upload-list-object-bt').on('click', function() {
      $('#create-new-list').css('visibility','hidden');
      $('#upload-list-from-raw-code').css('visibility','visible');
      $('#load-previous-list').css('visibility','hidden');
      
      $('#add-one-more-item-bt').css('visibility','hidden');
      $('#result-gallery').css('visibility','hidden');
       
  });
    
  $('#upload-object-bt').on('click', function() {
      var object_as_text = document.getElementById("full-raw-list-object-code").value;
      console.log(object_as_text);
      var dataObj = ReadObjectFromText( object_as_text );
      
      _tempItems.items = dataObj.items;
      
        _tempItems.date=(dataObj.date != null) ? dataObj.date : Date.now;
      
      
      
      //generate code for items
        GenerateCodeStandardItems();
        //create all neccessary events
        add_onFocusOutEvent_for_editable_elements();
        add_onFocusEvent_for_editable_elements();
        add_onClick_for_item_caption();
        add_onClick_for_item_caption_close_button();
        add_onClick_for_list_names();
  });
    
    /* ******************** */
    

function GenerateCodeStandardItems(){
    //TODO take content object and generate items

    //generate new editable visualization
    var resultHtml = GenerateStandardItems(_tempItems.items, "false", "false");

    //replace the current gallery with new code
    UpdateHtmlPage(resultHtml,"result-gallery");
};

function GenerateCodeGallery(){
    //TODO take content object and generate a new gallery

    //generate new visualization
    var resultHtml = GenerateSliderItems(_tempItems.items, "ListBased","false");

    //replace the current gallery with new code
    UpdateHtmlPage(resultHtml,"result-gallery");
};


function GetDataObjectFromStorageByName(key_name){   
    //check if there's saved content already
    var data_from_storage = ReadObjectFromStorage("app-item-visualizer:"+ key_name);
    if (data_from_storage != null){
        
        //update the title bar
        $('#storage-list-name').html(key_name);
        $('#add-one-more-item-bt').css('visibility','visible');
        
        _tempItems = data_from_storage;

        //generate code for items
        GenerateCodeStandardItems();
        //create all neccessary events
        add_onFocusOutEvent_for_editable_elements();
        add_onFocusEvent_for_editable_elements();
        add_onClick_for_item_caption();
        add_onClick_for_item_caption_close_button();
        add_onClick_for_list_names();
    }
};
    
    
    
    
    //on selecting a new list item from the dropdown
   $('#myDropdown').on('show.bs.dropdown', function () {
        // do something…
   });
   
    /* on page load */
    //ready the dropdown list from bootstrap
    //$('.dropdown').dropdown();
   
    //populate data from storage into dropdown
    for (var key in localStorage) {
        var key_name;
        if (key.search("app-item-visualizer:")>-1) {
            key_name = key.substring (20, key.length);
            AddHtmlToPage("<div class='button-existed-list'>"+key_name+"</div>", "existed-lists");
            
        }
    }
    
    add_onClick_for_list_names();
   
   
});


