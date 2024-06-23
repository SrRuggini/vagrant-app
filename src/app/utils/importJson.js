export async function importJsonByName(name, folder) {
    try {
        const jsonData = await import(`../data/${folder && folder + '/'}${name}.json`);
        return jsonData.default;
    } catch (error) {
        console.error(`Error loading JSON file: ${name}`, error);
        return null;
    }
}