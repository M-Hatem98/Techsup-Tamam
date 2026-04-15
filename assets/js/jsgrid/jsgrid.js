(function($) {
    "use strict";
    $("#basicScenario").jsGrid({
        width: "100%",
        filtering: true,
        editing: true,
        inserting: true,
        sorting: true,
        paging: true,
        autoload: true,
        pageSize: 15,
        pageButtonCount: 5,
        deleteConfirm: "Do you really want to delete the client?",
        controller: db,
        fields: [
            { name: "Employee ID", type: "text", width: 100 },
            { name: "Contract Number", type: "text", width: 100 },
            { name: "Contract Start Date", type: "text", width: 150 },
            { name: "Contract End Date", type: "text", width: 150 },
            { name: "Job Title", type: "text", width: 150 },
            { name: "Department", type: "text", width: 150 },
            { name: "Branch", type: "text", width: 150 },
            { name: "Salary Type", type: "text", width: 150 },
            { name: "Contract Type", type: "text", width: 150 },
            { name: "Salary", type: "text", width: 150 },
            { name: "Working Hours", type: "text", width: 150 },
            { name: "Overtime", type: "text", width: 150 },
            { name: "Allowance", type: "text", width: 150 },
            { name: "Bonus", type: "text", width: 150 },
            { name: "Deductions", type: "text", width: 150 },            
            { name: "Net Salary", type: "text", width: 150 },            
            { type: "control" , width: 80 },
        ]
    });

})(jQuery);
