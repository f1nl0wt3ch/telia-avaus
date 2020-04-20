({
    myAction : function(com, event, helper) {

    },

    onSelectPostcodeChange : function(component, event, helper) {
        var selectedPostcode = component.find("postcodes").get("v.value");
        if(selectedPostcode) {
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
            console.log("Selected postcode: "+selectedPostcode+" and detected city: "+city);
            component.find("detectedCity").set("v.value", city);
        }
    }
})
