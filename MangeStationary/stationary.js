const laptop = [
    {
        id: "win01",
        type: "windows",
        empid: 1

    },
    {
        id: "win02",
        type: "windows",
        empid: 2

    },
    {
        id: "win03",
        type: "windows",
        empid: 3

    },
    {
        id: "mac01",
        type: "macOS",
        empid: 4

    },
    {
        id: "mac02",
        type: "macOS",
        empid: 5

    },
    {
        id: "mac03",
        type: "macOS",
        empid: 6

    }
];


const employee = [
    {
        empid: 1,
        empname: "aman kazi",
        machineID: "mac01"

    },
    {
        empid: 2,
        empname: "azam kazi",
        machineID: "mac02"

    },
    {
        empid: 3,
        empname: "aman kazi",
        machineID: "mac01"

    },
    {
        empid: 4,
        empname: "azam kazi",
        machineID: "mac02"

    }
];





const GetEmployeeUsingMachineId = (machine) => {
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].machineID === machine) {
            return (employee[i]);
        } else {
            return ("no employee alloted with this machine ")
        }
    }
}


const GetMachineUsingEmployeeId = (empid) => {
    for (let i = 0; i < laptop.length; i++) {
        if (laptop[i].empid == empid) {
            return (laptop[i])
        } else {
            return (" no machine alloted with this employee ")
        }

    }

}


const ManageStationary = (machine, empid) => {
    if (machine == undefined) {
        return ("wrong input ")
    } else {
        const laptopObject = GetEmployeeUsingMachineId(machine)
        console.log(laptopObject);
    }

    if (empid == undefined) {
        return ("wrong input ")
    } else {
        const employeeObject = GetMachineUsingEmployeeId(empid);
        console.log(employeeObject);

    }




}

// const machine = "mac01";
const empid = 1  
ManageStationary(empid);