import { people } from "./api";

const headerConfig = [
    { 
        text:'ID',
        columnNameDB:'id',
        idHeader:'id_people',
        attributeToPrint:'id',
        sortable:false,
        sortThis:true
    },

    { text: 
        'Email', 
        columnNameDB: 'email', 
        idHeader: 'email_people', 
        attributeToPrint: 'email', 
        sortable: false 
    }
];

const sort = {
    sqlSort:true,
    sortASC:true
}

const attributesResponse = {
    pages:'total_pages',
    actualPage:'page',
    data:'data'
};

export const configurationUsers = {
    idTable:'people',
    idPagination:'pagination_people',
    pages:0,
    rows:[],
    actualPage:0,
    headerConfig,
    styleTable:'default',
    cbSelection:()=>{},
    idRows:'id',
    sort,
    paginationFn:people,
    attributesResponse
};
