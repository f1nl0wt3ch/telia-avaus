({
    handleValueChange : function(component, event, helper) {
        var createdDate = component.find('mySelectedDate').get("v.value");
        component.set("v.newAccount.Created_Date__c", createdDate);
    }
})
