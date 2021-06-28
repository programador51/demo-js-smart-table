import { people } from "./api";
import { DefaultTable } from 'js-smart-table/dist/pagination';
import { configurationUsers } from "./configuration-table";

let Users;

async function initialLoad(){
    const fetch = await people(1,'','');
    
    configurationUsers.actualPage = fetch.page;
    configurationUsers.pages = fetch.total_pages;
    configurationUsers.rows = fetch.data;

    Users = new DefaultTable(configurationUsers);
    Users.printTable();
    Users.printPagination();

    configurationUsers.cbSelection = () => {
        document.getElementById('profile-pic').src = Users.infoRow.avatar;   
    }

}

initialLoad();