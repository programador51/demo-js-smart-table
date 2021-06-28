export async function people(page,order,columnOrdering,additionalQuery){

    document.getElementById('profile-pic').src = 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'

    // If the api just can fetch pages, its okay, but anyway, we need to 
    // structure the function like this.

    let people = await fetch(`https://reqres.in/api/users?page=${page}`);

    people = await people.json();

    return people;
}