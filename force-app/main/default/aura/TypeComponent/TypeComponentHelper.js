({
    getAllAccountTypes : function(com) {
        var action = com.get("c.findAllAccountTypesFromDB");
        action.setCallback(this, function(res){
            var state = res.getState();
            if(com.isValid() && state === 'SUCCESS'){
                console.log(JSON.stringify(res.getReturnValue()));
                com.set("v.types", res.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})
