<aura:application>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1>Tervetuloa Telia liittymän avaus lomakkeeseen:</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">Sukunimi</div>
            <div class="col-sm-6">
                <ui:inputText label="LastName" aura:id="lastName" value="{!v.lastName}" required="true" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">Etunimi</div>
            <div class="col-sm-6">
                <ui:inputText label="FirstName" aura:id="firstName" value="{!v.firstName}" required="true" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">Henkilötunnus</div>
            <div class="col-sm-6">
                <ui:inputText label="SSN" aura:id="ssn" value="{!v.ssn}" required="true" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">Osoite</div>
            <div class="col-sm-6">
                <ui:inputText label="Address" aura:id="address" value="{!v.address}" required="true" />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">Postinumero</div>
            <div class="col-sm-6">
                <c:PostcodeComponent />
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">Paikkakunta</div>
            <div class="col-sm-6">
                <ui:outputText value="{!v.detectedCity}" />
            </div>
         </div>
            <div class="row">
                <div class="col-sm-6">Liittymän typpi</div>
                <div class="col-sm-6">
                    <c:TypeComponent />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">Avauspäivä</div>
                <div class="col-sm-6">
                    <c:CreatedDateComponent />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">Lisätiedot</div>
                <div class="col-sm-6">
                    <ui:inputTextArea aura:id="comments" label="Comments" value="{!v.comments}" rows="5" />
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 center">
                    <ui:button>Lähetä</ui:button>
                </div>
            </div>
        </div>


</aura:application>