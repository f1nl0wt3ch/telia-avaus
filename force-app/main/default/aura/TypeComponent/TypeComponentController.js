({
    doInit: function(component, event, helper){
       helper.getAllAccountTypes(component);
    },
    onSelectTypeChange : function(component, event, helper) {
        var typeList = component.get("v.types");
        var selectedType = component.find("types").get("v.value");
        if(selectedType && typeList.length > 0) {
            console.log("Selected account type: "+selectedType);
            var price = typeList[parseInt(selectedType) - 1].Price__c;
           /* switch(selectedType){
                case 0:
                    price = '12.00 €/kk';
                    break;
                case 1:
                    price = '7.00 €/kk';
                    break;
                case 2:
                    price = '24.00 €/kk';
                    break;
                case 3:
                    price = '5.00 €/kk';
                    break;
                default:
                    price = '24.00 €/kk';
            }*/
            component.find("detectedPrice").set("v.value", price);
            component.set("v.newAccount.Account_Type__c", typeList[parseInt(selectedType) - 1].Id);
        }
    }
})
