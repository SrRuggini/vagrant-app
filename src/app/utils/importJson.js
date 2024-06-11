export async function importJsonByName(name) {
    try {
        const jsonData = await import(`../data/${name}.json`);
        return jsonData.default;
    } catch (error) {
        console.error(`Error loading JSON file: ${name}`, error);
        return null;
    }
}