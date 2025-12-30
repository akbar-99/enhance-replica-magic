export const submitToHubSpot = async (portalId: string, formId: string, data: Record<string, string>) => {
    const endpoints = [
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`
    ];

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

    let lastError = null;

    for (const endpoint of endpoints) {
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                return await response.json();
            }

            const errorData = await response.json();
            console.error(`HubSpot Error (${endpoint}):`, errorData);
            lastError = errorData;
        } catch (error) {
            console.error(`Fetch Error (${endpoint}):`, error);
            lastError = error;
        }
    }

    const errorMessages = [];
    if (lastError?.message) errorMessages.push(lastError.message);
    if (lastError?.errors) {
        lastError.errors.forEach((err: any) => {
            if (err.message) errorMessages.push(err.message);
        });
    }

    throw new Error(
        errorMessages.length > 0
            ? errorMessages.join(" | ")
            : "Failed to submit to HubSpot. Please check your field mappings and configuration."
    );
};
