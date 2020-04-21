public with sharing class ListTeliaPostcodesController {
    @AuraEnabled
    public static List<Telia_Postcode__c> findAllPostcodesFromDB(){
        return [SELECT Postcode__c, City__c FROM Telia_Postcode__c];
    }
}
