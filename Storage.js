async function getmultipleusers() {
    let usersIds = [1, 2, 3, 4, 5, 999];

    for (let UserId of usersIds){
        try{
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/${UserId}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let user = await response.json();
            console.log(user.name);
        }
        catch (error) {
            console.error(`Error fetching user with ID ${UserId}:`, error.message);
        }
    }

}

getmultipleusers();



