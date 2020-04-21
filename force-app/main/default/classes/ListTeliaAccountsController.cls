public with sharing class ListTeliaAccountsController {
    @AuraEnabled
    public static List<Telia_Account__c> fillAllTeliaAccountsFromDB() {
        return [SELECT Account_Id__c, Firstname__c, Lastname__c, Address__c, Postcode__c,
                       Created_Date__c, SSN__c, Account_Type__c, Comments__c FROM Telia_Account__c ];
    }
}
