namespace db;
entity PODetails {
    key vendorNo       : String;
    key orderNumber    : String;
        vendorName     : String;
        vendorGstin    : String;
        CompanyCode    : String;
        City           : String;
        TotalValue     : String;
        poDate         : String;
        poChangedate   : String;
        purchOrgName   : String;
        poVersion      : String;
        copySupplier   : String;
        PlantCode      : String;
        contractNo     : String;
        curr           : String;
        email          : String;
}