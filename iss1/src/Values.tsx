
class Values {
    // Pages
    // static siteUrl = "http://localhost:3000"; 
    static siteUrl = "https://tchibo-cafeluta.netlify.com";
    static homePageUrl = "/";
    static manageTablesUrl = "/manage-tables";
    static statisticsUrl = "/statistics";
    static loginPageUrl = "/login";
    static registerPageUrl = "/register";
    static usersPageUrl = "/users";
    static manageUsersPageUrl = "/manage-users";
    static manageDatabasePageUrl = "/manage-database";
    static chatPageUrl = "/chat";

    // Colors
    static mainColor = "#0f7d4d";
    static secondaryColor = "#0c5937";

    // Backend

    // static backendUrl = "https://exquisite-fox.chickenkiller.com";
    static backendUrl = "http://localhost:8080";

    static baseBackendUrl = this.backendUrl + "/api";
    static websocketUrl = this.backendUrl + "/ws";

    // Others

    static publicBucketUrl = "/bucketList/public"
    
    // Login
    static loginUrl = "/login";
    static registerUrl = "/register";
    static activateAccountUrl = "/register/confirm";
}

export default Values;