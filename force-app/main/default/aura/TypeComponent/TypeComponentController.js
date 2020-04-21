({
    onSelectTypeChange : function(component, event, helper) {
        var selectedType = component.find("types").get("v.value");
        if(selectedType) {
            var price = '';
            console.log(typeof selectedType+" index: "+selectedType);
            switch(selectedType){
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
            }
            component.find("detectedPrice").set("v.value", price);
        }
    }
})
