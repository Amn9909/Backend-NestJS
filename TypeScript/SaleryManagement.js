var ManageSalaries = /** @class */ (function () {
    function ManageSalaries(m, MinSal, MaxSal) {
        this.FindMonthWiseSalary = function (month, MonthWiseSalary, minimumSalary, maximumSalary) {
            var ArrayOfSalaryId = [];
            for (var i = 0; i < MonthWiseSalary.length; i++) {
                for (var j = 0; j < month.length; j++) {
                    if (MonthWiseSalary[i].month == month[j] && MonthWiseSalary[i].ammount >= minimumSalary && MonthWiseSalary[i].ammount <= maximumSalary) {
                        var tempData = MonthWiseSalary[i].salId;
                        var salamnt = MonthWiseSalary[i].ammount;
                        var tempMonth = month[j];
                        ArrayOfSalaryId.push({ salId: tempData, ammount: salamnt, month: tempMonth });
                    }
                }
            }
            return ArrayOfSalaryId;
        };
        this.FindEmployeeWithThatSalId = function (SalaryData, MapingSaleryToEmployee) {
            var ArrayOfEmpId = [];
            for (var i = 0; i < SalaryData.length; i++) {
                for (var j = 0; j < MapingSaleryToEmployee.length; j++) {
                    if (SalaryData[i].salId == MapingSaleryToEmployee[j].salId) {
                        var empid = MapingSaleryToEmployee[j].empid;
                        var ammount = SalaryData[i].ammount;
                        var tempMonth = SalaryData[i].month;
                        ArrayOfEmpId.push({ empid: empid, ammount: ammount, month: tempMonth });
                    }
                }
            }
            return ArrayOfEmpId;
        };
        this.FindEmployeeDetailsWithEmpid = function (EmployeeId, EmployeeData) {
            var ArrayOfEmployeeDetails = [];
            for (var i = 0; i < EmployeeId.length; i++) {
                for (var j = 0; j < EmployeeData.length; j++) {
                    if (EmployeeId[i].empid == EmployeeData[j].empid) {
                        var empid = EmployeeId[i].empid;
                        var ammount = EmployeeId[i].ammount;
                        var tempMonth = EmployeeId[i].month;
                        var empName = EmployeeData[j].empName;
                        ArrayOfEmployeeDetails.push({ empid: empid, empName: empName, month: tempMonth, ammount: ammount });
                    }
                }
            }
            return ArrayOfEmployeeDetails;
        };
        this.month = m;
        this.minimumSalary = MinSal;
        this.maximumSalary = MaxSal;
    }
    return ManageSalaries;
}());
// Calling of function 
// const SalaryData = obj.FindMonthWiseSalary(month , MonthWiseSalary, minimumSalary, maximumSalary);
// console.log("salerydata ",SalaryData);
// const EmployeeId = obj.FindEmployeeWithThatSalId(SalaryData, MapingSaleryToEmployee);
// console.log("employeeid ",EmployeeId);
// const EmployeeDetails = obj.FindEmployeeDetailsWithEmpid(EmployeeId, EmployeeData);
// console.log(EmployeeDetails);
// Creating Details of Employees _______________________________________________________________
var EmployeeData = [
    {
        empid: "emp1",
        empName: "Aman kazi"
    },
    {
        empid: "emp2",
        empName: "Azam kazi"
    },
    {
        empid: "emp3",
        empName: "nihal"
    }
];
// Maping Details of Employees with Salery _____________________________________________________
var MapingSaleryToEmployee = [
    {
        empid: "emp1",
        salId: "JanSal1"
    },
    {
        empid: "emp2",
        salId: "JanSal2"
    },
    {
        empid: 'emp3',
        salId: "JanSal3"
    },
    {
        empid: "emp1",
        salId: "FebSal1"
    },
    {
        empid: "emp2",
        salId: "FebSal2"
    },
    {
        empid: 'emp3',
        salId: "FebSal3"
    },
    {
        empid: "emp1",
        salId: "MarSal1"
    },
    {
        empid: "emp2",
        salId: "MarSal2"
    },
    {
        empid: 'emp3',
        salId: "MarSal3"
    }
];
// Maping salery to the month with ammount of salery
var MonthWiseSalary = [
    {
        salId: "JanSal1",
        month: "jan",
        ammount: 1100
    },
    {
        salId: "JanSal2",
        month: "jan",
        ammount: 1401
    },
    {
        salId: "JanSal3",
        month: "jan",
        ammount: 1501
    },
    {
        salId: "FebSal1",
        month: "feb",
        ammount: 1042
    },
    {
        salId: "FebSal2",
        month: "feb",
        ammount: 1042
    },
    {
        salId: "FebSal3",
        month: "feb",
        ammount: 1032
    },
    {
        salId: "MarSal1",
        month: "mar",
        ammount: 1303
    },
    {
        salId: "MarSal2",
        month: "mar",
        ammount: 1053
    },
    {
        salId: "MarSal3",
        month: "mar",
        ammount: 1633
    },
    {
        salId: "AprSal1",
        month: "apr",
        ammount: 1404
    },
    {
        salId: "AprSal2",
        month: "apr",
        ammount: 1734
    },
    {
        salId: "AprSal3",
        month: "apr",
        ammount: 1544
    },
    {
        salId: "MaySal1",
        month: "may",
        ammount: 1415
    },
    {
        salId: "MaySalal2",
        month: "may",
        ammount: 1047
    },
    {
        salId: "MaySalal3",
        month: "may",
        ammount: 1502
    },
    {
        salId: "JuneSal1",
        month: "june",
        ammount: 1055
    },
    {
        salId: "JuneSal2",
        month: "june",
        ammount: 1206
    },
    {
        salId: "JuneSal3",
        month: "june",
        ammount: 1051
    }
];
var obj = new ManageSalaries(["jan", "feb"], 1000, 1500);
console.log(obj.FindMonthWiseSalary());
