'use strict';
(function() {
    var db = {
        loadData: function(filter) {
            return $.grep(this.clients, function(client) {
                return (!filter.Name || client.Name.indexOf(filter.Name) > -1)
                    && (!filter.Age || client.Age === filter.Age)
                    && (!filter.Address || client.Address.indexOf(filter.Address) > -1)
                    && (!filter.Country || client.Country === filter.Country)
                    && (filter.Married === undefined || client.Married === filter.Married);
            });
        },
        insertItem: function(insertingClient) {
            this.clients.push(insertingClient);
        },
        updateItem: function(updatingClient) { },

        deleteItem: function(deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }
    };
    window.db = db;

    db.clients = [
        {
            "Employee ID": "1",
            "Contract Number": "001",
            "Contract Start Date": "25/3/2026",
            "Contract End Date": "24/3/2027",
            "Job Title": "Frontend",
            "Department": "Software", 
            "Branch": "Cairo",
            "Salary Type": "Monthly Salary ",
            "Contract Type": "Monthly ",
            "Salary": 20000,
            "Allowance": "-",
            "Bonus": "1500",
            "Deductions": "500",
            "Net Salary": "21000",
        },
        {
            "Employee ID": "1",
            "Contract Number": "001",
            "Contract Start Date": "25/3/2026",
            "Contract End Date": "24/3/2027",
            "Job Title": "Frontend",
            "Department": "Software", 
            "Branch": "Cairo",
            "Salary Type": "Monthly Salary ",
            "Contract Type": "Monthly ",
            "Salary": 20000,
            "Allowance": "-",
            "Bonus": "1500",
            "Deductions": "500",
            "Net Salary": "21000",
        },
        {
            "Employee ID": "1",
            "Contract Number": "001",
            "Contract Start Date": "25/3/2026",
            "Contract End Date": "24/3/2027",
            "Job Title": "Frontend",
            "Department": "Software", 
            "Branch": "Cairo",
            "Salary Type": "Monthly Salary ",
            "Contract Type": "Monthly ",
            "Salary": 20000,
            "Allowance": "-",
            "Bonus": "1500",
            "Deductions": "500",
            "Net Salary": "21000",
        },
        
       
    ];
}());