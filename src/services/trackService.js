const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

async function index() {
    try {
        const response = await fetch(BASE_URL);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}


async function create(track) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(track),
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

async function update(track, trackId) {
    try {
        const response = await fetch(`${BASE_URL}/${trackId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(track),
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

async function deleteTrack(trackId) {
    try {
        const response = await fetch(`${BASE_URL}/${trackId}`, {
            method: 'DELETE',
        });
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export { index, create , update, deleteTrack };