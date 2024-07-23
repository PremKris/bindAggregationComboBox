sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.AggregationBinding", {
            onInit: function () {
                
            },
            onAfterRendering:function (oEvent) {
                debugger

                var oItemTemplate = new sap.ui.core.ListItem({ text: "{vendorNo}" });
                var oComboBox = new sap.m.ComboBox();
                 oComboBox.bindAggregation("items", "/PODetails", oItemTemplate);
                 this.byId("page").addContent(oComboBox);

                //For unbinding
                //  oComboBox.unbindAggregation("items");
                //  oComboBox.unbindAggregation("items",true);


            }
        });
    });
