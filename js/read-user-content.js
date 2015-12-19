jQuery(document).ready(function (e) {
    
    /**
    general functions
    **/
    

    // Retrieve object from local storage
    function ReadObjectFromStorage(name_to_read)
    {
        return JSON.parse(localStorage[name_to_read]);  
    };
    
   
    
    
    
    var projects_obj = ReadObjectFromStorage("project-list"); //works!!! all user items are here . 
    /*
    notes:
    this data stored locally on the user machine/ browser. therefore can be deleted.
    only object data should be saved this way, not item designs.
    user should be able to save different lists of items, meaning he would need to put a name per list. or have a UI that allows him to say which items he wants each time. 
    */
    
    console.log("new page "+projects_obj.items[0].title);
    
});