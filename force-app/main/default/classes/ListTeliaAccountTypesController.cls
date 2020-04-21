public with sharing class ListTeliaAccountTypesController {
    @AuraEnabled
    public static List<Telia_Account_Type__c> findAllAccountTypesFromDB() {
        return [
            SELECT Type_Id__c, Type__c, Price__c FROM Telia_Account_Type__c ORDER BY Type_Id__c ASC
        ];
    }
}
