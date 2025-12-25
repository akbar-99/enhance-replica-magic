export const submitToHubSpot = async (portalId: string, formId: string, data: Record<string, string>) => {
    const endpoint = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const fields = Object.keys(data).map((key) => ({
        name: key,
        value: data[key],
    }));

    const body = {
        fields,
        context: {
            pageUri: window.location.href,
            pageName: document.title,
        },
    };

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error("HubSpot Submission Error:", errorData);
            throw new Error("Failed to submit to HubSpot");
        }

        return await response.json();
    } catch (error) {
        console.error("HubSpot API Error:", error);
        // We don't necessarily want to throw here if EmailJS succeeded, 
        // but the task implies we want both.
        throw error;
    }
};
