
// fucntion defination block 
// -------------------------------------------------------------------------------------------


// collect all the users data linkd with role using role id 

const findConnectedUser = (roleId, UserRoleMap) => {
    const connectedData = [];
    for (let i = 0; i < UserRoleMap.length; i++) {
        if (UserRoleMap[i].roleId == roleId) {
            connectedData.push(UserRoleMap[i].userID);

        }
    } return connectedData;

}


// get all simillar data object from both arrays

const getUserDetails = (ans, UserDataSet) => {
    const ansvariable = [];
    for (let i = 0; i < ans.length; i++) {
        for (let j = 0; j < UserDataSet.length; j++) {
            if (ans[i] == UserDataSet[j].userId) {
                c = UserDataSet[j]
                ansvariable.push(c)

            }
        }

    }
    return ansvariable;
}






// main fucntion defination block 
// -------------------------------------------------------------------------------------------

const mainFunc = (roleId) => {

    // data defination block 
// -------------------------------------------------------------------------------------------

const UserDataSet = [
    {
        userName: "aman kazi",
        userId: "u01"
    },
    {
        userName: "azam kazi",
        userId: "u02"
    },
    {
        userName: "vidhi Sharma",
        userId: "u03"
    },
    {
        userName: "prashil sir",
        userId: "u04"
    },
    {
        userName: "mirhir agrawal",
        userId: "u05"
    },
    {
        userName: "yogesh sir",
        userId: "u06"
    },
    {
        userName: "ishita",
        userId: "u07"
    },
    {
        userName: "abhivyakti maheshwari",
        userId: "u08"
    }


];

const RoleDataSet = [
    {
        roleId: "r01",
        roleName: "trainer"
    },
    {
        roleId: "r02",
        roleName: "intern"
    },
    {
        roleId: "r03",
        roleName: "HR"
    }
];

const UserRoleMap = [
    {
        roleId: "r02",
        userID: "u01"
    },
    {
        roleId: "r02",
        userID: "u02"

    },
    {
        roleId: "r02",
        userID: "u03"

    },
    {
        roleId: "r02",
        userID: "u05"

    },

    {
        roleId: "r01",
        userID: "u04"

    },
    {
        roleId: "r01",
        userID: "u06"

    },
    {
        roleId: "r03",
        userID: "u07"

    },
    {
        roleId: "r03",
        userID: "u08"

    }
];




    // main fucntion passig serach id to sub function to find user connect to that id 

    const ans = findConnectedUser(roleId, UserRoleMap)
    console.log("these are the users with the givven role id: \n ", ans);

    // passing returned data from first fucntion to fetch details of users and add to array as a object

    const finalans = getUserDetails(ans, UserDataSet)
    console.log("these are the details of those users with input role id:  \n ", finalans);


}

// main fucntion calling block 
// -------------------------------------------------------------------------------------------
// add serach id here 
let searchid = "r03"

//passing serach id to main function
mainFunc(searchid);