({
    getAllPostcodes : function(com) {
       var action = com.get("c.findAllPostcodesFromDB");
       action.setCallback(this, function(res){
           var state = res.getState();
           if(com.isValid() && state === "SUCCESS"){
               com.set("v.postcodes", res.getReturnValue());
           }
       });
       $A.enqueueAction(action);
    }
})
