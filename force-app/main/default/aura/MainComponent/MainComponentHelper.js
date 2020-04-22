({
    helperMethod : function() {

    },
    createNewAccount : function(com) {
        var action = com.get("c.createNewAccount");
            action.setParams({ "acc" : com.get("v.newAccount")});
            console.log("New account: "+JSON.stringify(com.get("v.newAccount")));
            action.setCallback(this, function(res){
                var state = res.getState();
                if(com.isValid() && state === 'SUCCESS'){
                    console.log("New account successfully created!");
                    document.getElementById("mainContainer").style.display = 'none';
                    document.getElementById("thankYouAlert").style.display = 'block';
                    setTimeout(function(){
                        window.location.href = "https://www.telia.fi/";
                    }, 3000);
                } else if(state === 'ERROR'){
                    var errors = res.getError();
                    console.log(JSON.stringify(errors));
                    if(errors){
                        if(errors[0] && errors[0].pageErrors && errors[0].pageErrors[0].statusCode === 'DUPLICATE_VALUE'){
                            console.log("Error while processing: "+ errors[0].pageErrors[0].message);
                            document.getElementById("alertWarningDiv").style.display = 'block';
                        }
                    }
                } else {
                    console.log("State was: "+ state);
                }
            });
            $A.enqueueAction(action);
    }
})
