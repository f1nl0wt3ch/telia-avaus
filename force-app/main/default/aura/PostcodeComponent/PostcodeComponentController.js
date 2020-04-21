({
    myAction : function(com, event, helper) {

    },

    doInit : function(com, event, helper){
        helper.getAllPostcodes(com);
    },

    onSelectPostcodeChange : function(component, event, helper) {
        var postcodeList = component.get("v.postcodes");
        var selectedPostcode = component.find("postcodes").get("v.value");
        var city = '';
        for(var i=0; i < postcodeList.length; i++){
            if(postcodeList[i].Postcode__c === selectedPostcode){
                city = postcodeList[i].City__c;
                break;
            }
        }
        /*if(selectedPostcode) {
            var city = '';
            switch(selectedPostcode){
                case '00520':
                    city = 'Helsinki';
                    break;
                case '04430':
                    city = 'Järvenpää';
                    break;
                case '01280':
                    city = 'Vantaa';
                    break;
                case '00675':
                    city = 'Espoo';
                    break;
                default:
                    city = 'Ei ole tietoja';
            }
        }*/
        console.log("Selected postcode: "+selectedPostcode+" and detected city: "+city);
        component.find("detectedCity").set("v.value", city);
    }
})
