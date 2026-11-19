let apiURL = import.meta.env.VITE_APP_APIURL;

const list = async ()=>{
    // Retrieve the list of projects
    try {
        let response = await fetch(apiURL + "/api/projects",
            {
                method: "GET"
            }
        );

        return response.json();
        
    } catch (error) {
        console.log(error);
    }
}

const create = async (project)=>{
    // Add a new project
    try {
        let response = await fetch(apiURL + "/api/projects",
            {
                method: "POST",
                body: JSON.stringify(project)
            }
        );

        return response.json();
        
    } catch (error) {
        console.log(error);
    }
}

const remove = async (id)=>{
    // Delete a project
    try {
        let response = await fetch(apiURL + "/api/projects/" + id, {
            method: "DELETE"
        });

        return response.json();
        
    } catch (error) {
        console.log(error);
    }
}

export { list, create, remove }