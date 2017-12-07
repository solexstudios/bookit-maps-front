// Calling this function selects relevant resources that are filtered accordingly

const selectResources = (resources = [], {text, library, floor}) => {
    if(resources.length > 0){

        // Fetch all data from specific library
        const results = resources.filter((resource) => {
            const libraryMatch = resource.name.toLowerCase() == library.toLowerCase();
            return libraryMatch;
        })[0].locations;
    
        // Combine into one object
        let objects = [];
        for (let i = 0; i< results.length; i++){
            objects = objects.concat(results[i].resources);
        }

        // Filter by text if library exists
        if(!!library){
            const textFiltered = objects.filter((resource) => {
                const textMatch = resource.name
                .toLowerCase()
                .replace(/\W/g, '')
                .includes(
                    text.toLowerCase().replace(/\W/g, '')
                );
                return textMatch;
            });

            return textFiltered;
        }
        return objects;
    } else {
        return resources;
    }
}

export default selectResources;